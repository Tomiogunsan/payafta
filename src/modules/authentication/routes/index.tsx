import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPaths } from '../../../constant/paths';
import GetStarted from '../Verify/GetStarted';

const Login = lazy(() => import('../Login'));
const ForgotPassword = lazy(() => import('../ForgotPassword/index'));
const VerifyToken = lazy(() => import('../VerifyToken/index'));
const CreateNewPassword = lazy(() => import('../CreateNewPassword/index'));
const CreatePasswordSuccess = lazy(
  () => import('../CreateNewPassword/CreatePasswordSuccess'),
);
const Signup = lazy(() => import('../Signup'));
const Home = lazy(() => import('../Home'));
const PageNotFound = lazy(() => import('../PageNotFound'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="/home" replace />} />
        <Route path={AuthPaths.HOME} element={<Home />} />
        <Route path={AuthPaths.SIGNIN} element={<Login />} />
        <Route
          path={AuthPaths.CREATE_NEW_PASSWORD}
          element={<CreateNewPassword />}
        />
        <Route
          path={AuthPaths.CREATE_PASSWORD_SUCCESS}
          element={<CreatePasswordSuccess />}
        />
        <Route path={AuthPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={AuthPaths.VERIFY_TOKEN} element={<VerifyToken />} />
        <Route path={AuthPaths.VERIFY} element={<GetStarted />} />
        <Route path={AuthPaths.SIGNUP} element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
