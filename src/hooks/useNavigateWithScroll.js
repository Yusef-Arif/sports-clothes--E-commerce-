import { useNavigate } from "react-router-dom";

const useNavigateWithScroll = () => {
  const navigate = useNavigate();

  const navigateAndScrollTop = (to, options) => {
    navigate(to, options);
    window.scrollTo(0, 0);
  };

  return navigateAndScrollTop;
};

export default useNavigateWithScroll;
