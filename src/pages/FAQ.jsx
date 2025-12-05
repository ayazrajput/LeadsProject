import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const faqList = [
    {
      q: "Are your leads 100% exclusive?",
      a: "Yes. Every lead you receive is exclusive to you only. We do not resell or recycle leads — each prospect is assigned once per agent.",
    },
    {
      q: "How fast do I receive my leads?",
      a: "All leads are delivered in real time. Once a consumer completes a form in your selected funnel, it is instantly sent to your email or CRM.",
    },
    {
      q: "What types of leads do you provide?",
      a: "We offer Final Expense, Medicare (MA, Med-Sup, Part D), ACA Marketplace leads, and Mortgage Protection homeowner leads.",
    },
    {
      q: "Can I select the states where I want leads?",
      a: "Yes. You choose the exact states or ZIP code regions, and we target only those areas based on your licensing restrictions.",
    },
    {
      q: "Are your leads TCPA compliant?",
      a: "Absolutely. Every consumer provides express written consent, with full TCPA disclosures displayed before submitting their information.",
    },
    {
      q: "Do you replace bad or invalid leads?",
      a: "Yes. We replace any lead with invalid contact information (e.g., disconnected numbers, fake data). Lead quality is our priority.",
    },
    {
      q: "What makes your Medicare leads different?",
      a: "Our Medicare leads focus on T65, switchers, and seniors researching plan upgrades. Each lead includes qualification questions for accurate targeting.",
    },
    {
      q: "Are your ACA leads subsidy qualified?",
      a: "Most ACA prospects fill out household income and size, helping identify subsidy eligibility for Marketplace plans.",
    },
    {
      q: "Do you provide live transfers?",
      a: "Live transfers are available upon request for certain campaigns. Contact us if you'd like to add transfers to your lead plan.",
    },
    {
      q: "How are payments handled?",
      a: "We accept secure online payments (Stripe) for weekly, monthly, or prepaid lead packages. Custom packages are also available.",
    },
    {
      q: "Is there a contract or long-term commitment?",
      a: "No. We do not lock agents into contracts. You may scale up or pause your lead volume anytime.",
    },
    {
      q: "Can agencies or call centers partner with you?",
      a: "Yes. We work with individual agents, multi-state agencies, and call centers. Custom pricing and funnels are available for high-volume clients.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#020617", color: "#e5e7eb", minHeight: "100vh", pb: 10 }}>
      
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
          Frequently Asked Questions
        </Typography>

        <Typography
          sx={{
            maxWidth: 750,
            mx: "auto",
            mt: 2,
            opacity: 0.85,
          }}
        >
          Find answers about our lead generation process, compliance standards, delivery times, and more.
        </Typography>
      </Box>

      {/* FAQ SECTION */}
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(15,23,42,0.96)",
            border: "1px solid rgba(51,65,85,0.8)",
          }}
        >
          {faqList.map((faq, idx) => (
            <Accordion
              key={idx}
              sx={{
                backgroundColor: "transparent",
                color: "#f1f5f9",
                borderBottom: "1px solid rgba(100,116,139,0.3)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#facc15" }} />}>
                <Typography fontWeight="600">{faq.q}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ opacity: 0.85 }}>
                <Typography>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>

      {/* FINAL CTA */}
      <Box
        sx={{
          mt: 10,
          textAlign: "center",
          py: 10,
          background: "radial-gradient(circle at top, #1d4ed8, #020617 55%)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#f9fafb" }}>
          Still have questions?
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Contact us anytime — our support team is here to help you scale.
        </Typography>

        <Button
          href="/contact"
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
          Contact Support
        </Button>
      </Box>

    </Box>
  );
}
