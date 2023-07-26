
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../services/API";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Layout from "../components/shared/layout/Layout";
import Spinner from "../components/shared/Spinner";
import Model from "../components/shared/model/Model";

export default function IndexPage() {

    const { loading, error, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    //get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/inventory/get-inventory");
            if (data?.success) {
                setData(data?.inventory);
                // console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
    }, []);

    return (
        <>


            <Layout>
                {user?.role === "admin" && navigate("/admin")}
                {error && <span>{alert(error)}</span>}
                {loading ? (<></>) : (<>

                    <Model />

                    <div className="relative overflow-x-auto mt-16 ml-4 shadow-md sm:rounded-lg">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Blood Group</th>
                                    <th scope="col" className="px-6 py-3">Inventory Type</th>
                                    <th scope="col" className="px-6 py-3">Quantity</th>
                                    <th scope="col" className="px-6 py-3">Donar Email</th>
                                    <th scope="col" className="px-6 py-3">TIme & Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((record) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={record._id}>
                                        <td scope="row" className="px-6 py-4">{record.bloodGroup}</td>
                                        <td scope="row" className="px-6 py-4">{record.inventoryType}</td>
                                        <td scope="row" className="px-6 py-4 "> {record.quantity} (ML)</td>
                                        <td scope="row" className="px-6 py-4 ">{record.email}</td>
                                        <td scope="row" className="px-6 py-4">
                                            {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
                )
                }

            </Layout>

        </>
    )
}









