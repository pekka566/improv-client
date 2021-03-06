import { connect } from 'react-redux';

import { fetchExercises, getExercises, exercisesLoaded } from '../modules/home';

import { translate, translations } from '../translations.js';

import Home from '../components/Home';

const mapDispatchToProps = {
  fetchExercises: () => fetchExercises()
};

const getCategories = exercises => {
  const categories = [];
  exercises.forEach(exercise => {
    const category = translate(exercise.category, translations.fi.messages);

    if (categories.indexOf(category) === -1) {
      categories.push(category);
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
