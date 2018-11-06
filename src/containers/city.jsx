import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {

    let classes = "city"
    if (this.props.city === this.props.activeCity) {
      classes += " selected";
    }

    return(
      <div class={classes} onClick={this.handleClick}>
        <p>{this.props.city.name}</p>
      </div>
    )
  }
}

import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
