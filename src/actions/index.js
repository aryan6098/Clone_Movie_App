export const ADD_MOVIES = "ADD_MOVIES";
export function addMovie(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
