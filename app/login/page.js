'use client'
import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #103b33 0%, #485563 50%, #5b4863 100%)",
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
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#d4af37' } }}
              sx={{ borderRadius: "15px",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#d4af37' },
                  '&:hover fieldset': { borderColor: '#d4af37' },
                  '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                },
                '& .MuiInputBase-input': { color: '#e0e0e0' },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#d4af37' } }}
              sx={{
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
// // app/login/page.js
// "use client";
// import { useState } from "react";
// import { Box, TextField, Typography, Container, Paper, Button } from "@mui/material";
// import Link from "next/link";
// // import StyledButton from "../../components/StyledButton";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     console.log("Logging in with", email, password);
//   };

//   return (
//     <Container maxWidth="xs" sx={{ mt: 8 }}>
//       <Paper className="paper" sx={{ p: 4 }}>
//         <Typography variant="h4" textAlign="center" sx={{ mb: 2 }}>
//           Login
//         </Typography>
//         <Box component="form" sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 "& fieldset": {
//                   borderColor: "rgba(255, 215, 0, 0.5)",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "rgba(255, 215, 0, 0.7)",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#ffd700",
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#e0e0e0",
//               },
//             }}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 color: "#e0e0e0",
//                 "& fieldset": {
//                   borderColor: "rgba(255, 215, 0, 0.5)",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "rgba(255, 215, 0, 0.7)",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#ffd700",
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#e0e0e0",
//               },
//             }}
//           />
//           <Button fullWidth onClick={handleLogin} variant="text" sx={{ color: "#ffd700" }}>
//             Sign In
//           </Button>
//           <Link href="/signup" passHref>
//             <Button fullWidth variant="text" sx={{ color: "#ffd700" }}>
//               Don't have an account? Sign Up
//             </Button>
//           </Link>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }
