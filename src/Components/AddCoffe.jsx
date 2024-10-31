import axios from "axios";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffe = () => {
  const handelCoffeAddBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addNewCoffe = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(addNewCoffe);

    axios
      .post("https://coffe-store-server-cyan.vercel.app/addcoffe", addNewCoffe)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Added  Coffe !!!",
            text: "New Coffe Added Successful",
            icon: "success",
          });
          form.reset();
        }
      });

    // fetch('https://coffe-store-server-cyan.vercel.app/addcoffe', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(addNewCoffe)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         Swal.fire({
    //             title: "Good Luck !!!",
    //             text: "New Coffe Added Successful",
    //             icon: "success"
    //         });
    //         form.reset()
    //     })
  };
  return (
    <section className="max-w-[1170px] mx-auto  my-8">
      <Link
        className="font-rachno flex gap-3 text-3xl items-center text-[#374151]"
        to="/"
      >
        <FaArrowLeft></FaArrowLeft> Back To Home
      </Link>
      <div className="p-6  bg-[#F4F3F0] mt-5">
        <form
          onSubmit={handelCoffeAddBtn}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="py-5 px-10">
            <div className="text-center">
              <p className="font-rachno text-5xl text-[#374151]">
                Add New Coffe
              </p>
              <p className="text-xs font-raleway max-w-[700px] mx-auto">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-5 font-raleway">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-semibold">
                  Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="name"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-xl font-semibold">
                  Chef
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="chef"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-semibold">
                  Supplier
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="supplier"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-xl font-semibold">
                  Taste
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="taste"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-semibold">
                  Category
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="category"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-xl font-semibold">
                  Details
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="details"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div> */}
              <div className="col-span-full">
                <label htmlFor="address" className="text-xl font-semibold">
                  Photo
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter photo URL"
                  className="w-full h-12   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  name="photo"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div> */}
              <div className="col-span-full mt-3">
                <input
                  id="address"
                  type="submit"
                  value="Add Cofffe"
                  className="w-full text-2xl font-rachno h-12 btn bg-[#D2B48C] border-2 border-[#331A15]"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default AddCoffe;
