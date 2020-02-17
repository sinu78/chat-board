import React, {Fragment, useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {addMessage} from '../actions'

function AddMessage({dispatch, classes}){
  const [text, setText] = useState('')
  return(
    <Fragment>
      <input 
        className={classes.text}
        value={text} 
        type="text" 
        placeholder="Type your message"
        onChange={(e)=>setText(e.target.value)}
      />
      <button 
        className={classes.button} 
        type="button"
        disabled={text ===''}
        onClick={()=>{
          setText('')
          dispatch(addMessage(text, 'sachin'))
        }}
      >
        Send
      </button>
    </Fragment>  
  )
}

AddMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}


export default connect()(AddMessage)