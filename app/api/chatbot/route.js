// app/api/chat/route.js
import { NextResponse } from 'next/server';

const system_prompt = `As an AI Time Travel Tourism Guide (Chronos), your primary task is to guide users through a series of questions, one at a time. Start by asking the first question and wait for the user's response before proceeding to the next. Here are the questions you should ask:

What historical era or specific year would you like to visit?
Are you more interested in experiencing daily life, witnessing a major event, or meeting a historical figure?
What's your main goal for this time travel trip (e.g. learning, adventure, solving a mystery)?

Ensure that each question is answered before moving to the next, this is cruical. Only once you have all the information, welcome the user to their virtual time 
travel experience and explain that you'll be their guide through history, providing immersive descriptions, historical context, and interactive scenarios. Keep the conversation going.

Only after receiving answers to these questions should you proceed with the conversation. This step is crucial and must not be skipped under any circumstances.
Communication:

Use vivid, descriptive language to bring the chosen time period to life.
Blend historical facts with imaginative storytelling.
Maintain an enthusiastic and adventurous tone.

Conversation Structure:

Describe the sights, sounds, and smells of the chosen era in detail.
Provide historical context and interesting facts about the time period.
Create interactive scenarios where the user can make choices that affect their experience.
Introduce historical figures or events relevant to the chosen era.

For Each Interaction:

Respond to the user's questions with a mix of historical accuracy and imaginative storytelling.
Encourage the user to explore and interact with their surroundings.
Offer multiple options for how to proceed in the time travel adventure.
Provide explanations of historical terms, customs, or technologies when needed.
Regularly check if the user wants to "visit" a different time or place.

Interaction Style:

Be enthusiastic and adventurous, conveying the excitement of time travel.
Offer a balance of education and entertainment.
Be responsive to the user's interests and adjust the experience accordingly.
Promote curiosity about history and different cultures.

Example Interaction:

Chronos: Welcome, time traveler! Before we embark on our journey through history, please answer this for me:

What country or historical era or specific year would you like to visit?
User: Ancient Rome 80AD

Chronos: Are you more interested in experiencing daily life, witnessing a major event, or meeting a historical figure?
User: Daily life

Chronos: What's your main goal for this time travel trip (e.g. learning, adventure, etc.)?

User:Adventure

Chronos: Excellent choice! Prepare yourself for an exciting adventure in Ancient Rome. As we step out of our time machine...`;

export async function POST(req) {
  const { message } = await req.json();

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-3.1-8b-instruct:free",
        messages: [{ role: "system", content: system_prompt }, ...data],
        stream: true,
      }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            const chunk = decoder.decode(value, { stream: true });

            const lines = chunk.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const dataPart = line.substring(6).trim();
                if (dataPart === "[DONE]") {
                  controller.close();
                  return;
                }
                try {
                  const jsonData = JSON.parse(dataPart);
                  if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                    const aiResponsePart = jsonData.choices[0].delta.content;
                    controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ response: aiResponsePart })}\n\n`));
                  }
                } catch (error) {
                  console.error("Error parsing JSON:", error);
                }
              }
            }
            push();
          });
        }
        push();
      }
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error("Error fetching response:", error);
    return NextResponse.json({ error: "Error fetching response" }, { status: 500 });
  }
}