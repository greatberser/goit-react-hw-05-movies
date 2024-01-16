import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css'

export const SearchBar = ({ onSubmit }) => (
  <Formik
    initialValues={{
      searchQuery: '',
    }}
    onSubmit={values => {
      onSubmit(values.searchQuery);
    }}
  >
    <Form className={css.containerForm}>
      <Field className={css.inputMovie} placeholder="Movie name" id="searchQuery" name="searchQuery" />
      <button className={css.sumbitBtn} type="submit">SEARCH</button>
    </Form>
  </Formik>
);

export default SearchBar;