import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function Summary({value}) {
  return (
    <div>Total Count: {value}</div>
  );
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  let sum = 0;
  for(const key in state) {
    if(state.hasOwnProperty(key)){
      sum += state[key];
    }
  }
  return { value: sum};
}

Summary.PropTypes = {
  value: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Summary);
