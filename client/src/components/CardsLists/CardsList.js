import React from "react";
import Films from "./cards/films";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import People from "./cards/people";
import Species from "./cards/species";
import Starships from "./cards/starships";
import Vehicles from "./cards/vehicles";
import Planets from "./cards/planets";
import DetailFilms from "./DetailedCard/films";
import DetailPeople from "./DetailedCard/people";
import DetailSpecies from "./DetailedCard/species";
import DetailStarships from "./DetailedCard/starships";
import DetailVehicles from "./DetailedCard/vehicles";
import DetailPlanets from "./DetailedCard/planets";

export default function SmallDetails() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/films" exact component={Films} />
        <Route path="/people" exact component={People} />
        <Route path="/species" exact component={Species} />
        <Route path="/starships" exact component={Starships} />
        <Route path="/vehicles" exact component={Vehicles} />
        <Route path="/planets" exact component={Planets} />
        <Route path="/films/:id" exact component={DetailFilms} />
        <Route path="/people/:id" exact component={DetailPeople} />
        <Route path="/species/:id" exact component={DetailSpecies} />
        <Route path="/starships/:id" exact component={DetailStarships} />
        <Route path="/vehicles/:id" exact component={DetailVehicles} />
        <Route path="/planets/:id" exact component={DetailPlanets} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   <Grid container className={classes.root} xl>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //     <Grid item xs={9} sm={6} md={4}>
    //       <Films />
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
