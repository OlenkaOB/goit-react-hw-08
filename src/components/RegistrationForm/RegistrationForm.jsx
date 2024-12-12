import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast(`Welcome ${res?.user?.name}`);
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Try again');
      });
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="name" placeholder="Enter name..." />
          <Field name="email" placeholder="Enter email..." />
          <Field name="password" placeholder="Enter password..." />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
