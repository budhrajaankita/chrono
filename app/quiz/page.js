"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import Link from "next/link";
import '../globals.css'; // Import global styles


export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function loadQuestions() {
        const response = await fetch("/api/quiz", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(response)
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
        const fetchedQuestions = await response.json();

        if (fetchedQuestions) {
          setQuestions(fetchedQuestions);
        } else {
          // Fallback to default questions if fetching fails
          setQuestions([
            {
              question: "Which ancient civilization built the pyramids of Giza?",
              options: ["Mayans", "Egyptians", "Greeks", "Romans"],
              correctAnswer: "Egyptians"
            },
            // ... add more default questions here
          ]);
        }
        setLoading(false);
      }
      loadQuestions();
    }, []);
  
    const handleAnswerClick = (selectedAnswer) => {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    if (loading) {
      return (
    //     <Box
    //   sx={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     background: "linear-gradient(17deg, #3e2723 0%, #394e38 50%, #3e2723 100%)",

    //     // background: "linear-gradient(135deg, #103b33 0%, #485563 50%, #5b4863 100%)",
    //     // background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",29323c 2c3e50
    //     backgroundAttachment: "fixed",
    //     backgroundSize: "cover",
    //     // py: { xs: 4, md: 8 },
    //   }}
    // >
    // <ThemeProvider theme={theme}>

    <Box>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
        <Card sx={{
            // width: '100%',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            p: 4,
            textAlign: 'center',
          }}>
            <CircularProgress style={{'color': '#ffd700'}}/>

        <Typography
        variant="h5"
        color="text.secondary"
        sx={{ m: 4, fontFamily:"'Cinzel', serif", color: '#ffd700' }}
      >
        
        Hey there, curious mind! Please wait while we prepare your quiz questions.

        </Typography>
        </Card>
        </Container>
    </Box>
    
      );
    }
  
    return (
        // <ThemeProvider theme={theme}>

        <Box>
      <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{
            width: { xs: '90vw', sm: '80vw', md: '60vw', lg: '50vw' }, // Responsive width
            height: { xs: '60vh', sm: '50vh', md: '40vh' },
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            p: 4,
          }}>
            <CardContent>
              {showScore ? (
                <Box textAlign="center">
                  <Typography variant="h4" color="#ffd700" fontFamily="'Cinzel', serif" gutterBottom>
                    Your Score: {score} out of {questions.length}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => window.location.reload()}
                    sx={{
                      mt: 2,
                      backgroundColor: '#ffd700',
                      color: '#000',
                    //   '&:hover': { backgroundColor: '#e6c300' },
                      '&:hover': {
          backgroundColor: 'rgba(255, 215, 0, 0.1)', // Background color on hover
          borderColor: '#ffd700', // Border color on hover
        },
                    }}
                  >
                    Retry Quiz
                  </Button>
                  <Link href="/">
                  <Button
                    variant="contained"
                    // onClick={() => window.location.reload()}
                    sx={{
                      mt: 2,
                      ml: 2,
                      backgroundColor: '#ffd700',
                      color: '#000',
                    //   '&:hover': { backgroundColor: '#e6c300' },
                      '&:hover': {
          backgroundColor: 'rgba(255, 215, 0, 0.1)', // Background color on hover
          borderColor: '#ffd700', // Border color on hover
        },
                    }}
                  >
                    Back to Home
                  </Button>
                  </Link>
                </Box>
              ) : (
                <>
                  <Typography variant="h5" color="#ffd700" fontFamily="'Cinzel', serif" gutterBottom>
                    Question {currentQuestion + 1}/{questions.length}
                  </Typography>
                  <Typography variant="h6" color="#e0e0e0" fontFamily="'Philosopher', sans-serif" gutterBottom>
                    {questions[currentQuestion].question}
                  </Typography>
                  <Box mt={3}>
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => handleAnswerClick(option)}
                        fullWidth
                        sx={{
                          mt: 2,
                          color: '#ffd700',
                          borderColor: '#ffd700',
                          borderRadius: "20px",
                          '&:hover': {
          backgroundColor: 'rgba(255, 215, 0, 0.1)', // Background color on hover
          borderColor: '#ffd700', // Border color on hover
        },
                        }}
                      >
                        {option}
                      </Button>
                    ))}
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </Container>
      </Box>
    //   </ThemeProvider>
    );
  }