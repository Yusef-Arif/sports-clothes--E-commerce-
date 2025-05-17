import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/auth";

const ProtectedRoute = ({ children, allow }) => {
  const dispatch = useDispatch();
  const { user, accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, accessToken, user]);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else if (user && allow && !allow.includes(user.role)) {
      navigate("/unauthorized");
    }
  }, [user, accessToken, navigate, allow]);

  if (!user || loading) return null;

  return children;
};

export default ProtectedRoute;
