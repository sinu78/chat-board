import { connect } from 'react-redux'
import MessagesThread from '../components/MessagesThread'

const mapStateToProps = state => ({
    messages: state.MessageThreads,
    is_loading: state.Loading
  })

export default connect(mapStateToProps)(MessagesThread)