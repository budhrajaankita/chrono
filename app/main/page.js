// app/main/ChatArea.js
"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Send as SendIcon, AccessTime, Public, AutoStories, Psychology } from "@mui/icons-material";
import QuizIcon from '@mui/icons-material/Quiz';
import { motion } from "framer-motion";
import Quiz from "../quiz/page";
// import { ThemeProvider } from '@mui/material/styles';


function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { role: "user", content: input }];
      setMessages(newMessages);
      setInput(""); // Clear the input field
  
      try {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
  
        // Initialize the assistant message
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "" },
        ]);
  
        // Process the streaming response
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
  
          const text = decoder.decode(value, { stream: true });
          const lines = text.split('\n');
          
          lines.forEach((line) => {
            if (line.startsWith('data: ')) {
              const jsonData = JSON.parse(line.substring(6).trim());
              if (jsonData.response) {
                setMessages((prevMessages) => {
                  const lastMessage = prevMessages[prevMessages.length - 1];
                  const otherMessages = prevMessages.slice(0, prevMessages.length - 1);
                  return [
                    ...otherMessages,
                    { ...lastMessage, content: lastMessage.content + jsonData.response },
                  ];
                });
              }
            }
          });
        }
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    }
  };

  return (
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     background: "linear-gradient(135deg, #103b33 0%, #485563 50%, #5b4863 100%)",
    //     backgroundAttachment: "fixed",
    //     backgroundSize: "cover",
    //     py: 4,
    //   }}
    // >

    <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(17deg, #3e2723 0%, #394e38 50%, #3e2723 100%)",
      // background: "linear-gradient(135deg, #3e2723 0%, #5d4037 50%, #795548 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      py: 4,
    }}
  >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          color="#ffcc00"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
            fontFamily: "'Cinzel', serif",
            mb: 4,
          }}
        >
          Ask away
        </Typography>

        <Paper
          elevation={3}
          sx={{
            height: "70vh",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <List
            sx={{
              flexGrow: 1,
              overflow: "auto",
              p: 2,
            }}
          >
            {messages.map((message, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent: message.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      backgroundColor:
                        message.role === "user"
                          ? "rgba(255, 215, 0, 0.1)"
                          : "rgba(255, 255, 255, 0.1)",
                      borderRadius: "15px",
                      maxWidth: "100%",
                    }}
                  >
                    <ListItemText
                      primary={message.content}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: "#e0e0e0",
                          fontFamily: '__Inter_36bd41'
                          // fontFamily: "'Philosopher', sans-serif",
                        },
                      }}
                    />
                  </Paper>
                </motion.div>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 2, backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Hello there!"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#e0e0e0",
                  "& fieldset": {
                    borderColor: "rgba(255, 215, 0, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 215, 0, 0.7)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffd700",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSend} sx={{ color: "#ffd700" }}>
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Paper>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
          {[
            { icon: <QuizIcon/>, label: "Quiz Me" },
            // { icon: <AccessTime />, label: "Time Travel" },
            // { icon: <Public />, label: "Mythical Realms" },
            // { icon: <AutoStories />, label: "Living Legends" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                sx={{
                  color: "#ffd700",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  p: 2,
                  flexDirection: "column",
                }}
              >
                {item.icon}
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    color: "#e0e0e0",
                    fontFamily: "'Philosopher', sans-serif",
                  }}
                >
                  {item.label}
                </Typography>
              </IconButton>
            </motion.div>
          ))}
           <Button variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid #ffd700",
                  borderRadius: "15px",
                  color:"#ffd700"}} onClick={handleClearChat}>
            Clear Chat
          </Button>

        </Box>
      </Container>
    </Box>
  );
}

export default App;