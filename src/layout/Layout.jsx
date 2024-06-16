import { Box, Toolbar } from "@mui/material";
import AppBarCustom from "../components/appBar/AppBarCustom";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import { useState } from "react";
export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handlerDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerWidth = 100;
  return (
    <Box sx={{ display: "flex", scrollbarGutter: "auto" }}>
      <Box component="header">
        <AppBarCustom handleDrawerToggle={handleDrawerToggle} />
      </Box>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
        }}
      >
        <SideBar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handlerDrawerTransitionEnd={handlerDrawerTransitionEnd}
          handleDrawerClose={handleDrawerClose}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          overflowX: "hidden",
          overflowY: "hidden",
          pl: { sm: mobileOpen ? 1 : 3, xs: 1 },
          pr: { sm: 1, xs: 1, md: 1 },
          minHeight: "100dvh",
          width: "100%",
        }}
      >
        <Toolbar />
        <Box
          component="main"
          sx={{
            flexShrink: 1,
            flexGrow: 1,
          }}
          pt={3}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
