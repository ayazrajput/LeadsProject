import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#0A1A44",
        color: "white",
        py: 1.5,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="900"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "white" }}
        >
          LeadFlow
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" sx={{ color: "white" }}>Home</Button>
          <Button component={Link} to="/aboutus" sx={{ color: "white" }}>About</Button>
          <Button component={Link} to="/contact" sx={{ color: "white" }}>Contact</Button>
        </Box>

        <Button
          component={Link}
          to="/contact"
          sx={{
            backgroundColor: "#F5C518",
            color: "#0A1A44",
            fontWeight: 700,
            px: 3,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#d9aa16",
            },
          }}
        >
          Get Leads
        </Button>
      </Toolbar>
    </AppBar>
  );
}
