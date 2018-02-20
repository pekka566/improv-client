import React from 'react';
import PropTypes from 'prop-types';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Select from 'grommet/components/Select';
import Split from 'grommet/components/Split';
import Section from 'grommet/components/Section';
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

    console.log(this.props.categories);

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

    const divStyle = {
      display: 'inline-block',
      float: 'left'
    };

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
        <Split
          fixed={false}
          separator={false}
          showOnResponsive="both"
          flex="left"
          style={{ 'margin-top': '10px' }}
        >
          <Box justify="center" align="end" pad="none">
            <Select
              placeHolder="None"
              inline={false}
              multiple={true}
              onSearch={() => console.log(this)}
              options={this.props.categories}
              value=""
              onChange={() => console.log(this)}
            />
          </Box>
          <Box
            justify="center"
            align="end"
            pad="none"
            margin="small"
            basis="full"
            full="true "
          >
            <Button
              label="Poista filtteri"
              onClick={() => console.log(this)}
              critical={false}
              accent={false}
              secondary={false}
              primary={false}
              plain={true}
            />
          </Box>
        </Split>
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
  categories: PropTypes.array,
  loaded: PropTypes.bool.isRequired
};

export default Home;
