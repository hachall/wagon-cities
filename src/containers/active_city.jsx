import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {




  render() {

    let style = {}

    if (this.props.activeCity.name !== undefined) {
      style = { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug})` };

    }

    let classes = "city-image"

    return (
      <div className="active-city">
        <div className="city-text">
          <h1>
            {this.props.activeCity.name}
          </h1>
          <p>
            {this.props.activeCity.address}
          </p>
        </div>
        <div className={classes} style={style}>

        </div>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
