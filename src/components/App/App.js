import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import AppComponent from 'grommet/components/App';
import './App.css';

const App = (props, context) => {
  return (
    <AppComponent>
      <Header justify="between" className="navbar" size="small">
        <Title className="title">
          <h1>{context.translate('improvTrainings')}</h1>
        </Title>
        <Menu className="menu" direction="row" align="center" responsive={true}>
          <a className="grommetux-anchor" href="/" aria-label="Home">
            {context.translate('home')}
          </a>
          <a className="grommetux-anchor" href="/about" aria-label="About">
            {context.translate('about')}
          </a>
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
  translate: PropTypes.func
};

export default App;
