'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import { auth } from '../firebase'; // Import the auth object from your firebase.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Container, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { motion } from 'framer-motion';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
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
            Login
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
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px #415240 inset',
                  WebkitTextFillColor: '#e0e0e0',
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
                borderRadius: "15px",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#d4af37' },
                  '&:hover fieldset': { borderColor: '#d4af37' },
                  '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                },
                '& .MuiInputBase-input': { color: '#e0e0e0' },
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px #415240 inset',
                  WebkitTextFillColor: '#e0e0e0',
                },
                // '& .MuiOutlinedInput-root': {
                //   '& fieldset': { borderColor: '#d4af37' },
                //   '&:hover fieldset': { borderColor: '#d4af37' },
                //   '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                // },
                // '& .MuiInputBase-input': { color: '#e0e0e0' },
                // '& .MuiInputLabel-root': { color:'#3e2723',
                // '&.Mui-focused': { color:'#3e2723' },
                // },
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
              Login
            </Button>
            <Typography textAlign="center" sx={{ color: '#e0e0e0', fontFamily: "'Philosopher', sans-serif" }}>
              Don&apos;t have an account? <Link href="/signup" sx={{ color: '#d4af37' }}>Sign up</Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default LoginPage;