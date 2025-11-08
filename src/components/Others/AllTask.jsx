import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
      <div className="bg-red-400 py-2 px-4 mb-2  flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium ">Employee</h2>
        <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium ">Failed</h5>
      </div>
      <div className="  ">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-emerald-500 border-2 py-2 px-4 mb-2  flex justify-between rounded"
            >
              <h2 className="w-1/5  text-lg font-medium ">{elem.firstname}</h2>
              <h3 className="w-1/5 text-lg font-medium  text-blue-400">
                {elem.taskNumber.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskNumber.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium  text-white">
                {elem.taskNumber.completed}
              </h5>
              <h5 className="w-1/5 font-medium text-lg text-red-400">
                {elem.taskNumber.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
