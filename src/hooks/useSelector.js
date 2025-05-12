// hooks/useAppSelectors.js
import { useSelector } from "react-redux";

export const useAppSelectors = () => {
  const {
    products,
    isLoading: loading,
    error,
  } = useSelector((state) => state.products);

  const {
    users,
    isLoading: userLoading,
    error: userError,
  } = useSelector((state) => state.users);

  return {
    products,
    loading,
    error,
    users,
    userLoading,
    userError,
  };
};
