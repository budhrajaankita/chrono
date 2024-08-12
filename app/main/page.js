// app/main/ChatArea.js
"use client";
import React, { useState } from "react";
import {
  Box,
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
import { motion } from "framer-motion";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput(""); // Clear the input field

      try {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
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
        reader.read().then(function processText({ done, value }) {
          if (done) {
            return; // Streaming is complete
          }

          const text = decoder.decode(value || new Int8Array(), { stream: true });

          // Extract the AI response part and update the message
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

          // Continue reading the stream
          return reader.read().then(processText);
        });
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
            { icon: <AccessTime />, label: "Time Travel" },
            { icon: <Public />, label: "Mythical Realms" },
            { icon: <AutoStories />, label: "Living Legends" },
            { icon: <Psychology />, label: "Cosmic Wisdom" },
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
        </Box>
      </Container>
    </Box>
  );
}

export default App;
// // app/main/ChatArea.js
//  "use client"
//  import React, { useState } from 'react';
//  import { Box, Container, Typography, TextField, Button, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
//  import { Send as SendIcon, AccessTime, Public, AutoStories, Psychology } from '@mui/icons-material';
//  import { motion } from 'framer-motion';
 
//  function App() {
//    const [messages, setMessages] = useState([]);
//    const [input, setInput] = useState('');
 
//    const handleSend = async () => {
//     if (input.trim()) {
//       setMessages([...messages, { role: "user", content: input }]);
//       setInput(''); // Clear the input field
  
//       try {
//         const response = await fetch("/api/chatbot", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify([...messages, { role: "user", content: input }]),
//         });
  
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
  
//         const reader = response.body.getReader();
//         const decoder = new TextDecoder();
  
//         // Update the last message in the state to indicate it's from the assistant
//         setMessages(prevMessages => {
//           const lastMessage = prevMessages[prevMessages.length - 1];
//           const otherMessages = prevMessages.slice(0, prevMessages.length - 1);
//           return [
//             ...otherMessages,
//             { ...lastMessage, role: "assistant", content: "" }, // Start with empty content
//           ];
//         });
  
//         // Process the streaming response
//         await reader.read().then(function processText({ done, value }) {
//           if (done) {
//             return; // Streaming is complete
//           }
  
//           const text = decoder.decode(value || new Int8Array(), { stream: true });
  
//           // Update the last message's content with the streamed text
//           setMessages(prevMessages => {
//             let lastMessage = prevMessages[prevMessages.length - 1];
//             let otherMessages = prevMessages.slice(0, prevMessages.length - 1);
//             return [
//               ...otherMessages,
//               { ...lastMessage, content: lastMessage.content + text },
//             ];
//           });
  
//           // Continue reading the stream
//           return reader.read().then(processText);
//         });
  
//       } catch (error) {
//         console.error("Error fetching response:", error);
//       }
//     }
//   };
  
//    return (
//      <Box
//        sx={{
//          minHeight: '100vh',
//          display: 'flex',
//          flexDirection: 'column',
//          background: 'linear-gradient(135deg, #103b33 0%, #485563 50%, #5b4863 100%)',
//          backgroundAttachment: 'fixed',
//          backgroundSize: 'cover',
//          py: 4,
//        }}
//      >
//        <Container maxWidth="lg">
//          <Typography
//            variant="h2"
//            textAlign="center"
//            color="#ffcc00"
//            fontWeight="bold"
//            sx={{ 
//              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
//              fontFamily: "'Cinzel', serif",
//              mb: 4,
//            }}
//          >
//            Ask away
//          </Typography>
         
//          <Paper
//            elevation={3}
//            sx={{
//              height: '70vh',
//              backgroundColor: 'rgba(255, 255, 255, 0.05)',
//              backdropFilter: 'blur(10px)',
//              border: '1px solid rgba(255, 255, 255, 0.1)',
//              borderRadius: '20px',
//              display: 'flex',
//              flexDirection: 'column',
//              overflow: 'hidden',
//            }}
//          >
//            <List
//              sx={{
//                flexGrow: 1,
//                overflow: 'auto',
//                p: 2,
//              }}
//            >
//              {messages.map((message, index) => (
//                <ListItem key={index} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
//                  <motion.div
//                    initial={{ opacity: 0, y: 20 }}
//                    animate={{ opacity: 1, y: 0 }}
//                    transition={{ duration: 0.5 }}
//                  >
//                    <Paper
//                      elevation={1}
//                      sx={{
//                        p: 2,
//                        backgroundColor: message.sender === 'user' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
//                        borderRadius: '15px',
//                        maxWidth: '100%',
//                      }}
//                    >
//                      <ListItemText
//                        primary={message.text}
//                        sx={{
//                          '& .MuiListItemText-primary': {
//                            color: '#e0e0e0',
//                            fontFamily: "'Philosopher', sans-serif",
//                          }
//                        }}
//                      />
//                    </Paper>
//                  </motion.div>
//                </ListItem>
//              ))}
//            </List>
           
//            <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//              <TextField
//                fullWidth
//                variant="outlined"
//                placeholder="Ask about any time or myth..."
//                value={input}
//                onChange={(e) => setInput(e.target.value)}
//                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                sx={{
//                  '& .MuiOutlinedInput-root': {
//                    color: '#e0e0e0',
//                    '& fieldset': {
//                      borderColor: 'rgba(255, 215, 0, 0.5)',
//                    },
//                    '&:hover fieldset': {
//                      borderColor: 'rgba(255, 215, 0, 0.7)',
//                    },
//                    '&.Mui-focused fieldset': {
//                      borderColor: '#ffd700',
//                    },
//                  },
//                }}
//                InputProps={{
//                  endAdornment: (
//                    <IconButton onClick={handleSend} sx={{ color: '#ffd700' }}>
//                      <SendIcon />
//                    </IconButton>
//                  ),
//                }}
//              />
//            </Box>
//          </Paper>
 
//          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
//            {[
//              { icon: <AccessTime />, label: 'Time Travel' },
//              { icon: <Public />, label: 'Mythical Realms' },
//              { icon: <AutoStories />, label: 'Living Legends' },
//              { icon: <Psychology />, label: 'Cosmic Wisdom' },
//            ].map((item, index) => (
//              <motion.div
//                key={index}
//                whileHover={{ scale: 1.1 }}
//                whileTap={{ scale: 0.9 }}
//              >
//                <IconButton
//                  sx={{
//                    color: '#ffd700',
//                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                    backdropFilter: 'blur(5px)',
//                    border: '1px solid rgba(255, 255, 255, 0.1)',
//                    borderRadius: '15px',
//                    p: 2,
//                    flexDirection: 'column',
//                  }}
//                >
//                  {item.icon}
//                  <Typography variant="caption" sx={{ mt: 1, color: '#e0e0e0', fontFamily: "'Philosopher', sans-serif" }}>
//                    {item.label}
//                  </Typography>
//                </IconButton>
//              </motion.div>
//            ))}
//          </Box>
//        </Container>
//      </Box>
//    );
//  }
 
//  export default App;