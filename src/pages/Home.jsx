import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function Home() {
  // Simple hero slider (no external library)
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Exclusive Insurance Leads That Actually Convert",
      subtitle:
        "We help serious agents and agencies generate consistent, high-intent leads for Medicare, Final Expense, ACA, and Mortgage Protection.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stop Chasing Cold Lists. Start Talking to Real Prospects.",
      subtitle:
        "Every lead is generated through compliant funnels, real interest, and clear permission to be contacted.",
    },
    {
      image:
        "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Built for Agents Who Want Predictable Growth",
      subtitle:
        "If you’re tired of low-quality data and tire-kickers, our lead system is designed to support real production growth.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box sx={{ backgroundColor: "#ffffff", color: "#0A1A44" }}>
      {/* HERO SECTION */}
      <Box sx={{ position: "relative", height: { xs: 520, md: 550 } }}>
        {/* Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(40%)",
          }}
        />

        {/* Dark blue overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,26,68,0.9) 0%, rgba(10,26,68,0.5) 50%, rgba(10,26,68,0.2) 100%)",
          }}
        />

        {/* Hero content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label="Medicare • Final Expense • ACA • Mortgage Protection"
                sx={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#F5C518",
                  borderRadius: "999px",
                  mb: 2,
                  border: "1px solid rgba(245,197,24,0.6)",
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h3"
                fontWeight={900}
                sx={{ color: "white", lineHeight: 1.2 }}
              >
                {slides[currentSlide].title}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "18px",
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "15px",
                }}
              >
                We don’t sell recycled data. We generate live, compliant,
                high-intent leads so you can spend more time closing and less
                time chasing.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                <Button
                  component={Link}
                  to="/contact"
                  sx={{
                    backgroundColor: "#F5C518",
                    color: "#0A1A44",
                    px: 4,
                    py: 1.6,
                    fontWeight: 800,
                    fontSize: "16px",
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#d9aa16" },
                  }}
                >
                  Get Leads Now
                </Button>
                <Button
                  component={Link}
                  to="/aboutus"
                  sx={{
                    borderColor: "#F5C518",
                    borderWidth: 2,
                    borderStyle: "solid",
                    color: "#F5C518",
                    px: 3,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "rgba(245,197,24,0.08)",
                    },
                  }}
                >
                  Learn More About Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TRUST / BADGE STRIP */}
      <Box sx={{ backgroundColor: "#0A1A44", py: 3 }}>
        <Container>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              fontSize: 14,
              mb: 1,
            }}
          >
            Trusted by independent agents, teams & agencies across the U.S.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              flexWrap: "wrap",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span>✔ TCPA Compliant Funnels</span>
            <span>✔ Real-Time Delivery</span>
            <span>✔ 100% Exclusive Leads</span>
            <span>✔ Nationwide Coverage</span>
          </Box>
        </Container>
      </Box>

      {/* ABOUT / VALUE PROP SECTION */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={900} sx={{ mb: 2 }}>
              A Lead Partner Built for Long-Term Production
            </Typography>
            <Typography sx={{ opacity: 0.8, mb: 2 }}>
              Most agents aren’t failing because they can’t sell. They’re failing
              because they’re talking to the wrong people. Our job is to fix that
              for you.
            </Typography>
            <Typography sx={{ opacity: 0.8, mb: 2 }}>
              We design and run insurance-specific funnels that pre-educate the
              consumer, confirm interest, collect contact information, and capture
              intent—before you ever pick up the phone. You focus on presenting and
              closing, while we focus on generating people who actually want to talk.
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>
              Whether you’re a solo producer or running a growing team, we help you
              build a predictable flow of opportunities so you can plan your pipeline,
              your goals, and your income with more confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: "16px",
                border: "1px solid rgba(15,23,42,0.08)",
                background:
                  "linear-gradient(135deg, rgba(10,26,68,0.04), rgba(245,197,24,0.08))",
              }}
            >
              <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
                What You Can Expect From Our Leads:
              </Typography>
              <ul
                style={{
                  paddingLeft: "18px",
                  marginTop: 0,
                  marginBottom: "12px",
                  color: "#1f2933",
                  opacity: 0.85,
                  lineHeight: 1.6,
                }}
              >
                <li>Prospects who requested information – not cold lists.</li>
                <li>Clear permission to be contacted by a licensed agent.</li>
                <li>Targeting based on age, need, and product type.</li>
                <li>Real-time delivery directly to your email or CRM.</li>
                <li>Replacement policy for bad or fake data.</li>
              </ul>
              <Typography sx={{ fontSize: 14, opacity: 0.8 }}>
                If you’re tired of guessing where your next sale is coming from,
                we help you build a lead flow you can actually count on.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* SERVICES SECTION */}
      <Box sx={{ backgroundColor: "#F9FAFB", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={900}
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Lead Types We Specialize In
          </Typography>
          <Typography
            sx={{ textAlign: "center", opacity: 0.7, maxWidth: 700, mx: "auto", mb: 6 }}
          >
            Every product line has a different buyer mindset. We build campaigns
            tailored to each one so you’re always speaking the right language to the
            right prospect.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Medicare Leads",
                link: "/medicare",
                text: "Turning 65, MAPD switchers, Med-Sup shoppers, and people looking to compare their current coverage. Our Medicare leads come from funnels that ask eligibility and interest questions before you call, so you can have confident, focused conversations instead of basic discovery calls.",
              },
              {
                title: "Final Expense Leads",
                link: "/final-expense",
                text: "Seniors actively looking for affordable coverage to protect their families from final expenses. We position final expense as a simple, caring solution so the person who fills out the form is already thinking about protecting their loved ones—not just getting a quote.",
              },
              {
                title: "ACA / Health Leads",
                link: "/aca",
                text: "Consumers searching for ACA-compliant health plans and subsidy options. Our forms gather basic household information, income ranges, and interest level so you can guide them toward the best coverage options and make the most of enrollment windows.",
              },
              {
                title: "Mortgage Protection Leads",
                link: "/mortgage-protection",
                text: "New homeowners or recent refinancers looking to protect their mortgage with life insurance. These are some of the most motivated prospects, and we use messaging that connects their mortgage with protecting their family’s lifestyle—not just a policy number.",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: "14px",
                    borderTop: "4px solid #F5C518",
                    backgroundColor: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ opacity: 0.8, mb: 2 }}>{item.text}</Typography>
                  <Button
                    component={Link}
                    to={item.link}
                    sx={{
                      mt: "auto",
                      alignSelf: "flex-start",
                      color: "#0A1A44",
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Learn more →
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Box sx={{ backgroundColor: "#0A1A44", color: "white", py: 8 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            {[
              { value: "10,000+", label: "Leads Delivered" },
              { value: "98%", label: "Average Contact Rate" },
              { value: "500+", label: "Agents & Teams Served" },
              { value: "50", label: "States Covered" },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Typography
                  variant="h4"
                  fontWeight={900}
                  sx={{ color: "#F5C518" }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* HOW IT WORKS + LEAD QUALITY */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={900} sx={{ mb: 3 }}>
              How Our Lead Flow Works
            </Typography>
            <Typography sx={{ opacity: 0.8, mb: 2 }}>
              We keep the process simple and transparent so you always know what
              you’re getting and how it’s being generated.
            </Typography>
            <ol
              style={{
                paddingLeft: "18px",
                color: "#1f2933",
                opacity: 0.85,
                lineHeight: 1.7,
              }}
            >
              <li>
                <strong>You choose your product & areas.</strong> Tell us what you
                sell, where you’re licensed, and how many leads you can handle
                weekly.
              </li>
              <li>
                <strong>We launch or plug you into a funnel.</strong> Our campaigns
                are written and designed specifically for insurance buyers—not generic
                lead forms.
              </li>
              <li>
                <strong>Consumers request information.</strong> Once they complete the
                form, they know a licensed agent will contact them.
              </li>
              <li>
                <strong>We deliver leads in real time.</strong> You receive leads by
                email or CRM as soon as they’re generated, giving you the best chance
                to connect fast.
              </li>
              <li>
                <strong>We monitor quality.</strong> We constantly review results and
                improve targeting to protect your ad spend and your time.
              </li>
            </ol>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "14px",
                backgroundColor: "#0A1A44",
                color: "white",
              }}
            >
              <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
                Our Lead Quality Philosophy
              </Typography>
              <Typography sx={{ mb: 2, opacity: 0.9 }}>
                We treat every lead like it’s going to a real producer who makes a
                living from commission—not a call center that burns through names.
              </Typography>
              <Typography sx={{ mb: 2, opacity: 0.9 }}>
                That means we care about intent, honesty, and relevance. We focus on
                finding people who are actually thinking about coverage, not just
                chasing anyone who will click an ad.
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>
                When your leads are better, your attitude is better, your calls are
                better, and your results are better. That’s the standard we build
                around.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* TESTIMONIALS */}
      <Box sx={{ backgroundColor: "#F9FAFB", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={900}
            textAlign="center"
            sx={{ mb: 6 }}
          >
            What Other Agents Are Saying
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Michael J.",
                line: "Final Expense Producer – 7 Years",
                text: "“I’ve bought leads from almost every vendor out there. This is the first time I’ve felt like the leads were actually built for the way I sell. People know why I’m calling, they remember filling out the form, and the tone of the conversation is completely different.”",
              },
              {
                name: "Sarah W.",
                line: "Medicare Agent – 3 States",
                text: "“The Medicare leads I’ve received have had some of the highest contact and appointment set rates I’ve seen. I’m not wasting hours dialing people who never asked for help. It’s made my enrollment seasons much more predictable.”",
              },
              {
                name: "David R.",
                line: "Agency Owner – Health & ACA",
                text: "“For our team, consistency matters more than anything. These campaigns have allowed us to ramp up and slow down by demand without sacrificing quality. That’s something we just couldn’t get from random lead lists or cheap vendors.”",
              },
            ].map((t, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: "14px",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      transition: "0.25s ease",
                      boxShadow: "0 14px 30px rgba(15,23,42,0.18)",
                    },
                  }}
                >
                  <Typography sx={{ opacity: 0.85, mb: 2 }}>{t.text}</Typography>
                  <Typography variant="subtitle1" fontWeight={800}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ fontSize: 13, opacity: 0.7 }}>
                    {t.line}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ + ORDER FORM SECTION */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* FAQ */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={900} sx={{ mb: 3 }}>
              Frequently Asked Questions
            </Typography>

            {[
              {
                q: "Are your leads shared with other agents?",
                a: "No. Leads are 100% exclusive to you or your agency. We do not resell or recycle leads to multiple agents.",
              },
              {
                q: "How fast do I receive my leads?",
                a: "Leads are delivered in real time as soon as a consumer completes the form. You’ll receive them instantly via email or integrated CRM.",
              },
              {
                q: "Can I choose which states or areas I want?",
                a: "Yes. You select the states or regions based on where you are licensed or currently writing business.",
              },
              {
                q: "Do you replace bad or fake leads?",
                a: "We stand behind quality. Leads with clearly invalid contact information or fake data are eligible for replacement.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No. You can start small, test the results, and scale as you’re comfortable. No long-term commitments required.",
              },
            ].map((faq, i) => (
              <Accordion key={i} sx={{ mb: 1.5 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={700}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ opacity: 0.8 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* LEAD REQUEST FORM */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: "16px",
                border: "1px solid rgba(15,23,42,0.08)",
                backgroundColor: "#ffffff",
              }}
            >
              <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
                Request Leads Today
              </Typography>
              <Typography sx={{ opacity: 0.75, mb: 3, fontSize: 14 }}>
                Tell us what you’re looking for and we’ll follow up with a
                customized lead plan based on your goals, budget, and product mix.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Full Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email Address" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Phone Number" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="What type of leads are you interested in?"
                    placeholder="Medicare, Final Expense, ACA, Mortgage Protection..."
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="How many leads per week are you aiming for?"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Anything else we should know about your business?"
                    fullWidth
                    multiline
                    minRows={3}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    sx={{
                      backgroundColor: "#F5C518",
                      color: "#0A1A44",
                      fontWeight: 800,
                      py: 1.5,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#d9aa16" },
                    }}
                  >
                    Submit Request
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* FINAL CTA */}
      <Box sx={{ backgroundColor: "#0A1A44", color: "white", py: 8 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight={900}>
            Ready to Have Real Conversations with Real Prospects?
          </Typography>
          <Typography sx={{ mt: 1.5, opacity: 0.9 }}>
            If you’re serious about growing your production, we’d love to be your
            lead partner—not just another vendor.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            sx={{
              mt: 3,
              backgroundColor: "#F5C518",
              color: "#0A1A44",
              px: 5,
              py: 1.6,
              fontWeight: 800,
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#d9aa16" },
            }}
          >
            Talk With Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
