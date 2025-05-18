import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { getProfile } from "../api/auth";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, allow }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      navigate("/login");
    } else if (user === null) {
      dispatch(getProfile())
        .unwrap()
        .then((profile) => {
          if (!allow.includes(profile.role)) {
            navigate("/error");
          }
        })
        .catch(() => navigate("/login"));
    } else if (user && !allow.includes(user.role)) {
      navigate("/");
    }
  }, [dispatch, user, navigate, allow]);
  if (loading && user === null)
    return (
      <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg  flex items-center justify-center z-50">
        <Spinner size="size-50" />
      </div>
    );
  return children;
};

export default ProtectedRoute;
