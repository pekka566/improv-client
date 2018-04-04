import { connect } from 'react-redux';
import {
  logoutUser,
  loginUser,
  getUser,
  isAuthenticated
} from '../modules/login';
import Login from '../components/Login';

const mapDispatchToProps = {
  logoutUser: () => logoutUser(),
  loginUser: (username, password) => loginUser(username, password)
};

const mapStateToProps = state => {
  return {
    user: getUser(state),
    isAuthenticated: isAuthenticated(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
