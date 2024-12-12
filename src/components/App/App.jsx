import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Layout from '../../components/Layout';
import HomePage from '../../pages/HomePages/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
// import NotFaundPage from '../../pages/NotFaundPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import PrivateRoute from '../PrivateRoute';
import Loader from '../Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="*" element={<NotFaundPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
