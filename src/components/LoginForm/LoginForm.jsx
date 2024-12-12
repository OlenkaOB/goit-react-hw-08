import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedId } from '../../redux/auth/selectors';
import { login } from '../../redux/auth/operations';
import { Navigate } from 'react-router-dom';

const { Formik, Form, Field } = 'formik';

const LoginForm = () => {
  const isLoggedId = useSelector(selectIsLoggedId);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  if (isLoggedId) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="email" placeholder="Enter  your email..." />
          <Field name="password" placeholder="Enter your password..." />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
