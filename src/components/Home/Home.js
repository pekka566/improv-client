import React from 'react';
import PropTypes from 'prop-types';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import startImage from '../../images/impro_rocks.jpg';
import './Home.css';

const Home = props => (
  <div>
    <Hero
      background={<Image src={startImage} fit="cover" />}
      backgroundColorIndex="dark"
      size="small"
    >
      <Box direction="row" justify="center" align="center">
        <Box basis="1/2" align="end" pad="medium" />
        <Box basis="1/2" align="start" pad="medium">
          <Heading margin="none" strong={true} />
        </Box>
      </Box>
    </Hero>

    <Columns masonry={false} size="medium">
      <Card
        label="Sample Label"
        description="Sample description providing more details."
      />

      <Card
        label="Sample Label"
        description="Sample description providing more details."
      />

      <Card
        label="Sample Label"
        description="Sample description providing more details."
      />

      <Card
        label="Sample Label"
        description="Sample description providing more details."
      />

      <Card
        label="Sample Label"
        description="Sample description providing more details."
      />
    </Columns>
    <p>Counter: {props.counter}</p>
    <button onClick={props.increment}>Increment</button>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default Home;
