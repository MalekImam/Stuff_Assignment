/**
 * Set all routes that could be requested in our application
 *
 * @const {Array}
 */
export const authRoutesList = [];
export const unAuthRoutesList = [];

/**
 * Add new route to the router list
 *
 * @param {string} name
 * @param {React.Component} component
 * @param {Function|Array|null} middleware
 * @param {boolean} auth
 */
function addRouter(name, component, middleware = null, auth = true) {
  let flag = 0;
  const routesList = authRoutesList.concat(unAuthRoutesList);
  routesList.forEach((element) => {
    if (element.name === name) flag = 1;
  });
  if (!flag && auth) authRoutesList.push({name, component, middleware});
  else if (!flag && !auth) unAuthRoutesList.push({name, component, middleware});
}

export default {
  add: addRouter,
};
