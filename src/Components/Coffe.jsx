import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffe = ({ coffe, setcoffes, coffes }) => {
  const { name, _id, chef } = coffe;
  console.log(coffe);
  const handelCoffeDeleteBtn = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Good Luck !!!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`https://coffe-store-server-cyan.vercel.app/addcoffe/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newCoffes = coffes.filter((coffe) => coffe._id !== id);
              setcoffes(newCoffes);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="bg-[#F5F4F1] flex justify-around items-center w-[550px] py-3 mt-8 rounded-lg">
        <img src="/11 1.png" alt="" className="w-[180px]" />
        <div className="text-xl font-raleway space-y-3">
          <p className="text-[#5C5B5B]">
            <span className="font-semibold text-[#1B1A1A]">Name:</span> {name}
          </p>
          <p className="text-[#5C5B5B]">
            <span className="font-semibold text-[#1B1A1A]">Chef:</span> {chef}
          </p>
          <p className="text-[#5C5B5B]">
            <span className="font-semibold text-[#1B1A1A]">Price:</span> 890
            Taka
          </p>
        </div>
        <div className="space-y-3">
          <div className="p-2 bg-[#D2B48C] rounded-lg">
            <Link to={`/addcoffe/${_id}`}>
              <IoMdEye className=" text-xl text-white"></IoMdEye>
            </Link>
          </div>
          <div className="p-2 bg-[#3C393B] rounded-lg">
            {" "}
            <Link to={`/updatecoffe/${_id}`}>
              <MdEdit className=" text-xl text-white"></MdEdit>
            </Link>
          </div>
          <div className="p-2 bg-[#EA4744] rounded-lg">
            <MdDelete
              onClick={() => handelCoffeDeleteBtn(_id)}
              className="text-xl  text-white"
            ></MdDelete>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffe;
