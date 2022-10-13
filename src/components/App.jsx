import { useAuth } from 'hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { refreshUser } from 'redux/auth/operation';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
    
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo='/' />} />
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo='/contacts' />} />
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo='/contacts' />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
};