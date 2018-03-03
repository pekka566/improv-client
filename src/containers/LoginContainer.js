import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../modules/login';
import Login from '../components/Login';

const mapDispatchToProps = {
  logoutUser: () => logoutUser(),
  loginUser: (username, password) => loginUser(username, password)
};

/*
const mapStateToProps = state => {
  const { isAuthenticated } = state.login.isAuthenticated;
  return {
    isAuthenticated
  };
};
*/

export default connect(null, mapDispatchToProps)(Login);
