import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const ProtectRegistrationRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      navigate("/");
    } else {
      setChecked(true);
    }
  }, [navigate]);

  if (!checked) return null;

  return children;
};
