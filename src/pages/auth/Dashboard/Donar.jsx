import Layout from '../../../components/shared/layout/Layout'
import React, { useEffect, useState } from "react";
import moment from "moment";
import API from '../../../services/API';
import Model from '../../../components/shared/model/Model';
import { useSelector } from 'react-redux';
const Donar = () => {
    const [data, setData] = useState([]);
    const { loading, error } = useSelector((state) => state.auth);

    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.get("/inventory/get-donars");
            //   console.log(data);
            if (data?.success) {
                setData(data?.donars);
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
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((record) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={record._id}>
                                    <td className="px-6 py-4 ">{record.name || record.organisationName + " (ORG)"}</td>
                                    <td className="px-6 py-4 ">{record.email}</td>
                                    <td className="px-6 py-4 ">{record.phone}</td>
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

export default Donar