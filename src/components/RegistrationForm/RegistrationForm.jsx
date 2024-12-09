const { Formik, Form, Field } = 'formik';

const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <Formik>
        <Form>
          <Field name="name" placeholder="Enter name..." />
          <Field name="email" placeholder="Enter email..." />
          <Field name="password" placeholder="Enter password..." />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
