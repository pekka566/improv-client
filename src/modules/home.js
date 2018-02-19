// ------------------------------------
// Constants

//const API_URL = 'https://improv-api.herokuapp.com';
const API_URL = 'http://localhost:5000';

const EXERCISES_FETCH_SUCCESS = 'home/EXERCISES_FETCH_SUCCESS';
const EXERCISES_FETCH_FAILURE = 'home/EXERCISES_FETCH_FAILURE';

// ------------------------------------
// Action creators

function fetchExercisesSuccess(exercises) {
  return {
    type: EXERCISES_FETCH_SUCCESS,
    payload: exercises
  };
}

function fetchExercisesFailure(errmessage) {
  return {
    type: EXERCISES_FETCH_FAILURE,
    payload: errmessage
  };
}

export function fetchExercises() {
  return dispatch => {
    return fetch(`${API_URL}/exercises`)
      .then(response => {
        if (!response.ok) throw new Error('Unable to fetch');
        return response.json();
      })
      .then(exercises => dispatch(fetchExercisesSuccess(exercises)))
      .catch(error => dispatch(fetchExercisesFailure(error.message)));
  };
}

// ------------------------------------
// Selectors

export const getExercises = state => state.home.exercises;
export const exercisesLoaded = state => state.home.loaded;

// ------------------------------------
// Store & reducer

const initialState = {
  exercises: [],
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EXERCISES_FETCH_SUCCESS:
      return {
        ...state,
        exercises: action.payload.map(el => ({
          id: el._id,
          name: el.Name,
          description: el.Description,
          notice: el.Notice,
          category: el.Category
        })),
        loaded: true
      };
    case EXERCISES_FETCH_FAILURE:
      return {
        ...state,
        loaded: true
      };

    default:
      return state;
  }
}

// ------------------------------------
// Testing variables

export const testing = {
  repo_url: API_URL,
  fetchExercisesSuccess,
  fetchExercisesFailure
};
