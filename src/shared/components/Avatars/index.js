// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Paper Ui
import {Avatar as PaperUiAvatar} from 'react-native-paper';

function Avatar({type, ...rest}) {
  if (type === 'icon') return <PaperUiAvatar.Icon {...rest} />;
  else if (type === 'image') return <PaperUiAvatar.Image {...rest} />;
  else if (type === 'text') return <PaperUiAvatar.Text {...rest} />;
}

Avatar.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.oneOf(['icon', 'image', 'text']).isRequired,
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Avatar;
