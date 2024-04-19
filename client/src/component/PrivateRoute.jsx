import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  //   Outlet ==> children of PrivateRoute componetnt
  // Navigate ==> componet used to navigate pages
  // note: use navigate is the function while Navigate is an component.
  return currentUser ? <Outlet></Outlet> : <Navigate to='/sign-in' />;
}
