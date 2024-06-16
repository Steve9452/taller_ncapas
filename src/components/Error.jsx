import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Error 404
      </Typography>
      <Typography variant="body1" color="primary">
        Página no encontrada
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
