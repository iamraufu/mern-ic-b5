import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import TeamCard from "../../components/Card/TeamCard";

const Leagues = () => {
  const { name } = useParams();

  const [leagueDetails, setLeagueDetails] = useState([]);

  useEffect(() => {
    const teamData = async () => {
      try {
        const team = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${name}`
        );
        const response = await team.json();
        const data = await response.teams;
        setLeagueDetails(data);
      } catch (err) {
        console.log(err);
      }
    };
    teamData();
  }, [name]);

  return (
    <div>
      <Navbar />
      <h2>Total Teams {leagueDetails.length}</h2>

      <Grid container spacing={2}>
        {leagueDetails.length > 0 ? (
          leagueDetails.map((team) => (
            <TeamCard key={team.idTeam} team={team} />
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </div>
  );
};

export default Leagues;
