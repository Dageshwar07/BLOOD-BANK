import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from 'react-redux';
import Layout from "../../components/shared/layout/Layout";
import API from "../../services/API";
const Donation = () => {
    const { user, error, loading } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.post("/inventory/get-inventory-hospital", {
                filters: {
                    inventoryType: "in",
                    donar: user?._id,
                },
            });
            if (data?.success) {
                setData(data?.inventory);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);


    return (
        <Layout>
            {error && <span>{alert(error)}</span>}
            {loading ? (<></>) : (<>

                <div className="relative overflow-x-auto mt-16 ml-4 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Blood Group</th>
                                <th scope="col" className="px-6 py-3">Inventory TYpe</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((record) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={record._id}>
                                    <td className="px-6 py-4 ">{record.bloodGroup}</td>
                                    <td className="px-6 py-4 ">{record.inventoryType}</td>
                                    <td className="px-6 py-4 ">{record.quantity}</td>
                                    <td className="px-6 py-4 ">{record.email}</td>
                                    <td className="px-6 py-4 ">{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>)}
        </Layout>
    );
};

export default Donation