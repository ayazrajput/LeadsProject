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
  Chip,
} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function ACA() {
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
        <Chip
          label="ACA • Marketplace • Subsidy Qualified"
          sx={{
            backgroundColor: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            borderRadius: "999px",
            border: "1px solid rgba(148,163,184,0.6)",
            mb: 2,
          }}
        />

        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          High-Intent ACA & Marketplace Leads
        </Typography>

        <Typography sx={{ mt: 1.5, opacity: 0.85, maxWidth: 750, mx: "auto" }}>
          Real-time ACA leads from people actively searching for compliant Marketplace health coverage.  
          100% exclusive, subsidy-qualified, and delivered instantly to your CRM or email.
        </Typography>
      </Box>

      {/* WHY ACA LEADS – PREMIUM CARDS */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why agents choose our ACA lead program
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <VerifiedIcon sx={{ color: "#facc15", fontSize: 35 }} />,
              title: "Subsidy-Qualified Prospects",
              desc: "We filter for households with subsidy eligibility, improving conversion and retention.",
            },
            {
              icon: <HealthAndSafetyIcon sx={{ color: "#38bdf8", fontSize: 35 }} />,
              title: "100% Exclusive ACA Leads",
              desc: "Each lead is assigned once — no recycling and no shared data.",
            },
            {
              icon: <LocalPhoneIcon sx={{ color: "#22c55e", fontSize: 35 }} />,
              title: "High Answer & Contact Rate",
              desc: "Prospects know an agent will reach out — boosting live transfers and appointments.",
            },
            {
              icon: <TrendingUpIcon sx={{ color: "#f97316", fontSize: 35 }} />,
              title: "Built for AEP + OEP",
              desc: "Our ACA funnels stay active year-round, giving you consistent volume and predictable growth.",
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

      {/* ACA LEAD DETAILS SECTION */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="stretch">
          
          {/* LEFT SIDE DETAILS */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(55,65,81,0.8)",
                height: "100%",
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#f9fafb" }}>
                What you get with our ACA leads
              </Typography>

              {[
                "Prospects actively searching for ACA-compliant health coverage.",
                "Name, phone, email, household size, ZIP, and subsidy qualification details.",
                "100% exclusive and never shared with multiple agents.",
                "Lead replacement for invalid numbers or unreachable leads.",
                "Delivered instantly via email or CRM integrations.",
              ].map((text, i) => (
                <Typography key={i} sx={{ opacity: 0.85, mb: 1 }}>
                  • {text}
                </Typography>
              ))}
            </Paper>
          </Grid>

          {/* RIGHT SIDE — IDEAL FOR */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(15,23,42,0.96)",
                border: "1px solid rgba(55,65,81,0.8)",
                height: "100%",
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#f9fafb" }}>
                Ideal for:
              </Typography>

              {[
                "Agents specializing in ACA year-round enrollments.",
                "Agencies managing high-volume lead flows.",
                "Call centers booking live ACA enrollments.",
              ].map((text, i) => (
                <Typography key={i} sx={{ opacity: 0.85, mb: 1 }}>
                  • {text}
                </Typography>
              ))}

              <Typography
                sx={{
                  mt: 3,
                  fontSize: 13,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#facc15",
                }}
              >
                Built to fuel consistent enrollments year-round.
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* HOW IT WORKS SECTION */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 5, color: "#f9fafb" }}
          >
            How our ACA lead generation works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Choose your preferred states",
                desc: "Let us know where you’re licensed. We match your areas to the strongest ACA traffic sources.",
              },
              {
                step: "02",
                title: "We run compliant ACA funnels",
                desc: "Our digital funnels ask subsidy questions and set expectations for agent contact.",
              },
              {
                step: "03",
                title: "You receive leads in real time",
                desc: "Call within minutes and convert more ACA consumers into enrollments.",
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

      {/* ACA LEAD REQUEST FORM */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(15,23,42,0.97)",
            border: "1px solid rgba(51,65,85,0.9)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#f9fafb" }}>
            Request ACA / Marketplace Leads
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
              label="Lead Volume (Weekly)"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            >
              <MenuItem value="20">20 Leads / Week</MenuItem>
              <MenuItem value="50">50 Leads / Week</MenuItem>
              <MenuItem value="100">100 Leads / Week</MenuItem>
              <MenuItem value="200+">200+ Leads / Week</MenuItem>
            </TextField>

            <TextField
              select
              fullWidth
              label="Focus Type"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            >
              <MenuItem value="subsidy">Subsidy Qualified</MenuItem>
              <MenuItem value="zero-premium">Zero Premium Plans</MenuItem>
              <MenuItem value="family">Family Policies</MenuItem>
              <MenuItem value="mixed">Mixed / All Types</MenuItem>
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
              Request ACA Leads
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
          Ready to scale your ACA enrollments?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Start receiving real-time Marketplace leads today.
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
