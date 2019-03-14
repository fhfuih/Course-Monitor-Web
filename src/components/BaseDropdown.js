import React, { PureComponent } from 'react';

import NoSsr from '@material-ui/core/NoSsr';
import ReactSelect from 'react-select';

const styles = {
  container: (provided) => ({
    ...provided,
    width: 250,
    display: 'inline-block'
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'transparent'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  })
}

class ReactSelectDropdown extends PureComponent {
  render() {
    // console.log(this.props.name);
    return (
      <NoSsr>
        <ReactSelect 
          name={this.props.name}
          placeholder={this.props.text}
          isDisabled={this.props.disabled || !this.props.data.length}
          isSearchable
          // isClearable
          options={this.props.data}
          value={this.props.value}
          onChange={this.props.onChange}
          styles={styles}
        />
      </NoSsr>
    )
  }
}

// export default withStyles(styles)(BaseDropdown);
export default ReactSelectDropdown;