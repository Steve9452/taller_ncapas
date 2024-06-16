import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAuth } from "../../provider/authProvider";
// const handleLoginAdmin = async () => {
//   console.log("Logging in...");
//   await FakeAuthProvider.signIn({ username: "admin", password: "admin" });

//   alert("Administrador logueado correctamente");
// };

// const handleLoginUser = async () => {
//   console.log("Logging in...");
//   await FakeAuthProvider.signIn({ username: "user", password: "user" });

//   alert("Usuario logueado correctamente");
// };

// const handleLogout = () => {
//   FakeAuthProvider.signOut();
//   alert("Sesión cerrada correctamente");
// };

export default function DeveloperHub() {
  const { setToken, setRole, token } = useAuth();

  const handleLoginAsist = async () => {
    console.log("Logging in...");

    // Fake auth provider
    setToken("asist");
    setRole("ASIST");
    // alert("Asistente logueado correctamente");
  };

  const handleLoginUser = async () => {
    console.log("Logging in...");

    // Fake auth provider
    setToken("user");
    setRole("USER");
    // alert("Usuario logueado correctamente");
  };

  const handleLoginMedic = async () => {
    console.log("Logging in...");

    // Fake auth provider
    setToken("medic");
    setRole("MEDIC");
    // alert("Medico logueado correctamente");
  };
  const handleLogout = () => {
    setToken(null);
    setRole(null);
    // alert("Sesión cerrada correctamente");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
    >
      <Typography variant="h2" color="primary">
        Página Temporal
      </Typography>

      <Box
        mt={0}
        display="flex"
        flexDirection="column"
        justifyItems="center"
        alignItems="center"
        p={10}
        gap={4}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleLoginAsist()}
          disabled={token ? true : false}
          sx={{ width: "400px " }}
        >
          Ingresar como Asistente
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => handleLoginUser()}
          disabled={token ? true : false}
          sx={{ width: "400px " }}
        >
          Ingresar como Usuario
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => handleLoginMedic()}
          disabled={token ? true : false}
          sx={{ width: "400px " }}
        >
          Ingresar como Medico
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleLogout()}
          disabled={!token ? true : false}
          sx={{ width: "400px " }}
        >
          Cerrar Sesión
        </Button>
        <Link to="/login">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLoginAsist()}
            sx={{ width: "400px " }}
          >
            Volver al Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
