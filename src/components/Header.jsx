import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0d1b5e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          LeadGenPro
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button component={Link} to="/" sx={{ color: "white" }}>
            Home
          </Button>
<Button component={Link} to="/aboutus" sx={{ color: "white" }}>
            About us
          </Button>
          {/* Services Dropdown */}
          <Button
            sx={{ color: "white" }}
            endIcon={<ArrowDropDownIcon />}
            onClick={handleOpen}
          >
            Services
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem component={Link} to="/final-expense" onClick={handleClose}>
              Final Expense
            </MenuItem>
            <MenuItem component={Link} to="/medicare" onClick={handleClose}>
              Medicare
            </MenuItem>
            <MenuItem component={Link} to="/aca" onClick={handleClose}>
              ACA
            </MenuItem>
            <MenuItem component={Link} to="/mortgage-protection" onClick={handleClose}>
              Mortgage Protection
            </MenuItem>
          </Menu>

          <Button component={Link} to="/contact" sx={{ color: "white" }}>
            Contact
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{ backgroundColor: "#facc15", color: "black", fontWeight: 600 }}
          >
            Get Leads
          </Button>
        </Box>

        {/* Mobile Menu */}
        <IconButton sx={{ display: { xs: "block", md: "none" }, color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
