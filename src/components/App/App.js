import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import AppComponent from 'grommet/components/App';
import './App.css';

const App = (props, context) => {
  const path = context.router.route.location.pathname;

  return (
    <AppComponent>
      <Header justify="between" className="navbar" size="small">
        <Title className="title">
          <h1>{context.translate('improvTrainings')}</h1>
        </Title>
        <Menu className="menu" direction="row" align="center" responsive={true}>
          <Anchor href="/" className={path === '/' ? 'active' : ''}>
            {context.translate('home')}
          </Anchor>
          <Anchor href="/about" className={path === '/about' ? 'active' : ''}>
            {context.translate('about')}
          </Anchor>
        </Menu>
      </Header>
      {props.children}
    </AppComponent>
  );
};

App.propTypes = {
  children: PropTypes.any
};

App.contextTypes = {
  translate: PropTypes.func,
  router: PropTypes.object
};

export default App;
