import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CircularProgress, Grid } from "@mui/material";
import LeagueCard from "../../components/Card/LeagueCard";

const Home = () => {
  const [allLeagues, setAllLeagues] = useState([]);

  useEffect(() => {
    const leagueData = async () => {
      try {
        const league = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/all_leagues.php`
        );
        const response = await league.json();
        const data = await response.leagues;
        setAllLeagues(data);
      } catch (err) {
        console.log(err);
      }
    };
    leagueData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="">
        <h1>Total Leagues {allLeagues.length}</h1>

        <Grid container spacing={2}>
          {
          allLeagues.length > 0 ? 
          allLeagues.map((league) => <LeagueCard key={league.idLeague} league={league} />)
          : <CircularProgress />}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
