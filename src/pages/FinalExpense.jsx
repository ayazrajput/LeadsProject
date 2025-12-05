import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Stack,
  MenuItem,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function FinalExpense() {
  return (
    <Box sx={{ backgroundColor: "#020617", color: "#e5e7eb", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at top, #1d4ed8, #020617 60%)",
          textAlign: "center",
          py: 10,
          mb: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Final Expense Leads
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.85, maxWidth: 700, mx: "auto" }}>
          High-quality senior prospects looking for affordable life & burial
          coverage — exclusive, compliant, and delivered in real time.
        </Typography>
      </Box>

      {/* WHY FINAL EXPENSE – INFO CARDS */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why agents choose our Final Expense leads
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <CheckCircleOutlineIcon sx={{ color: "#facc15", fontSize: 35 }} />,
              title: "100% Exclusive Leads",
              desc: "We never recycle or resell leads — once it's yours, it's yours only.",
            },
            {
              icon: <VerifiedUserIcon sx={{ color: "#38bdf8", fontSize: 35 }} />,
              title: "TCPA Compliant & Verified",
              desc: "Every prospect gives clear consent to be contacted by an insurance agent.",
            },
            {
              icon: <TimerIcon sx={{ color: "#22c55e", fontSize: 35 }} />,
              title: "Real-Time Delivery",
              desc: "Leads are delivered instantly to your email, CRM, or dialer.",
            },
            {
              icon: <TrendingUpIcon sx={{ color: "#f97316", fontSize: 35 }} />,
              title: "High Intent Seniors",
              desc: "We target 50+ seniors actively seeking burial and final expense plans.",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.97), rgba(15,23,42,0.99))",
                  border: "1px solid rgba(30,64,175,0.6)",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#f9fafb" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.85 }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* LEAD TYPE DETAILS */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(15,23,42,0.95)",
            border: "1px solid rgba(55,65,81,0.7)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: "#f9fafb" }}>
            What you get with our Final Expense leads
          </Typography>

          {[
            "Seniors aged 50–85 actively searching for coverage",
            "Fixed-income prospects needing low monthly premiums",
            "Lead replacement on invalid numbers",
            "Real-time delivery through email or CRM",
            "High answer rates + high appointment rates",
          ].map((text, i) => (
            <Typography key={i} sx={{ opacity: 0.8, mb: 1 }}>
              • {text}
            </Typography>
          ))}
        </Paper>
      </Container>

      {/* HOW IT WORKS */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4, color: "#f9fafb" }}
          >
            How it works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Tell us your states",
                desc: "We match your licensing areas to our highest-performing senior funnels.",
              },
              {
                step: "02",
                title: "We send leads in real time",
                desc: "Every lead is delivered instantly so you can contact them while intent is high.",
              },
              {
                step: "03",
                title: "You close more FE policies",
                desc: "Better prospects = more appointments = more closes.",
              },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(51,65,85,0.9)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#facc15",
                    }}
                  >
                    {item.step}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 1, color: "#f9fafb" }}
                  >
                    {item.title}
                  </Typography>

                  <Typography sx={{ mt: 1, opacity: 0.85 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FINAL EXPENSE FORM */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(15,23,42,0.96)",
            border: "1px solid rgba(51,65,85,0.8)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#f9fafb" }}>
            Request Final Expense Leads
          </Typography>

          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Full Name"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            />

            <TextField
              select
              fullWidth
              label="Lead Quantity"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            >
              <MenuItem value="25">25 Leads</MenuItem>
              <MenuItem value="50">50 Leads</MenuItem>
              <MenuItem value="100">100 Leads</MenuItem>
              <MenuItem value="200">200 Leads</MenuItem>
              <MenuItem value="Custom">Custom Amount</MenuItem>
            </TextField>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #facc15, #eab308)",
                color: "#0f172a",
                fontWeight: "700",
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(135deg, #eab308, #ca8a04)",
                },
              }}
            >
              Request Leads
            </Button>
          </Stack>
        </Paper>
      </Container>

      {/* FINAL CTA */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at top, #1d4ed8, #020617 55%)",
          textAlign: "center",
          py: 10,
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Ready to scale your Final Expense production?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Start receiving exclusive FE leads today — real people, real intent.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            background: "linear-gradient(135deg, #facc15, #eab308)",
            color: "#0f172a",
            fontWeight: "700",
            px: 4,
            "&:hover": {
              background: "linear-gradient(135deg, #eab308, #ca8a04)",
            },
          }}
        >
          Get Started Now
        </Button>
      </Box>

    </Box>
  );
}
