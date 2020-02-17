import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddMessage from '../containers/AddMessage'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      borderTop:'1px solid #ccc',
      bottom: 0,
      '& > *': {
        margin: theme.spacing(1),
      }
    },
    button: {
      padding:'15px',
      borderRadius:'20px',
      border: 'none',
      outline: 'none',
      fontSize:'14px',
      color:'#fff',
      cursor:'pointer',
      background:'rgba(110, 115, 225, 1)'
    },
    text: {
      padding:'15px',
      borderRadius:'50px',
      border: 'none',
      outline: 'none',
      fontSize:'14px',
      width:'80%'
    }
  }));

function Footer(){
  const classes = useStyles()
  return(
      <div className={classes.root}>
        <AddMessage classes={classes}/>
      </div>
  )
}
export default Footer