import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card:{
    //height:'25rem',
    paddingBottom:40,
    paddingTop:40,
    backgroundColor: '#DEE2E9',
    transition: 'all .3s ease-in-out',
    '&:hover':{
      transform: 'scale(1.1)'
    }
  },
  img:{
    width:200,
    height:200,
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
  },
  text:{
    textAlign:'center'
  }
});

const CardComp = (props) => {
  const style = useStyles();
  return (
    <>
      <Card className={style.card}>
        <img className={style.img} src={`https://robohash.org/${props.id}`} alt='robot_images' />
        <CardContent>
          <Typography className={style.text} gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={style.text} variant="body2" color="textSecondary" component="p">
            {props.email}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComp;
