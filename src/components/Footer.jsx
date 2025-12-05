import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0d1b5e", color: "white", py: 6, mt: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              LeadGenPro
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>
              Providing premium insurance leads for agents across the USA.
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Services
            </Typography>

            {[
              { name: "Final Expense", path: "/final-expense" },
              { name: "Medicare", path: "/medicare" },
              { name: "ACA", path: "/aca" },
              { name: "Mortgage Protection", path: "/mortgage-protection" },
            ].map((item) => (
              <Typography
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  display: "block",
                  mt: 1,
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.7,
                  "&:hover": { opacity: 1 },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography>Email: support@leadgenpro.com</Typography>
            <Typography>Phone: (800) 555-1234</Typography>
            <Typography>Serving: USA Nationwide</Typography>
          </Grid>

        </Grid>

        {/* Bottom Bar */}
        <Typography
          textAlign="center"
          sx={{ mt: 4, opacity: 0.6, fontSize: 14 }}
        >
          © {new Date().getFullYear()} LeadGenPro — All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
