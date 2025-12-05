import React from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShieldIcon from "@mui/icons-material/Shield";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ backgroundColor: "#020617", color: "#e5e7eb" }}>
      {/* HERO SECTION – royal blue + gold */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at top left, #1d4ed8, #020617 50%, #020617)",
          pt: 10,
          pb: 12,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left: Main content */}
            <Grid item xs={12} md={7}>
              <Chip
                label="Insurance Lead Engine for Serious Producers"
                sx={{
                  backgroundColor: "rgba(248, 250, 252, 0.08)",
                  color: "#e5e7eb",
                  mb: 2,
                  borderRadius: "999px",
                  fontSize: 12,
                  border: "1px solid rgba(248, 250, 252, 0.24)",
                }}
              />

              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ lineHeight: 1.1, mb: 2, color: "#f9fafb" }}
              >
                The lead engine trusted by{" "}
                <Box component="span" sx={{ color: "#facc15" }}>
                  top insurance producers.
                </Box>
              </Typography>

              <Typography sx={{ opacity: 0.85, mb: 3, maxWidth: 650 }}>
                We generate exclusive, high-intent leads for Final Expense,
                Medicare, ACA, and Mortgage Protection. Designed for agents,
                agencies, and call centers who are tired of recycled data and
                shared leads.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background:
                      "linear-gradient(135deg, #facc15, #eab308)",
                    color: "#0f172a",
                    fontWeight: 700,
                    px: 4,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #eab308, #ca8a04)",
                    },
                  }}
                >
                  Get Leads Now
                </Button>

                <Button
                  component={Link}
                  to="/medicare"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(148,163,184,0.6)",
                    color: "#e5e7eb",
                    px: 3,
                    "&:hover": {
                      borderColor: "#facc15",
                      color: "#facc15",
                    },
                  }}
                >
                  View Lead Types
                </Button>
              </Stack>

              <Typography sx={{ fontSize: 13, opacity: 0.7 }}>
                No long-term contracts · TCPA compliant · Built for remote agents and teams
              </Typography>
            </Grid>

            {/* Right: Glass stats card */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.96))",
                  border: "1px solid rgba(148,163,184,0.55)",
                  boxShadow: "0 24px 70px rgba(15,23,42,0.9)",
                }}
              >
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                  Live campaign snapshot
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#facc15", mt: 1 }}
                >
                  Weekly performance
                </Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(37,99,235,0.7)",
                      }}
                    >
                      <Typography variant="caption" sx={{ opacity: 0.7 }}>
                        Leads this week
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        182
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#22c55e", fontWeight: 500 }}
                      >
                        +21% vs last week
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(52,211,153,0.6)",
                      }}
                    >
                      <Typography variant="caption" sx={{ opacity: 0.7 }}>
                        Close rate
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        31%
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#38bdf8", fontWeight: 500 }}
                      >
                        Qualified calls
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(234,179,8,0.7)",
                      }}
                    >
                      <Typography variant="caption" sx={{ opacity: 0.7 }}>
                        Active campaigns
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        12
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#fbbf24", fontWeight: 500 }}
                      >
                        Multi-state
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>

                {/* Simple bar chart */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="caption"
                    sx={{ opacity: 0.7, mb: 1, display: "block" }}
                  >
                    Lead volume (last 7 days)
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
                    {[40, 62, 35, 90, 72, 60, 95].map((h, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          flex: 1,
                          height: h,
                          borderRadius: 999,
                          background:
                            "linear-gradient(to top, #1d4ed8, #facc15)",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TRUST STRIP */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            textTransform: "uppercase",
            letterSpacing: 2,
            opacity: 0.6,
            fontSize: 11,
          }}
        >
          Trusted by agents working with carriers like
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mt: 2, opacity: 0.7, fontSize: 14 }}
        >
          <span>Aetna</span>
          <span>Humana</span>
          <span>Cigna</span>
          <span>Mutual of Omaha</span>
          <span>UHC</span>
        </Stack>
      </Container>

      {/* WHY CHOOSE US – glass cards */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Why serious agents work with us
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              icon: <CheckCircleOutlineIcon sx={{ color: "#facc15", fontSize: 30 }} />,
              title: "Truly exclusive leads",
              desc: "We don't resell or recycle. Every lead is generated for you and delivered once.",
            },
            {
              icon: <ShieldIcon sx={{ color: "#38bdf8", fontSize: 30 }} />,
              title: "TCPA compliant from day one",
              desc: "Our funnels are built around compliance. Proper consent, clear disclosures, safe campaigns.",
            },
            {
              icon: <PhoneInTalkIcon sx={{ color: "#22c55e", fontSize: 30 }} />,
              title: "High contact & show rates",
              desc: "Prospects know an agent will contact them. That expectation boosts answer and appointment rates.",
            },
            {
              icon: <TrendingUpIcon sx={{ color: "#f97316", fontSize: 30 }} />,
              title: "Built to scale with you",
              desc: "Start with one state and one product; scale into multi-state, multi-product campaigns when you're ready.",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))",
                  border: "1px solid rgba(30,64,175,0.7)",
                }}
              >
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#f9fafb" }}
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

      {/* SERVICES SECTION – premium cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, color: "#f9fafb" }}
        >
          Lead types we specialize in
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: "Final Expense Leads",
              desc: "Seniors actively requesting quotes for burial and final expense coverage.",
              path: "/final-expense",
            },
            {
              title: "Medicare Leads",
              desc: "Turning-65 and switcher prospects comparing Medicare Advantage and Med-Sup plans.",
              path: "/medicare",
            },
            {
              title: "ACA / Marketplace Leads",
              desc: "Subsidy-qualified prospects looking for compliant ACA and marketplace health coverage.",
              path: "/aca",
            },
            {
              title: "Mortgage Protection Leads",
              desc: "New homeowners and refi clients interested in protecting their mortgage and income.",
              path: "/mortgage-protection",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={0}
                component={Link}
                to={item.path}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textDecoration: "none",
                  color: "#e5e7eb",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
                  border: "1px solid rgba(30,64,175,0.7)",
                  "&:hover": {
                    boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                    borderColor: "#facc15",
                    transform: "translateY(-3px)",
                  },
                  transition: "0.2s",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.85 }}>
                  {item.desc}
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: 13,
                    color: "#facc15",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  Learn more <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* HOW IT WORKS */}
      <Box sx={{ py: 8, backgroundColor: "#020617" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 5, color: "#f9fafb" }}
          >
            How it works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Define your product & states",
                desc: "Tell us what you sell (FE, Medicare, ACA, MP) and where you're licensed. We match your targeting to our funnels.",
              },
              {
                step: "02",
                title: "We launch compliant funnels",
                desc: "We run digital campaigns with clear consent language and expectations, so every prospect knows an agent will reach out.",
              },
              {
                step: "03",
                title: "You receive leads in real time",
                desc: "Leads are delivered instantly via email or CRM so you can call within minutes while interest is highest.",
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

      {/* TESTIMONIALS */}
      <Box sx={{ py: 8, backgroundColor: "#020617" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4, color: "#f9fafb" }}
          >
            What top producers are saying
          </Typography>

          <Slider {...testimonialSettings}>
            {[
              {
                text: "We had our strongest AEP ever. Contact rate was high, and the leads actually wanted to talk.",
                name: "James – Medicare Agency Owner, TX",
              },
              {
                text: "These Final Expense leads outperform every vendor we’ve used. Less chasing, more writing.",
                name: "Alicia – Independent Agent, FL",
              },
              {
                text: "Their ACA leads kept our dialer full of real people, not dead numbers or bad data.",
                name: "Robert – Call Center Manager, GA",
              },
            ].map((t, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "rgba(15,23,42,0.96)",
                  border: "1px solid rgba(55,65,81,0.9)",
                }}
              >
                <Typography sx={{ fontStyle: "italic", opacity: 0.9 }}>
                  “{t.text}”
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    color: "#facc15",
                  }}
                >
                  {t.name}
                </Typography>
              </Paper>
            ))}
          </Slider>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 8, backgroundColor: "#020617" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4, color: "#f9fafb" }}
          >
            Frequently asked questions
          </Typography>

          {[
            {
              q: "Are the leads exclusive?",
              a: "Yes. Every lead you receive is exclusive to you and is not shared with other agents or call centers.",
            },
            {
              q: "How will I receive my leads?",
              a: "Most agents start with email delivery. As you scale, we can integrate with your CRM or dialer via API or webhooks.",
            },
            {
              q: "Is there a long-term contract?",
              a: "No. You can start with a smaller test, then scale once you’re confident in the performance.",
            },
          ].map((item, idx) => (
            <Accordion
              key={idx}
              sx={{
                mb: 1.5,
                backgroundColor: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(55,65,81,0.9)",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#facc15" }} />}
              >
                <Typography fontWeight="bold" sx={{ color: "#f9fafb" }}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ opacity: 0.9 }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at top, #1d4ed8, #020617 55%)",
          textAlign: "center",
          py: 10,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#f9fafb" }}
        >
          Ready to plug into a better lead source?
        </Typography>
        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Tell us what you sell and where you’re licensed — we’ll handle the
          campaigns, you focus on closing.
        </Typography>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            background:
              "linear-gradient(135deg, #facc15, #eab308)",
            color: "#0f172a",
            fontWeight: 700,
            px: 4,
            "&:hover": {
              background:
                "linear-gradient(135deg, #eab308, #ca8a04)",
            },
          }}
        >
          Talk to our team
        </Button>
      </Box>
    </Box>
  );
}
