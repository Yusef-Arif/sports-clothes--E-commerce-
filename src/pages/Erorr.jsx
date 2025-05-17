import React from "react";
import { useNavigate } from "react-router-dom";

const Erorr = () => {
  const navigate = useNavigate();
  return (
    <main class="grid min-h-[105vh] place-items-center bg-white px-6 py-20 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-gray-600">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center">
          <button
            onClick={() => navigate("/")}
            class="cursor-pointer rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Erorr;
