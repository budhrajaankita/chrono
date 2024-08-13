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
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
// import theme from './theme/theme';
// import { ThemeProvider } from '@mui/material/styles';

function LandingPage() {
  const router = useRouter();

  const features = [
    // {
    //   icon: <AccessTime />,
    //   title: "Temporal Voyages",
    //   description: "Journey through the epochs of history and myth.",
    // },
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
      title: "Quiz Me",
      description: "Challenge yourself with a quiz",
      onClick: () => router.push('/quiz')
    },
  ];

  return (
    // <ThemeProvider theme={theme}>
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
      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 4 }}>
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
        </Box> */}
        <Grid container spacing={4} justifyContent="center" alignItems="center" mt={8}>
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
              Your Journey Through Time Begins Here
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
                        cursor: feature.onClick ? 'pointer' : 'default',
                      }}
                      onClick={feature.onClick}

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
      <Box component="footer" sx={{ py: 6, mt: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Chronos. All rights reserved.
            </Typography>
          </Container>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}

export default LandingPage;