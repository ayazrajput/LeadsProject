import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0A1A44",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 6,
      }}
    >
      <Typography>© 2025 LeadFlow. All Rights Reserved.</Typography>
    </Box>
  );
}
