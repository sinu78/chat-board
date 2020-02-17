import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      borderBottom:'1px solid #ccc',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    userName:{
        lineHeight:'20px'
    },
    status:{
        fontSize: 12,
        color: '#666'
    }
  }));

function Header(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="../images/2.jpg" />
            <Typography className={classes.userName} variant="h6" component="h2">
                Bot<br/><span className={classes.status}>Online</span>
            </Typography>
        </div>
    )
}
export default Header