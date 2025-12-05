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

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function MortgageProtection() {
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
          label="Mortgage Protection • Refinance • Homeowners"
          sx={{
            backgroundColor: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            borderRadius: "999px",
            border: "1px solid rgba(148,163,184,0.6)",
            mb: 2,
          }}
        />

        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Exclusive Mortgage Protection Leads
        </Typography>

        <Typography sx={{ mt: 1.5, opacity: 0.85, maxWidth: 750, mx: "auto" }}>
          Qualified homeowners interested in protecting their mortgage with life insurance.  
          Real-time, exclusive MP leads designed to increase your appointments & closes.
        </Typography>
      </Box>

      {/* WHY MP LEADS – CARDS */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why agents love our Mortgage Protection leads
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <HomeWorkIcon sx={{ color: "#facc15", fontSize: 35 }} />,
              title: "Verified Homeowners",
              desc: "We target homeowners who recently purchased or refinanced and are actively researching MP coverage.",
            },
            {
              icon: <SecurityIcon sx={{ color: "#38bdf8", fontSize: 35 }} />,
              title: "High Close Rates",
              desc: "MP prospects are among the highest-intent life insurance buyers, increasing your placement ratio.",
            },
            {
              icon: <TrendingUpIcon sx={{ color: "#22c55e", fontSize: 35 }} />,
              title: "High Ticket Cases",
              desc: "Mortgage Protection leads often result in higher premiums and policy values.",
            },
            {
              icon: <VerifiedIcon sx={{ color: "#f97316", fontSize: 35 }} />,
              title: "100% Exclusive & Compliant",
              desc: "Leads are never shared and include clear consent for agent outreach.",
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

      {/* DETAILS SECTION */}
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
                What’s included with MP leads
              </Typography>

              {[
                "Verified homeowners (purchase or refinance).",
                "Capture fields: name, phone, email, loan amount, property ZIP, time frame.",
                "100% exclusive — no shared or recycled MP leads.",
                "High-contact consumers open to insurance discussions.",
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
                "Life insurance agents focusing on higher-ticket policies.",
                "Mortgage Protection specialists and telesales teams.",
                "Agencies seeking scalable MP production.",
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
                MP leads = larger premiums & stronger commissions.
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* HOW IT WORKS */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 5, color: "#f9fafb" }}
          >
            How our MP lead flow works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Choose your states",
                desc: "Tell us where you’re licensed. We target homeowners within your approved service areas.",
              },
              {
                step: "02",
                title: "We run compliant homeowner funnels",
                desc: "We build your funnel around real homeowner interest — not aged data or cold lists.",
              },
              {
                step: "03",
                title: "You contact and close",
                desc: "Real-time leads give you the speed advantage to maximize your MP placement ratio.",
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

      {/* MP LEAD REQUEST FORM */}
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
            Request Mortgage Protection Leads
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
              label="Lead Volume Per Week"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            >
              <MenuItem value="10-25">10–25 leads / week</MenuItem>
              <MenuItem value="25-50">25–50 leads / week</MenuItem>
              <MenuItem value="50-100">50–100 leads / week</MenuItem>
              <MenuItem value="100+">100+ leads / week</MenuItem>
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
              Request Mortgage Protection Leads
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
          Ready to grow your Mortgage Protection business?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Get exclusive MP leads that turn into high-value life policies.
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
