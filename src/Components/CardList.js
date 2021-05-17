import React from "react";
import {Container, Grid, Paper} from '@material-ui/core';
import CardComp from './CardComp';

const CardList = ({Robots}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {Robots.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={12} md={4} lg={3}>
              <Paper key={item.id} elevation={3}>
                <CardComp key={item.id} id={item.id} name={item.name} username={item.username} email={item.email}/>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardList;
