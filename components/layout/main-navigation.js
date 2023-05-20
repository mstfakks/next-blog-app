import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "All Posts", url: "/posts" },
  { title: "Contact", url: "/contact" },
];

export default function MainNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"30px"}
        mt={"23px"}
        mb={"45px"}
      >
        <Typography
          variant="h6"
          letterSpacing={"0.03em"}
          fontFamily={"Oswald"}
          fontWeight={"600"}
          fontSize={"23px"}
          lineHeight={"28px"}
          textTransform={"uppercase"}
        >
          My Blog
        </Typography>

        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        px={4}
      >
        {navLinks.map((navlink) => (
          <Button variant="text" fullWidth key={navlink.url} sx={{ my: 2 }}>
            <Typography
              fontWeight={"600"}
              color={"#222222"}
              fontSize={"16px"}
              lineHeight={"25px"}
              letterSpacing={"0.16em"}
              textTransform={"uppercase"}
              fontFamily={"Source Serif Pro"}
            >
              {navlink.title}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      component={"header"}
      minHeight={"4rem"}
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFFFFF",
          pt: "10px",
          pb: "20px",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "space-around",
          }}
        >
          <Box component="div">
            <Link href={"/"}>
              <Typography
                display={{ sm: "block" }}
                color="black"
                fontFamily={"Oswald"}
                letterSpacing={"0.03em"}
                fontSize={"23px"}
                textTransform={"uppercase"}
                fontWeight={"600"}
                lineHeight={"28px"}
              >
                My Blog
              </Typography>
            </Link>
          </Box>

          <IconButton
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, display: { sm: "none" }, color: "#222222" }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            display={{ xs: "none", sm: "flex", md: "flex" }}
            justifyContent={"space-evenly"}
          >
            {navLinks
              .filter((navlink) => navlink.title !== "Home")
              .map((navTitle) => (
                <Box key={navTitle.url} mx={3}>
                  <Link href={navTitle.url}>
                    <Typography
                      fontWeight={"600"}
                      fontSize={"12px"}
                      lineHeight={"15px"}
                      letterSpacing={"0.16em"}
                      textTransform={"uppercase"}
                      color={"#222222"}
                      fontFamily={"Source Serif Pro"}
                    >
                      {navTitle.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
