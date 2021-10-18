import  { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
      switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number});
    reset();
  };

  const reset = () => {
     setName('');
    setNumber('');
  };
  
    return (
      <div className={s.wrapperForm}>
        <form className={s.bodyForm} onSubmit={handleSubmit}>
          <div className={s.formGrup}>
            <label className={s.formGgroupLabel}>
              Name
              <input
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={s.formGroupInput}
              />
            </label>
            <label className={s.formGgroupLabel}>
              number
              <input
                type="tel"
                value={number}
                onChange={handleChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                className={s.formGroupInput}
              />
            </label>
          </div>
          <div className={s.submitButton}>
            <button className={s.button} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
