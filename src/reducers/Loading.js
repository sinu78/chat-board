const loading = (state = false, action) => {
  switch (action.type) {
    case 'loading':
      return action.loader
    default:
      return state
  }

}
export default loading