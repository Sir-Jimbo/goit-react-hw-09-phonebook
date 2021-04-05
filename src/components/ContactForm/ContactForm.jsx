import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations'
import selectors from '../../redux/phonebook/phonebook-selectors';
import Notification from '../../components/Notification/Notification';
import s from './ContactForm.module.css'

export default function ContactForm() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const [message, setMessage] = useState(null);

   const contacts = useSelector(selectors.getAllContacts);
   const onSubmit = (name, number) => dispatch(operations.addContact(name, number));

   const saveMessage = (note) => {
      setMessage(note);
      setTimeout(() => {
         setMessage(null);
      }, 2500);
   }

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
            console.warn(`Тип поля name - ${name} не обрабатывается!`);
      }
   };

   const handleSubmit = e => {
      e.preventDefault();

      if (name === '') {
         saveMessage('Enter contact name, please!');
         return;
      }
      if (number === '') {
         saveMessage('Enter concact phone, please!');
         return;
      }
      if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
         saveMessage('Contact already exists!');
         return;
      }

      onSubmit(name, number);
      setName('');
      setNumber('');
   };

   return (
      <>

         <Notification
            message={message} />

         <form className={s.container} onSubmit={handleSubmit}>

            <label className={s.label}>
               Name
               </label>
            <input
               className={s.input}
               type="text"
               name="name"
               placeholder="enter your name"
               value={name}
               onChange={handleChange}
            />
            <label className={s.label}>
               Phone number
               </label>
            <input
               className={s.input}
               type="tel"
               name="number"
               placeholder="enter your number"
               value={number}
               onChange={handleChange} />
            <button className={s.button} type="submit">Add contact</button>
         </form>
      </>
   );
}