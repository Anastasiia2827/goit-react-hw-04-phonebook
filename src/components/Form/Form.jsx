import { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledForm, Label, InputStyle, Button} from './Form.styled';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    changeHandle = evt => {
  const { name, value } = evt.currentTarget;
  this.setState({ [name]: value });
    };
    
    submitHandle = evt => {
  evt.preventDefault();
  this.props.formSubmit(this.state);
  this.reset();
  };
  
    reset = () => {
  this.setState({ name: '', number: '' });
};

    render() {
        const { name, number } = this.state;
        return (
            <StyledForm onSubmit={this.submitHandle}>
                <Label>
                    Name
                    <InputStyle
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      value={name}
                      onChange={this.changeHandle}
                    />
                </Label>
                <Label>
                    Number
                    <InputStyle
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.changeHandle}
                     />
                </Label>
                <Button type="submit">
                    add contact
                </Button>
          </StyledForm >  
        )
    }
}

export { Form };

Form.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
