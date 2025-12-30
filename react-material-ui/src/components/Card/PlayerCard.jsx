import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function PlayerCard({ player }) {
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345, height: 800 }}>
        <CardHeader
          title={player.strPlayer}
          subheader={`${player.dateBorn}, ${player.strBirthLocation} - ${player.strEthnicity}, ${player.strNationality}`}
        />
        <CardMedia
          component="img"
          image={player.strCutout}
          alt={player.strPlayer}
        />
        <CardContent sx={{ height: 200, overflow: "auto" }}>
          <Typography variant="h6">{player.strPosition}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {player.strDescriptionEN}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
