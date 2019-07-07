import React, { PureComponent } from 'react';

import NoSsr from '@material-ui/core/NoSsr';
import ReactSelect from 'react-select';

const styles = {
  container: (provided) => ({
    ...provided,
    width: 260,
    display: 'inline-block'
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'transparent'
  }),
};

const components = {
  IndicatorSeparator: false
};

class ReactSelectDropdown extends PureComponent {
  render() {
    return (
      <NoSsr>
        <ReactSelect 
          name={this.props.name}
          placeholder={this.props.text}
          isDisabled={this.props.disabled || !this.props.data.length}
          isSearchable
          options={this.props.data}
          value={this.props.value}
          onChange={this.props.onChange}
          styles={styles}
          components={components}
        />
      </NoSsr>
    )
  }
}

// export default withStyles(styles)(BaseDropdown);
export default ReactSelectDropdown;