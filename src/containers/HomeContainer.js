import { connect } from 'react-redux';

import { fetchExercises, getExercises, exercisesLoaded } from '../modules/home';

import Home from '../components/Home';

const mapDispatchToProps = {
  fetchExercises: () => fetchExercises()
};

const getCategories = exercises => {
  const categories = [];
  exercises.forEach(exercise => {
    if (categories.indexOf(exercise.category) === -1) {
      categories.push(exercise.category);
    }
  });
  return categories;
};

const mapStateToProps = state => {
  const exercises = getExercises(state);
  return {
    exercises,
    categories: getCategories(exercises),
    loaded: exercisesLoaded(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
