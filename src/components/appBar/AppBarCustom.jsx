import { useState } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/icons-material/Menu";
// import Settings from "@mui/icons-material/Settings";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../../provider/authProvider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { default as MenuComponent } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";

const ruta = "Clinica de Salud";
export default function AppBarCustom({ handleDrawerToggle }) {
  AppBarCustom.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
  };

  const { role } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        mt: 1,
        bgcolor: "transparent",
        backgroundImage: "none",
        boxShadow: 0,
        px: 1,
        flexGrow: 1,
      }}
    >
      {/* Altermativa Container maxWidth="xl" */}
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          minWidth: "100%",
          margin: "auto",
          padding: 0,
        }}
      >
        <Toolbar
          variant="regular"
          sx={{ borderRadius: "16px", bgcolor: "#112554" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <HealthAndSafetyIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  width: 50,
                  height: 50,
                }}
              />
            </Link>
            <Typography
              variant="h4"
              component="div"
              noWrap
              fontFamily={"Saira"}
              letterSpacing=".2rem"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              CLINICA
            </Typography>
          </Box>
          {role === "ADMIN" && (
            <Typography
              variant="subtitle1"
              component="div"
              noWrap
              fontFamily={"Saira"}
              sx={{ flexGrow: 0, ml: 4, display: { xs: "none", md: "flex" } }}
            >
              ADMINISTRADOR
            </Typography>
          )}
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <Menu />
          </IconButton>
          <Typography
            variant="subtitle1"
            component="div"
            noWrap
            fontFamily={"Saira"}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "block" },
              alignItems: "start",
              ml: 4,
            }}
          >
            {ruta}
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
            }}
          >
            {/* <IconButton
              size="large"
              sx={{ color: "white" }}
              aria-label="show 4 new mails"
              
            >
              <Settings />
            </IconButton> */}
            <Tooltip title="Configuración" arrow>
              <IconButton
                size="large"
                sx={{ color: "white" }}
                aria-label="show 4 new mails"
                onClick={handleAvatarClick}
              >
                <Avatar
                  sx={{
                    bgcolor: "info.light",
                    width: 30,
                    height: 30,
                    ml: 1,
                    mr: 1,
                  }}
                >
                  U
                </Avatar>
              </IconButton>
            </Tooltip>
            <MenuComponent
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleAvatarClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleAvatarClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Cerrar sesión
                </MenuItem>
              </Link>
            </MenuComponent>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
