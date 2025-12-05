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
import GroupsIcon from "@mui/icons-material/Groups";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Medicare() {
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
          label="Medicare Advantage • Med-Sup • Part D"
          sx={{
            backgroundColor: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            borderRadius: "999px",
            border: "1px solid rgba(148,163,184,0.6)",
            mb: 2,
          }}
        />

        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Medicare Leads for Serious Producers
        </Typography>

        <Typography sx={{ mt: 1.5, opacity: 0.85, maxWidth: 750, mx: "auto" }}>
          Turning-65 and switcher prospects actively comparing Medicare Advantage, Supplement and Part D plans.  
          Delivered in real time, exclusive to you, and built around compliance.
        </Typography>
      </Box>

      {/* WHY MEDICARE LEADS – CARDS */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why agents use our Medicare lead program
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <GroupsIcon sx={{ color: "#facc15", fontSize: 35 }} />,
              title: "Turning-65 & active switchers",
              desc: "We focus on T65 and existing Medicare beneficiaries actively shopping for better coverage or benefits.",
            },
            {
              icon: <CheckCircleOutlineIcon sx={{ color: "#38bdf8", fontSize: 35 }} />,
              title: "100% exclusive opportunities",
              desc: "You’re not competing with 5–10 other agents on the same lead. Each prospect is assigned once.",
            },
            {
              icon: <LocalHospitalIcon sx={{ color: "#22c55e", fontSize: 35 }} />,
              title: "Built for MA, MS & PDP",
              desc: "Our funnels are structured for Advantage, Med-Sup and Prescription Drug plans — you choose the focus.",
            },
            {
              icon: <AccessTimeIcon sx={{ color: "#f97316", fontSize: 35 }} />,
              title: "Real-time delivery",
              desc: "You receive leads within seconds so you can call or text while they’re still in research mode.",
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

      {/* LEAD DETAILS SECTION */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="stretch">
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
                What’s included with our Medicare leads
              </Typography>

              {[
                "Beneficiaries aged 64½+ (T65 pipeline) and 65+ (switchers).",
                "Prospects indicate interest in Medicare Advantage, Med-Sup, or Part D options.",
                "Capture fields: name, phone, email, ZIP, current coverage, time frame.",
                "Lead replacement on bad/invalid contact details.",
                "Leads delivered instantly via email or CRM/webhook.",
              ].map((text, i) => (
                <Typography key={i} sx={{ opacity: 0.85, mb: 1 }}>
                  • {text}
                </Typography>
              ))}
            </Paper>
          </Grid>

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
                "Independent Medicare agents building a book of renewals.",
                "Agencies managing multiple downline producers.",
                "Call centers booking Medicare appointments.",
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
                Designed to support long-term renewal growth.
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
            sx={{ mb: 4, color: "#f9fafb" }}
          >
            How our Medicare lead flow works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Choose product & geography",
                desc: "Pick whether you want MA, Med-Sup, PDP or blended, and tell us your states & service areas.",
              },
              {
                step: "02",
                title: "We run compliant funnels",
                desc: "We use clear consent language and disclosures so every lead knows an agent will reach out.",
              },
              {
                step: "03",
                title: "You follow up & enroll",
                desc: "We handle the marketing; you focus on booking appointments and writing policies.",
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

      {/* MEDICARE LEAD REQUEST FORM */}
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
            Request Medicare Leads
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

            <TextField
              select
              fullWidth
              label="Medicare Product Focus"
              InputLabelProps={{ style: { color: "#cbd5e1" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                  "&:hover fieldset": { borderColor: "#facc15" },
                  color: "#f9fafb",
                },
              }}
            >
              <MenuItem value="MA">Medicare Advantage</MenuItem>
              <MenuItem value="MS">Medicare Supplement</MenuItem>
              <MenuItem value="PDP">PDP / Stand-alone Part D</MenuItem>
              <MenuItem value="Mixed">Mixed / All of the above</MenuItem>
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
              Request Medicare Leads
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
          Want a stronger AEP and OEP?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Plug into a Medicare lead source built for real producers — not list buyers.
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
          Talk to our team
        </Button>
      </Box>

    </Box>
  );
}
