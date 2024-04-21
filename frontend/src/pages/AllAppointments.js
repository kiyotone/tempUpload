import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";

const AllAppointments = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  const fetchAllAppointments = async () => {
    const fetchData = await fetch(SummaryApi.viewAppointment.url, {
      method: SummaryApi.viewAppointment.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllAppointments(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllAppointments();
    console.log(allAppointments);
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>User</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Date</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody className="">
          {allAppointments.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.userId.name}</td>
                <td>{el?.brand}</td>
                <td>{el?.model}</td>
                <td>{moment(el?.date).format("LL")}</td>
                {el.payment_status ? (
                  <td>
                    <div className="bg-green-600 text-white">PAYMENT DONE</div>
                  </td>
                ) : (
                  <td>
                    <div className="bg-red-700 text-white">PAYMENT PENDING</div>
                  </td>
                )}{" "}
                {/* <td>
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllAppointments}
        />
      )} */}
    </div>
  );
};

export default AllAppointments;
