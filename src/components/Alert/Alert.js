import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const colors = {
  success: '#6da06f',
  error: '#f56260',
};

function myBorder({type}) {
  console.log(type); console.log('red solid 1px'); return 'red solid 1px';
}

const useStyles = createUseStyles({
    wrapper: {
      border: myBorder,
      // border: 'red solid 1px',
      marginBottom: 15,
      padding: 15,
      position: 'relative',
      '& h2': {
        color: ({type}) => colors[type],
        margin: [0, 0, 10, 0],
      }
    }
});

export default function Alert({ children, title, type}) {
  const classes = useStyles({ type })
  return(
    <div className={classes.wrapper}>
      <h2>{title} ({type})</h2>
      {children}
    </div>
  )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

Alert.defaultProps = {
    type: 'error'
}
