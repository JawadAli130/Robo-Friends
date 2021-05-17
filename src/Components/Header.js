import { makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    text:{
        fontFamily:'Cinzel Decorative',
        textAlign:'center',
        marginTop:'5%',
        marginBottom:'5%',
        paddingBottom:'2%',
        borderBottom: '2px solid red',
        display:'blocked'
    }
});

const Header = ({onSearchChange}) =>{
    const style = useStyles();

    return(
        <>
            <Typography className={style.text} variant='h3' gutterBottom>
              🤖 My Robo Game 🤖
              <br/>
              <br/>
              <TextField  onChange={onSearchChange} label="Robot Name" variant="outlined" size='small' />
            </Typography>
            
        </>
    )
}

export default Header;