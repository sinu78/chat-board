import {ADD_MESSAGE} from '../actions'

const MessageThreads = (state = [], action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return [
          ...state,
          {
            text: action.text,
            user: action.user
          }
        ]
      default:
        return state
    }
  }
export default MessageThreads