import PropTypes from 'prop-types';
import { Container, Field } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Container>
      Find contacts by name
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder=" enter contact"
      />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
