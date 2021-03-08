import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className="Filter">
      <p className="form__title ">Find Contacts By Name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
