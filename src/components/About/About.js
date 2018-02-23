import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';

import './About.css';

class About extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchContributors();
    }
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    const contributors = this.props.contributors.map(el => (
      <div key={el.username} className="About__contributor">
        <img src={el.avatar} alt="" />
        <a href={el.url}>{el.username}</a>
        <span>
          {el.contributions > 1
            ? `${el.contributions} commits`
            : `${el.contributions} commit`}
        </span>
      </div>
    ));

    return (
      <Box
        direction="column"
        justify="start"
        align="start"
        wrap={true}
        pad="none"
        margin="small"
      >
        <Box direction="row" margin="none">
          <h3>{this.context.translate('contributors')}</h3>
        </Box>
        <Box direction="row" margin="none">
          <Box margin="small">
            <div className="About">
              <div>{contributors}</div>
            </div>
          </Box>
          <Box align="start" margin="small" direction="row" />
        </Box>
      </Box>
    );
  }
}

About.propTypes = {
  fetchContributors: PropTypes.func.isRequired,
  contributors: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired
};

About.contextTypes = {
  translate: PropTypes.func
};

export default About;
