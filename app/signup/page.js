'use client';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { Box, Container, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { motion } from 'framer-motion';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log("sign up begins..")
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      console.log("error");
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed up:', userCredential.user);
        router.push('/main');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "linear-gradient(17deg, #3e2723 0%, #394e38 50%, #3e2723 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      py: { xs: 4, md: 8 },
    }}
  >
    
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            color="#d4af37"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
              fontFamily: "'Cinzel', serif",
              mb: 4,
            }}
          >
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              p: 4,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#3e2723' } }}
              sx={{
                borderRadius: "15px",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#d4af37' },
                  '&:hover fieldset': { borderColor: '#d4af37' },
                  '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                },
                '& .MuiInputBase-input': { color: '#e0e0e0' },
                '& .MuiInputLabel-root': { color:'#3e2723',
                '&.Mui-focused': { color:'#3e2723' },
                },
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px #415240 inset', // Set the background color for autofill
                  WebkitTextFillColor: '#e0e0e0', // Set the text color for autofill
                },

              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#3e2723' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#d4af37' },
                  '&:hover fieldset': { borderColor: '#d4af37' },
                  '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                },
                '& .MuiInputBase-input': { color: '#e0e0e0' },
              }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#3e2723' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#d4af37' },
                  '&:hover fieldset': { borderColor: '#d4af37' },
                  '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                },
                '& .MuiInputBase-input': { color: '#e0e0e0' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#d4af37',
                color: '#000',
                '&:hover': { backgroundColor: '#c5a028' },
                fontFamily: "'Cinzel', serif",
              }}
            >
              Sign Up
            </Button>
            <Typography textAlign="center" sx={{ color: '#e0e0e0', fontFamily: "'Philosopher', sans-serif" }}>
              Already have an account? <Link href="/login" sx={{ color: '#d4af37' }}>Login</Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SignupPage;