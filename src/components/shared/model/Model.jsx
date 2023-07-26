import React, { useState } from "react";
import { useSelector } from "react-redux";
import API from "./../../../services/API";
import Layout from "../layout/Layout";

const Model = () => {
  const [showModal, setShowModal] = useState(false);
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);


  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please Provide All Fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        email: user?.email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        alert("New Record Created");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };


  return (
    <>
      <div className="flex justify-center hover:text-blue-500 focus:text-blue-700 ">

        <div className="ml-6 mt-4 ">
          <button onClick={() => setShowModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M12 11l0 6"></path>
              <path d="M9 14l6 0"></path>
            </svg>
          </button>
        </div>
        <div className="ml-6 mt-4">
          <button type="button" onClick={() => setShowModal(true)} className="font-normal rounded   text-sm">Add Inventory</button>

          {showModal ? (<>

            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className=" relative w-full max-w-md max-h-full">
                {/*content*/}
                <div className="md,lg:border-0 rounded-lg  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <button
                    onClick={() => setShowModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span className="sr-only font-normal rounde">Close modal</span>
                  </button>
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-normal rounded  text-blue-500 ">
                      Inventory Modal
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                      </span>
                    </button>
                  </div>


                  {/*body*/}

                  <div className="relative w-full max-w-md max-h-full">

                    <div classname="relative p-6 flex-auto">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">



                        <div className="px-6 py-6 lg:px-8">

                          <form className="space-y-6" action="#">

                            <div className="flex">
                              <div className="flex items-center mr-4">
                                <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Type :</label>

                                <input id="inline-radio" type="radio"
                                  name="inRadio"
                                  defaultChecked
                                  value={"in"}
                                  onChange={(e) => setInventoryType(e.target.value)} className="ml-4 w-4 h-4 text-blue-500 " />

                                <label for="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-4 mr-4">IN</label>

                              </div>
                              <div className="flex items-center mr-4">

                                <input id="inline-2-radio" type="radio" name="inRadio"
                                  value={"out"}
                                  onChange={(e) => setInventoryType(e.target.value)} className="w-4 h-4 text-blue-500" />

                                <label for="inline-radio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-4 mr-4">OUT</label>

                              </div>

                            </div>



                            <select id="default" onChange={(e) => setBloodGroup(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected>Open this select menu</option>
                              <option value="O+">O+</option>
                              <option value="O-">O-</option>
                              <option value="AB+">AB+</option>
                              <option value="AB-">AB-</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                              <option value="B+">B+</option>
                              <option value="B-">B-</option>
                            </select>
                            <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
                              <input type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                              <input onChange={(e) => setQuantity(e.target.value)} type="number" name="password" id="password" placeholder="5 ml" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-start">


                              </div>

                            </div>


                          </form>
                        </div>
                      </div>


                    </div>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-700 text-white active:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleModalSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>


          </>) : null}



        </div>

      </div>


    </>
  )
}

export default Model