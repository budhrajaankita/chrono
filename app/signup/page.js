'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    // You'll likely want to add validation (e.g., password match)
    console.log('Signup submitted', { email, password });
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
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: '#d4af37' } }}
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
              InputLabelProps={{ style: { color: '#d4af37' } }}
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
              InputLabelProps={{ style: { color: '#d4af37' } }}
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

// 'use client'
// // app/signup/page.js
// import { useState } from 'react';
// import { Box, TextField, Button, Typography, Container } from '@mui/material';
// import Link from 'next/link';
// import { styled } from '@mui/system';

// // Create styled components using your global CSS variables
// const StyledContainer = styled(Container)`
//   background: var(--primary-bg);
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const StyledTypography = styled(Typography)`
//   color: var(--primary-color);
//   font-family: 'Cinzel', serif;
// `;

// const StyledTextField = styled(TextField)`
//   & .MuiOutlinedInput-root {
//     & fieldset {
//       border-color: var(--primary-color);
//     }
//     &:hover fieldset {
//       border-color: var(--primary-color);
//     }
//     &.Mui-focused fieldset {
//       border-color: var(--primary-color);
//     }
//   }
//   & .MuiInputLabel-root {
//     color: var(--primary-color);
//   }
//   & .MuiInputBase-input {
//     color: var(--secondary-color);
//   }
// `;

// const StyledButton = styled(Button)`
//   background-color: var(--primary-color);
//   color: #000;
//   &:hover {
//     background-color: #c5a028;
//   }
// `;

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     console.log('Signing up with', email, password);
//   };

//   return (
//     <StyledContainer maxWidth="xs">
//       <StyledTypography variant="h4" textAlign="center" gutterBottom>
//         Sign Up
//       </StyledTypography>
//       <Box component="form" sx={{ mt: 1 }}>
//         <StyledTextField
//           margin="normal"
//           required
//           fullWidth
//           label="Email Address"
//           autoComplete="email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <StyledTextField
//           margin="normal"
//           required
//           fullWidth
//           label="Password"
//           type="password"
//           autoComplete="new-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <StyledButton
//           type="button"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           onClick={handleSignup}
//         >
//           Sign Up
//         </StyledButton>
//         <Link href="/login" passHref>
//           <Button fullWidth variant="text" sx={{ color: 'var(--primary-color)' }}>
//             Already have an account? Log In
//           </Button>
//         </Link>
//       </Box>
//     </StyledContainer>
//   );
// }
