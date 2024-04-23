import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SummaryApi from "../common";
import Context from "../context";
import ROLE from "../common/role";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helpers/uploadImage";

const Profile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to manage the edit modal visibility
  const [userData, setUserData] = useState({
    userId: user?._id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
    profilePic: user?.profilePic,
  });

  const { fetchUserDetails } = useContext(Context);

  const toggleEditModal = () => {
    setUserData({
      userId: user?._id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
    });
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadUser = async (e) => {
    const file = e.target.files[0];

    const uploadImageCloudinary = await uploadImage(file);

    console.log("uploadImageCloudinary", uploadImageCloudinary);

    setUserData((preve) => {
      return {
        ...preve,
        profilePic: uploadImageCloudinary.url,
      };
    });
  };

  const handleSubmit = async () => {
    const response = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const responseData = await response.json();
    console.log("responseData", responseData);
    fetchUserDetails();
  };

  const getAppointments = async () => {
    const response = await fetch(SummaryApi.viewAppointment.url, {
      method: SummaryApi.viewAppointment.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userId: user?._id }),
    });

    const responseData = await response.json();
    console.log("responseData", responseData);

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  useEffect(() => {
    if (user?._id) {
      getAppointments();
    }
  }, [user]);

  return (
    <div className=" mx-auto w-screen mt-8  ml-20">
      <div className="  flex  w-[60rem]  bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex flex flex-col mr-[10rem] ml-10">
          <div className="md:flex-shrink-0 ">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={user?.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Name
            </div>
            <p className="mt-2 text-gray-600">{user?.name}</p>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">
              Email
            </div>
            <p className="mt-2 text-gray-600">{user?.email}</p>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">
              Role
            </div>
            <p className="mt-2 text-gray-600">{user?.role}</p>
            <div className="mt-4">
              <button
                onClick={toggleEditModal}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-[30rem] pl-10 font-semibold text-md text-purple-600 items-center">
            APPOINTMENTS
          </div>
          {data?.map((appointment) => (
            <div className="p-4 border border-gray-200">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Date
              </div>
              <p className="text-gray-600">{appointment.date}</p>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-1">
                Brand
              </div>
              <p className="text-gray-600">{appointment.brand}</p>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-1">
                Model
              </div>
              <p className="text-gray-600">{appointment.model}</p>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-1">
                Description
              </div>
              <p className="text-gray-600 mb-5">{appointment.description}</p>
            </div>
          ))}
        </div>
      </div>
      {isEditing && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Edit Profile Content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-10">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Edit Profile
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-5 mx-10 ">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 mt-5 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name{" "}
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      value={userData?.name}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role{" "}
                    </label>
                    <select
                      className="border px-4 py-1"
                      value={userData?.role}
                      id="role"
                      name="role"
                      onChange={handleChange}
                    >
                      {Object.values(ROLE).map((el) => {
                        return (
                          <option value={el} key={el}>
                            {el}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-span-6 mt-7 mb-7 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={userData?.email}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <label htmlFor="productImage" className="mt-10">
                  Product Image :
                </label>
                <label htmlFor="uploadImageInput">
                  <div className="p-2 bg-slate-100 border rounded h-16  flex justify-center items-center cursor-pointer">
                    <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                      <span className="text-xl">
                        <FaCloudUploadAlt />
                      </span>
                      <p className="text-sm">Upload Product Image</p>
                      <input
                        type="file"
                        id="uploadImageInput"
                        className="hidden"
                        onChange={handleUploadUser}
                      />
                    </div>
                  </div>
                </label>
              </div>
              {/* Edit Profile Buttons */}

              <div className=" flex mt-8 justify-between mb-10">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Edit
                  </button>
                </div>
                {/* Close Button */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={toggleEditModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
