import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NoSsr from '@material-ui/core/NoSsr';
import ReactSelect from 'react-select';
import reactSelectDataType from '../../propTypes/reactSelectDataType';

const styles = width => ({
  container: provided => ({
    ...provided,
    width,
    display: 'inline-block',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    backgroundColor: 'transparent',
  }),
});

const components = {
  IndicatorSeparator: false,
};

class ReactSelectDropdown extends PureComponent {
  render() {
    const { name, text, width = 260, disabled, data, value, onChange } = this.props;
    return (
      <NoSsr>
        <ReactSelect
          name={name}
          placeholder={text}
          isDisabled={disabled || !data.length}
          isSearchable
          options={data}
          value={value}
          onChange={onChange}
          styles={styles(width)}
          components={components}
        />
      </NoSsr>
    );
  }
}

ReactSelectDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(reactSelectDataType).isRequired,
  value: reactSelectDataType,
  onChange: PropTypes.func.isRequired,
};

ReactSelectDropdown.defaultProps = {
  width: 260,
};

export default ReactSelectDropdown;
