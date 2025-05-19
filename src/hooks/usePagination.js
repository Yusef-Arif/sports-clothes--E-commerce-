import { useState } from "react";

const usePagination = (initialPage = 1, limit = 10) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
  const goToPage = (pageNum) => setPage(pageNum);

  const offset = (page - 1) * limit;

  return { page, limit, offset, nextPage, prevPage, goToPage, setPage };
};

export default usePagination;
