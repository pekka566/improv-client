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

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchExercises();
    }
  }

  render() {
    if (!this.props.loaded) {
      return <Image src={startImage} fit="cover" />;
    }

    const cards = this.props.exercises.map(exercise => {
      return (
        <Card
          key={exercise.id}
          label={exercise.name}
          description={<p>{exercise.description}</p>}
          textSize="small"
        />
      );
    });

    return (
      <div>
        <Hero
          background={<Image src={startImage} fit="cover" />}
          backgroundColorIndex="dark"
          size="small"
        >
          <Box direction="row" justify="between" align="center">
            <Box basis="1/2" align="end" pad="medium" />
            <Box basis="1/2" align="start" pad="medium">
              <Heading margin="none" strong={true} />
            </Box>
          </Box>
        </Hero>

        <Columns masonry={false} size="medium">
          {cards}
        </Columns>
      </div>
    );
  }
}

Home.propTypes = {
  fetchExercises: PropTypes.func.isRequired,
  exercises: PropTypes.array,
  loaded: PropTypes.bool.isRequired
};

export default Home;
