import { connect } from 'react-redux';
import { logout, demo } from '../../actions/session_actions';
import teachers from './teachers';

const mapStateToProps = (state) => {

  return{loggedIn: Boolean(state.session.currentUser)}
};

const mapDispatchToProps = dispatch => ({
  demo: () => dispatch(demo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(teachers);
