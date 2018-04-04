import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    props.logoutUser();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.loginUser(username, password);
    }
  }

  render() {
    const { isAuthenticated, user } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div>
        <div>
          Username: {user ? user.username : ''}
          <br />
          Password: {isAuthenticated ? 'true' : 'false'}
        </div>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted &&
              !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && <div>Password is required</div>}
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};

export default Login;
