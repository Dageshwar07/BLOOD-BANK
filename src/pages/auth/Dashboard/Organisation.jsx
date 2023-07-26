import React, { useEffect, useState } from 'react'
import Layout from '../../../components/shared/layout/Layout'
import moment from 'moment'
import { useSelector } from 'react-redux'
import API from '../../../services/API'

const Organisation = () => {
    // get current user
    // get current user
    const { user, error, loading } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find org records
    const getOrg = async () => {
        try {
            if (user?.role === "donar") {
                const { data } = await API.get("/inventory/get-orgnaisation");
                //   console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
            }
            if (user?.role === "hospital") {
                const { data } = await API.get(
                    "/inventory/get-orgnaisation-for-hospital"
                );
                //   console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrg();
    }, [user]);


    return (
        <>
            <Layout>
                {error && <span>{alert(error)}</span>}
                {loading ? (<>
                </>) : (<>

                    <div className="relative overflow-x-auto mt-16 ml-4 shadow-md sm:rounded-lg">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Phone</th>
                                    <th scope="col" className="px-6 py-3">Address</th>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((record) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={record._id}>
                                        <td scope="row" className="px-6 py-4">{record.organisationsName}</td>
                                        <td scope="row" className="px-6 py-4">{record.email}</td>
                                        <td scope="row" className="px-6 py-4 "> {record.phone} (ML)</td>
                                        <td scope="row" className="px-6 py-4 ">{record.address}</td>
                                        <td scope="row" className="px-6 py-4">
                                            {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </>
                )}


            </Layout>



        </>)
}

export default Organisation