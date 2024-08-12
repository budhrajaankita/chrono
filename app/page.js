"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
import { AccessTime, Public, AutoStories, Psychology } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

function LandingPage() {
  const features = [
    {
      icon: <AccessTime />,
      title: "Temporal Voyages",
      description: "Journey through the epochs of history and myth.",
    },
    {
      icon: <Public />,
      title: "Mythical Realms",
      description: "Explore legendary worlds and ancient civilizations.",
    },
    {
      icon: <AutoStories />,
      title: "Living Legends",
      description: "Interact with heroes, gods, and figures of lore.",
    },
    {
      icon: <Psychology />,
      title: "Cosmic Wisdom",
      description: "Uncover the secrets of time and space.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(17deg, #3e2723 0%, #394e38 50%, #3e2723 100%)",

        // background: "linear-gradient(135deg, #103b33 0%, #485563 50%, #5b4863 100%)",
        // background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",29323c 2c3e50
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        // py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
      <Link href="/login">
      <Button
                variant="outlined"
                size="medium"
                sx={{
                  borderRadius: "30px",
                  border: "2px solid #ffd700",
                  color: "#ffd700",
                  padding: { xs: "10px 20px", md: "12px 25px" },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: "bold",
                  // textTransform: "uppercase",
                  // letterSpacing: "2px",
                  fontFamily: "'Cinzel', serif",
                  mr: 2,
                }}
              >
                Login
              </Button>
            </Link>

            <Link href="/signup" passHref>
            <Button
                variant="outlined"
                size="medium"
                sx={{
                  borderRadius: "30px",
                  border: "2px solid #ffd700",
                  color: "#ffd700",
                  padding: { xs: "10px 20px", md: "12px 25px" },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: "bold",
                  // textTransform: "uppercase",
                  // letterSpacing: "2px",
                  fontFamily: "'Cinzel', serif",
                }}
              >
                Sign Up
              </Button>
            </Link>
          {/* <Link href="/signup" sx={{ color: '#d4af37', textDecoration: 'none' }}>Sign Up</Link> */}
        </Box>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              textAlign="center"
              color="#ffcc00"
              // "#ffd700"
              fontWeight="bold"
              sx={{ 
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                fontFamily: '__Inter_36bd41'
                // "'Cinzel', serif",
              }}
            >
              CHRONOS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              textAlign="center"
              color="#e0e0e0"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                maxWidth: "800px",
                margin: "0 auto",
                fontFamily: "'Philosopher', sans-serif",
              }}
            >
              Transcend the boundaries of time and myth with our celestial odyssey machine.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Link href="/main">
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "30px",
                  background: "linear-gradient(45deg, #ffd700 30%, #ff8c00 90%)",
                  color: "#000",
                  padding: { xs: "12px 24px", md: "15px 30px" },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontFamily: "'Cinzel', serif",
                  border: "2px solid #ffd700",
                }}
              >
                Embark on Your Odyssey
              </Button>
            </Link>

          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: { xs: 160, sm: 200, md: 220 },
                        width: "100%",
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-10px)",
                          boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: { s: 1, sm: 2 } }}>
                        <Icon
                          sx={{
                            fontSize: { xs: 36, sm: 42, md: 48 },
                            color: "#ffd700",
                            mb: 1,
                          }}
                        >
                          {feature.icon}
                        </Icon>
                        <Typography
                          variant="h6"
                          color="#ffd700"
                          sx={{
                            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
                            mb: 1,
                            fontWeight: "bold",
                            fontFamily: "'Cinzel', serif",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#e0e0e0"
                          sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                            lineHeight: 1.3,
                            fontFamily: "'Philosopher', sans-serif",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;
// "use client";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Icon,
// } from "@mui/material";
// import { AccessTime, History, EmojiEvents, Explore } from "@mui/icons-material";
// import Link from "next/link";
// import { motion } from "framer-motion";

// function LandingPage() {
//   const features = [
//     {
//       icon: <AccessTime />,
//       title: "Time Travel",
//       description: "Visit any era in history with our AI simulation.",
//     },
//     {
//       icon: <History />,
//       title: "Historical Accuracy",
//       description: "Experience historically accurate environments.",
//     },
//     {
//       icon: <EmojiEvents />,
//       title: "Interactive Learning",
//       description: "Learn through immersive historical scenarios.",
//     },
//     {
//       icon: <Explore />,
//       title: "Cultural Exploration",
//       description: "Discover the customs and traditions of the past.",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         background: "linear-gradient(180deg, #1a237e 0%, #3949ab 100%)",
//         py: { xs: 4, md: 8 },
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           <Grid item xs={12}>
//             <Typography
//               variant="h2"
//               textAlign="center"
//               color="#ffd54f"
//               fontWeight="bold"
//               sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
//             >
//               Welcome to Chronos
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography
//               variant="h5"
//               textAlign="center"
//               color="#ffffff"
//               sx={{
//                 fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
//                 maxWidth: "800px",
//                 margin: "0 auto",
//               }}
//             >
//               Your AI-powered time machine for exploring history and experiencing the past.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} textAlign="center">
//             <Link href="/login" passHref>
//               <Button
//                 component={motion.button}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   borderRadius: "20px",
//                   backgroundColor: "#ffd54f",
//                   color: "#1a237e",
//                   "&:hover": {
//                     backgroundColor: "#ffecb3",
//                   },
//                   padding: { xs: "10px 20px", md: "12px 24px" },
//                   fontSize: { xs: "0.9rem", md: "1.1rem" },
//                 }}
//               >
//                 Start Your Journey Through Time
//               </Button>
//             </Link>
//           </Grid>
//           <Grid item xs={12}>
//             <Grid container spacing={2} justifyContent="center">
//               {features.map((feature, index) => (
//                 <Grid item xs={6} sm={6} md={3} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         height: { xs: 140, sm: 180, md: 200 },
//                         width: "100%",
//                         borderRadius: "16px",
//                         boxShadow: "0px 8px 30px rgba(255, 213, 79, 0.2)",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         backgroundColor: "rgba(255, 255, 255, 0.1)",
//                         backdropFilter: "blur(10px)",
//                       }}
//                     >
//                       <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
//                         <Icon
//                           sx={{
//                             fontSize: { xs: 30, sm: 36, md: 40 },
//                             color: "#ffd54f",
//                             mb: 1,
//                           }}
//                         >
//                           {feature.icon}
//                         </Icon>
//                         <Typography
//                           variant="h6"
//                           color="#ffffff"
//                           sx={{
//                             fontSize: {
//                               xs: "0.8rem",
//                               sm: "0.9rem",
//                               md: "1rem",
//                             },
//                             mb: 1,
//                             fontWeight: "bold",
//                           }}
//                         >
//                           {feature.title}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="#e0e0e0"
//                           sx={{
//                             fontSize: {
//                               xs: "0.6rem",
//                               sm: "0.7rem",
//                               md: "0.8rem",
//                             },
//                             lineHeight: 1.2,
//                           }}
//                         >
//                           {feature.description}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default LandingPage;// import React from 'react';



// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
// import { AccessTime, History, EmojiEvents } from '@mui/icons-material';

// export const metadata = {
//   title: 'Chronos Landing Page',
//   description: 'Your AI time-traveling companion',
// };

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Chronos - Time Travel Experience</title>
//         <meta name="description" content="Explore history with Chronos AI-powered time travel simulator" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" color="transparent" elevation={0}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Chronos
//             </Typography>
//             <Button color="inherit">Login</Button>
//             <Button color="inherit">Sign Up</Button>
//           </Toolbar>
//         </AppBar>
        
//         <Container maxWidth="lg" sx={{ mt: 8 }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h2" component="h1" gutterBottom>
//                 Travel Through Time with Chronos
//               </Typography>
//               <Typography variant="h5" color="text.secondary" paragraph>
//                 Explore history like never before. Immerse yourself in different eras, meet historical figures, and experience the past with our AI-powered time travel simulator.
//               </Typography>
//               <Link href="/app">

//               <Button variant="contained" size="large" sx={{ mt: 2 }}>
//                 Start Your Journey
//               </Button>
//               </Link>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Image src="/images/chrono.jpeg" width={500} height={300}/>
//                {/* <CardMedia
//                 component="img"
//                 height="400"
//                 image="./chrono.jpeg"
//                 alt="Time travel concept"
//                 sx={{ borderRadius: 2 }}
//               /> */}
//             </Grid>
//           </Grid>
//         </Container>
        
//         <Container maxWidth="lg" sx={{ mt: 8 }}>
//           <Typography variant="h4" component="h2" gutterBottom align="center">
//             Features
//           </Typography>
//           <Grid container spacing={4} sx={{ mt: 2 }}>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ height: '100%' }}>
//                 <CardContent>
//                   <AccessTime sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
//                   <Typography variant="h5" component="div" gutterBottom>
//                     Time Travel
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Visit any era in history with our advanced AI simulation technology.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ height: '100%' }}>
//                 <CardContent>
//                   <History sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
//                   <Typography variant="h5" component="div" gutterBottom>
//                     Historical Accuracy
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Experience historically accurate environments and interactions.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ height: '100%' }}>
//                 <CardContent>
//                   <EmojiEvents sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
//                   <Typography variant="h5" component="div" gutterBottom>
//                     Interactive Learning
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Learn history through immersive experiences and interactive scenarios.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
        
//         <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 8 }}>
//           <Container maxWidth="lg">
//             <Typography variant="body2" color="text.secondary" align="center">
//               © {new Date().getFullYear()} Chronos. All rights reserved.
//             </Typography>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// }