import { connect } from 'react-redux';

import { fetchExercises, getExercises, exercisesLoaded } from '../modules/home';

import Home from '../components/Home';

const mapDispatchToProps = {
  fetchExercises: () => fetchExercises()
};

const mapStateToProps = state => {
  return {
    exercises: getExercises(state),
    loaded: exercisesLoaded(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
