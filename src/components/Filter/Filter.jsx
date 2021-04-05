import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
import { CSSTransition } from 'react-transition-group';
import s from './Filter.module.css';

export default function Filter() {
   const dispatch = useDispatch();
   const value = useSelector(selectors.getFilter);
   const contacts = useSelector(selectors.getAllContacts);
   const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));
   return (
      <CSSTransition
         in={contacts.length > 1}
         appear={true}
         timeout={250}
         classNames={s}
         unmountOnExit
      >
         <div className={s.container}>

            <h2 className={s.title}> Contacts </h2>
            <label className={s.label}>
               Find contacts by name:
            </label>
            <input
               className={s.input}
               placeholder="search by name"
               type="text"
               value={value}
               onChange={onChange}
            />

         </div >
      </CSSTransition>
   );
}