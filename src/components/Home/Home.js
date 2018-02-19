import React from 'react';
import PropTypes from 'prop-types';
import Image from 'grommet/components/Image';
import startImage from '../../images/impro_rocks.jpg';
import './Home.css';

const Home = props => (
  <div className="Home">
    <Image src={startImage} full="horizontal" />
    <p>Counter: {props.counter}</p>
    <button onClick={props.increment}>Increment</button>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default Home;
