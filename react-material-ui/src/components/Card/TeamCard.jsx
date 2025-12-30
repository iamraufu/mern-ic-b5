import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function TeamCard({ team }) {
  
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345, height: 800 }}>
        <CardHeader
        title={team.strTeam}
        subheader={`${team.strTeamAlternate}, ${team.strLocation}`}
      />
      <CardMedia
        component="img"
        image={team.strBadge}
        alt={team.strTeam}
      />
        <CardContent sx={{height:200, overflow:'auto'}}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {team.strDescriptionEN}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/leagues/${team.strTeam}/${team.idTeam}`}>
            <Button size="small">See Details</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
