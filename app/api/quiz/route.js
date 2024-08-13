import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log("API");
  const { userTopic } = await req.json();
  console.log(userTopic);
  let topic = "world history";
  if (userTopic != ""){
    topic = userTopic;  
  }
 
  console.log(topic);

  const system_prompt = `You are a history quiz generator for ${topic}. Always remember this crucial thing - Do not include any explanation or text (like json: or name of json) other than the JSON itself. ONLY return a JSON array of 15 multiple-choice questions about ${topic}. Each question should have 4 options and one correct answer. Format the response as a JSON array, where each object represents a question with properties: question, options (array), and correctAnswer.`;
  const message = `Generate a JSON ONLY response for a history quiz on ${topic} with 10 questions.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
          { "role": "system", "content": system_prompt },
          { "role": "user", "content": message },
        ],
        response_format: { "type": "json_object" },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();

    // Directly use the content if it's already JSON
    let questions;
    try {
      questions = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
        console.log(typeof(data.choices[0].message.content))
        console.log("This is the ouput "+ data.choices[0].message.content)
      throw new Error("Response is not valid JSON: " + data.choices[0].message.content);
    }

    return NextResponse.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ error: "Error fetching questions: " + error.message }, { status: 500 });
  }
}
