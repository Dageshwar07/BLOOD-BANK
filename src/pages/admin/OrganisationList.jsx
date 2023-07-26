import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/layout/Layout'
import moment from "moment";
import API from '../../services/API';
const OrganisationList = () => {
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.get("/admin/org-list");
            console.log(data);
            if (data?.success) {
                setData(data?.orgData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);

    //DELETE FUNCTION
    const handelDelete = async (id) => {
        try {
            let answer = window.prompt(
                "Are You SUre Want To Delete This Organisation",
                "Sure"
            );
            if (!answer) return;
            const { data } = await API.delete(`/admin/delete-donar/${id}`);
            alert(data?.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Layout>

                <div className="relative overflow-x-auto mt-16 ml-4 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((record) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={record._id}>
                                    <td className="px-6 py-4 ">{record.organisationName}</td>
                                    <td className="px-6 py-4 ">{record.email}</td>
                                    <td className="px-6 py-4 ">{record.phone}</td>
                                    <td className="px-6 py-4 ">{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                    <td className='px-6 py-4'>

                                        <button type='button' className='text-red-400' onClick={() => handelDelete(record._id)}>delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>)
}

export default OrganisationList