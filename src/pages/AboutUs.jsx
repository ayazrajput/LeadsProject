import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#020617", color: "#e5e7eb", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <Box
        sx={{
          background: "radial-gradient(circle at top, #1d4ed8, #020617 60%)",
          py: 10,
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          About Our Company
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            mt: 2,
            opacity: 0.85,
          }}
        >
          We help insurance agents and agencies scale their Final Expense, Medicare,
          ACA, and Mortgage Protection production with high-converting, exclusive,
          real-time leads.
        </Typography>
      </Box>

      {/* OUR STORY */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#f9fafb", mb: 2 }}>
              Our Story
            </Typography>

            <Typography sx={{ opacity: 0.85, lineHeight: 1.7 }}>
              We started with a simple mission — to help insurance professionals
              connect with real consumers seeking real solutions. Over the years,
              we’ve built advanced marketing funnels and a premium-quality lead
              generation system trusted by agents across the United States.
              <br /><br />
              Our approach is built on transparency, performance, and unmatched
              customer support. We don’t sell data — we deliver opportunity.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde72?auto=format&fit=crop&w=850&q=80"
              alt="About us"
              style={{
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 0 25px rgba(30,58,138,0.4)",
              }}
            />
          </Grid>

        </Grid>
      </Container>

      {/* MISSION + VISION */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              title: "Our Mission",
              text: "To provide insurance professionals with the highest-quality lead generation solutions, enabling them to grow consistently and predictably.",
            },
            {
              title: "Our Vision",
              text: "To become the #1 trusted lead source across the U.S. for Final Expense, Medicare, ACA, and Mortgage Protection agents.",
            },
          ].map((card, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(55,65,81,0.8)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#f9fafb" }}
                >
                  {card.title}
                </Typography>

                <Typography sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                  {card.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why Agents Choose Us
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <StarIcon sx={{ fontSize: 35, color: "#facc15" }} />,
              title: "Exclusive Leads Only",
              desc: "No shared leads, no recycled data. You get 100% exclusive opportunities.",
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 35, color: "#38bdf8" }} />,
              title: "High Conversion Rates",
              desc: "Our funnels are optimized for intent — leading to more appointments & closes.",
            },
            {
              icon: <VerifiedIcon sx={{ fontSize: 35, color: "#22c55e" }} />,
              title: "TCPA Compliant",
              desc: "Every consumer provides express consent to be contacted by an agent.",
            },
            {
              icon: <GroupsIcon sx={{ fontSize: 35, color: "#f97316" }} />,
              title: "Trusted by Agents Nationwide",
              desc: "Our clients include independent agents, agencies, and call centers across the U.S.",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(15,23,42,0.97)",
                  border: "1px solid rgba(51,65,85,0.9)",
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

      {/* TEAM / FOUNDER SECTION */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 6, color: "#f9fafb" }}
        >
          Meet the Founder
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                background: "rgba(15,23,42,0.96)",
                border: "1px solid rgba(55,65,81,0.8)",
              }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1603415526960-f8f0a9f4a6d1?auto=format&fit=crop&w=400&q=80"
                sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
              />

              <Typography variant="h6" fontWeight="bold" sx={{ color: "#f9fafb" }}>
                Founder Name Here
              </Typography>

              <Typography sx={{ opacity: 0.8, mt: 1, mb: 2 }}>
                CEO & Lead Generation Strategist
              </Typography>

              <Typography sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                With years of experience in digital insurance marketing and
                high-volume lead generation, our founder built a system that
                consistently delivers real buyer intent — not just data lists.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* FINAL CTA */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: "radial-gradient(circle at top, #1d4ed8, #020617 55%)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Ready to Grow Your Insurance Business?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Join hundreds of agents generating more appointments and more sales.
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
          href="/contact"
        >
          Contact Us
        </Button>
      </Box>

    </Box>
  );
}
