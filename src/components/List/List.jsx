import PropTypes from 'prop-types';

import { ListStyled, Item, ButtonDelete } from './List.styled';

const List = ({ contacts, onDelete }) => {
    return (
        <ListStyled>
            {contacts.map(({ id, name, number }) => {
                    return (
                        <Item  kye={id}>
                            <span>{name}</span>
                            <span>{number}</span>
                            <ButtonDelete type="button" onClick={() => onDelete(id)}>
                                Delete
                            </ButtonDelete>
                      </Item >  
                    );
                })}
            </ListStyled>
    );
};

export { List };
  
List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};