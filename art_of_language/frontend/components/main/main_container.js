import { connect } from 'react-redux';
import { logout, demo } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => {

  return{loggedIn: Boolean(state.session.currentUser)}
};

const mapDispatchToProps = dispatch => ({
  demo: () => dispatch(demo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
