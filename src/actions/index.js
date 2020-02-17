import {getAnswerByQuestion} from '../helper'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (text, user) => {
  return (dispatch) => {
    dispatch(message(text, user))
    setTimeout(()=>{
      dispatch(updateLoader(true))
    }, 1000) 
    setTimeout(()=>{
      dispatch(message(getAnswerByQuestion(text), 'bot'))
      dispatch(updateLoader(false))
    },2000) 
  }
}

export const message = (text, user) => {
  return {
    type: ADD_MESSAGE,
    user,
    text
  }
}

export const updateLoader = (is_loading) => {
  return {
    type: 'loading',
    loader: is_loading
  }
}