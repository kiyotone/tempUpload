import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import AppointmentModal from "../components/AppointmentModal";
import ROLE from "../common/role";
import { useSelector } from "react-redux";

const AllAppointments = () => {
  const user = useSelector((state) => state?.user?.user);

  const [allAppointments, setAllAppointments] = useState([]);
  const [date, setdate] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState({});

  const handleDateSelector = (data) => {
    setSelectedApp(data);
    console.log(data);
    setOpenModal(true);
  };

  const fetchAllAppointments = async () => {
    const fetchData = await fetch(SummaryApi.viewAppointment.url, {
      method: SummaryApi.viewAppointment.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    console.log(dataResponse);

    if (dataResponse.success) {
      setAllAppointments(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllAppointments();
    console.log(user.role);
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
            {user.role == ROLE.MECHANIC && <th>Action</th>}
          </tr>
        </thead>
        <tbody className="">
          {allAppointments
            .filter((el) => el.payment_status !== "finalized")
            .map((el, index) => (
              <tr key={index}>
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
                )}
                {user.role == ROLE.MECHANIC && (
                  <td
                    onClick={() => handleDateSelector(el)}
                    className="text-black cursor-pointer"
                  >
                    Send Date
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>

      {openModal && (
        <AppointmentModal
          selectedApp={selectedApp}
          onClose={() => {
            fetchAllAppointments();
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default AllAppointments;
