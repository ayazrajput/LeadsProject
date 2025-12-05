import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Contact() {
  return (
    <Box sx={{ backgroundColor: "#020617", color: "#e5e7eb", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at top, #1d4ed8, #020617 55%)",
          textAlign: "center",
          py: 10,
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Contact Our Team
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.85, maxWidth: 600, mx: "auto" }}>
          Have questions? Need a custom lead package?  
          Our team responds quickly — usually within minutes.
        </Typography>
      </Box>

      {/* CONTACT FORM + INFO */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          
          {/* LEFT SIDE — FORM */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(55,65,81,0.7)",
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#f9fafb" }}>
                Send us a message
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
                  label="Email Address"
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
                  label="Lead Type"
                  InputLabelProps={{ style: { color: "#cbd5e1" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                      "&:hover fieldset": { borderColor: "#facc15" },
                      color: "#f9fafb",
                    },
                  }}
                >
                  <MenuItem value="Final Expense">Final Expense</MenuItem>
                  <MenuItem value="Medicare">Medicare</MenuItem>
                  <MenuItem value="ACA">ACA / Marketplace</MenuItem>
                  <MenuItem value="Mortgage">Mortgage Protection</MenuItem>
                  <MenuItem value="Other">Other / Not Listed</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  InputLabelProps={{ style: { color: "#cbd5e1" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(148,163,184,0.4)" },
                      "&:hover fieldset": { borderColor: "#facc15" },
                      color: "#f9fafb",
                    },
                  }}
                />

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
                  Submit Message
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* RIGHT SIDE — CONTACT INFO */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(55,65,81,0.7)",
                height: "100%",
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#f9fafb" }}>
                Contact information
              </Typography>

              <Stack spacing={3}>
                {/* Phone */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneInTalkIcon sx={{ color: "#facc15", fontSize: 28 }} />
                  <Box>
                    <Typography fontWeight="bold" sx={{ color: "#f9fafb" }}>
                      +1 (555) 123-4567
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>
                      Call us anytime
                    </Typography>
                  </Box>
                </Stack>

                {/* Email */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: "#38bdf8", fontSize: 28 }} />
                  <Box>
                    <Typography fontWeight="bold" sx={{ color: "#f9fafb" }}>
                      support@leadsystem.com
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>
                      Expect quick responses
                    </Typography>
                  </Box>
                </Stack>

                {/* Hours */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <AccessTimeIcon sx={{ color: "#22c55e", fontSize: 28 }} />
                  <Box>
                    <Typography fontWeight="bold" sx={{ color: "#f9fafb" }}>
                      Support Hours
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>
                      Monday – Saturday  
                      <br />
                      9:00 AM – 10:00 PM (EST)
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

        </Grid>
      </Container>

    </Box>
  );
}
