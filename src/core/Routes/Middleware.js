// Dependencies
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function Middleware(props) {
  let {route} = props;
  const navigation = useNavigation();
  let middlewareList = route.middleware;

  if (middlewareList) {
    if (!Array.isArray(middlewareList)) middlewareList = [middlewareList];

    for (let middleware of middlewareList) {
      let output = middleware(route, navigation);
      if (output) return output;
    }
  }

  return <route.component navigation={navigation} />;
}

export default Middleware;
