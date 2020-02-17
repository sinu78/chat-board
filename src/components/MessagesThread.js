import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 127px)',
    overflow: 'scroll',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  wrapper: {
    margin: '10px',
    width: '80%'
  },
  label: {
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    backgroundColor: '#fff',
    display: 'block',
    width: 'auto'
  }
}));

function MessageThread({messages, is_loading}){
  const classes = useStyles()
  return(
    <div className={classes.root}>
      {messages.map((item,index)=>{
        return(
          <div key={index} className={classes.wrapper} style={{float: item.user ==='sachin' ? 'right' : 'left'}}>
            <label className={classes.label} style={{float: item.user ==='sachin' ? 'right' : 'left'}} >
              {item.text}
            </label>
          </div>)
      })}
      {is_loading && <label style={{padding:'10px'}} >Typing...</label>}
    </div>
  )
}

MessageThread.prototype = {
  dispatch: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired,
  xyz: PropTypes.number.isRequired
}
export default MessageThread