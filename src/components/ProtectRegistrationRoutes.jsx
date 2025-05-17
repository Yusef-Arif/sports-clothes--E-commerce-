import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const ProtectRegistrationRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, accessToken, user]);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return children;
};
