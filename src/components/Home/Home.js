import React from 'react';
import PropTypes from 'prop-types';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Split from 'grommet/components/Split';
import startImage from '../../images/impro_rocks.jpg';
import { translate } from '../../translations';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filteredExercises: [], category: '' };
    this.onChange = this.onChange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchExercises();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      return {
        filteredExercises: nextProps.exercises,
        exercises: nextProps.exercises
      };
    });
  }

  onChange(event) {
    const exercises = this.state.exercises;
    const category = event.value;
    this.setState({
      category,
      filteredExercises: exercises.filter(
        ex => translate(ex.category) === category
      )
    });
  }

  clearFilter() {
    const exercises = this.state.exercises;
    const category = '';
    this.setState({
      category,
      filteredExercises: exercises
    });
  }

  render() {
    if (!this.props.loaded) {
      return <Image src={startImage} fit="cover" />;
    }

    const cards = this.state.filteredExercises.map(exercise => {
      return (
        <Card
          key={exercise.id}
          label={exercise.name}
          description={
            <div>
              <p>
                <i>{translate(exercise.category)}</i>
              </p>
              <p>{exercise.description}</p>
              <p>{exercise.notice}</p>
            </div>
          }
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
        <Split
          fixed={false}
          separator={false}
          showOnResponsive="both"
          flex="left"
          style={{ marginTop: '10px' }}
        >
          <Box justify="center" align="end" pad="none">
            <Select
              placeHolder="None"
              inline={false}
              multiple={false}
              options={this.props.categories}
              value={this.state.category}
              onChange={this.onChange}
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
              onClick={this.clearFilter}
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

Home.contextTypes = {
  translate: PropTypes.func
};

export default Home;
