import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import QrCodeScanner from "@mui/icons-material/QrCodeScanner";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import PropsTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import SecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SecurityUpdateGoodOutlined";

export default function SideBar({
  mobileOpen = false,
  handlerDrawerTransitionEnd,
  handleDrawerClose,
  drawerWidth = 100,
}) {
  SideBar.propTypes = {
    mobileOpen: PropsTypes.any.isRequired,
    handlerDrawerTransitionEnd: PropsTypes.any.isRequired,
    handleDrawerClose: PropsTypes.any.isRequired,
    drawerWidth: PropsTypes.number.isRequired,
  };

  // const userAuthority = FakeAuthProvider.getAuthority;
  const { role } = useAuth();

  const asistentRoutes = [
    // Rutas para el asistente
  ];

  const userRoutes = [
    // Rutas para el usuario
  ];

  const medicRoutes = [
    {
      text: "Lector QR",
      icon: <QrCodeScanner sx={{ flexGrow: 1 }} />,
      route: "/scanner",
    },
    {
      text: "Acceso Manual",
      icon: <SecurityUpdateGoodOutlinedIcon sx={{ flexGrow: 1 }} />,
      route: "/guards/manualAccess",
    },
  ];

  const authority = {
    ASIST: asistentRoutes,
    USER: userRoutes,
    MEDIC: medicRoutes,
  };

  const routes = authority[role] || [];

  // Drawer content
  const drawer = (
    <>
      {/* <Box sx={{ width: drawerWidth, height: "8vh" }} /> */}
      {/* {mobileOpen && <Toolbar />} */}
      <List sx={{ pt: 0 }}>
        {routes.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            style={({ isActive }) => {
              return isActive ? { color: "rgb(0, 127, 255)" } : {};
            }}
          >
            {({ isActive }) => (
              <ListItemButton
                key={index}
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
                selected={isActive}
              >
                <ListItemIcon sx={{ color: isActive && "info.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ textAlign: "center", color: isActive && "info.main" }}
                />
              </ListItemButton>
            )}
          </NavLink>
        ))}
      </List>
    </>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        disableScrollLock={true}
        onTransitionEnd={handlerDrawerTransitionEnd}
        sx={{
          width: drawerWidth,
          display: { sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, pt: 10 },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            ml: 1,
            mt: 11,
            mb: 4,
            p: 0,
            height: "calc(100% - 104px)",

            // border: "2px solid red",
            borderRadius: "16px",
            boxSizing: "border-box",
          },

          "& .MuiDrawer-docked": {
            border: "2px solid blue",
          },
        }}
        open
        color="primary"
        anchor="left"
      >
        {drawer}
      </Drawer>
    </>
  );
}
