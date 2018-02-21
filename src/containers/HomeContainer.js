import { connect } from 'react-redux';

import { fetchExercises, getExercises, exercisesLoaded } from '../modules/home';

import trasnlations from '../translations.js';

import Home from '../components/Home';

const mapDispatchToProps = {
  fetchExercises: () => fetchExercises()
};

export const translateCategory = (category, pmessages) => {
  let messages = pmessages;
  if (!messages) {
    messages = trasnlations.fi.messages;
  }
  const key = Object.keys(messages).find(key => key === category);
  return trasnlations.fi.messages[key];
};

const getCategories = exercises => {
  const categories = [];
  exercises.forEach(exercise => {
    const category = translateCategory(
      exercise.category,
      trasnlations.fi.messages
    );

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
