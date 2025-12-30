import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const LeagueCard = ({ league }) => {
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.secondary", font: "14" }}>
            {league.strSport}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {league.strLeague}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/leagues/${league.strLeague}`}>
            <Button size="small">See Details</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LeagueCard;
