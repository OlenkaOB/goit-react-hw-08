const { Formik, Form, Field } = 'formik';

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <Formik>
        <Form>
          <Field name="email" placeholder="Enter email..." />
          <Field name="password" placeholder="Enter password..." />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
