import React from 'react';
import { connect } from 'react-redux';

class ConnectedComponent extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.countries.map(country => (
            <li>{country.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStoreStateToProps = state => ({
  countries: state.countries,
  cities: state.cities,
});

export default connect(mapStoreStateToProps)(ConnectedComponent);
