import PropTypes from 'prop-types';

import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChangeInput  }) => {
    return (
        <FilterLabel>
            Find contact by name
            <input type="text" value={value} onChange={onChangeInput} />
        </FilterLabel>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired
};