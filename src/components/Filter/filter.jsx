import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };
  render() {
    // const { state } = this.props;
    return (
      <div>
        <label>
          Find contacts by name
          <input
            onChange={this.props.handleFilter}
            type="text"
            name="filter"
            title="Filter contacts"
            value={this.props.filter}
          />
          {/* {console.log('input-this.props.filter', this.state.filter)} */}
        </label>
      </div>
    );
  }
}
