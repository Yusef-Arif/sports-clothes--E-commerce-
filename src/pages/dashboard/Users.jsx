import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../api/users";
import View from "../../components/dashboard/View";
import Spinner from "../../components/Spinner";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.isLoading);
  const [view, setView] = useState(false);
  const [viewData, setViewData] = useState({});
  console.log(viewData)

  const handleView = (data) => {
    setView(!view);
    setViewData(data);
  };

  useEffect(() => {
    dispatch(getAllUsers("https://api.escuelajs.co/api/v1/users"));
  }, [dispatch]);
  return (
    <>
    {loading && (
            <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg  flex items-center justify-center z-50">
              <Spinner size="size-50" />
            </div>
          )}
      {view && <View data={viewData} setView={setView} type="users" />}
      <div className="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users List</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Password
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Role
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Avatar
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="p-7 flex gap-4 justify-center items-center">
                  <i
                    class="fa-solid fa-eye fa-2xl text-green-300 cursor-pointer"
                    onClick={() => handleView(user)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
