import history from './history';

export const handleRedirect = (route, state) => {
  history.replace(route, {...state})
}
