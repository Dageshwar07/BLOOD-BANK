import React, { useState } from 'react'
import InputType from './InputType'
import { Link } from 'react-router-dom'
import { handleLogin, handleRegister } from '../../../services/authService'

const Form1 = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");


    return (
        <>
            <div className="flex flex-wrap mb-5">

                <div className="flex items-center mr-4">
                    <input id="donarRadio" type="radio" defaultValue name="role" defaultChecked value={'donar'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Donar</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="AdminRadio" type="radio" defaultValue name="role" value={'admin'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="HospitalRadio" type="radio" defaultValue name="role" value={'hospital'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="OrganizationRadio" type="radio" defaultValue name="role" value={'organisation'} onChange={(e) => setRole(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organisation</label>
                </div>

            </div>


            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">



                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {formTitle}
                    </h1>

                    <form onSubmit={(e) => {
                        if (formType === 'login')
                            return handleLogin(e, email, password, role)
                        else if (formType === 'register') return handleRegister(e,
                            name,
                            role,
                            email,
                            password,
                            phone,
                            organisationName,
                            address,
                            hospitalName,
                            website)
                    }}
                        className="space-y-4 md:space-y-6" action="#">
                        {/* switch statement */}
                        {(() => {
                            switch (true) {
                                case formType === "login": {
                                    return (
                                        <>
                                            <InputType
                                                labelText={"email"}
                                                labelFor={"forEmail"}
                                                inputType={"email"}
                                                name={"email"}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <InputType
                                                labelText={"Password"}
                                                labelFor={"forPassword"}
                                                inputType={"password"}
                                                name={"password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </>
                                    );
                                }
                                case formType === "register": {
                                    return (
                                        <>
                                            {(role === "admin" || role === "donar") && (
                                                <InputType
                                                    labelText={"Name"}
                                                    labelFor={"forName"}
                                                    inputType={"text"}
                                                    name={"name"}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            )}
                                            {role === "organisation" && (
                                                <InputType
                                                    labelText={"Organisation Name"}
                                                    labelFor={"fororganisationName"}
                                                    inputType={"text"}
                                                    name={"organisationName"}
                                                    value={organisationName}
                                                    onChange={(e) => setOrganisationName(e.target.value)}
                                                />
                                            )}
                                            {role === "hospital" && (
                                                <InputType
                                                    labelText={"Hospital Name"}
                                                    labelFor={"forHospitalName"}
                                                    inputType={"text"}
                                                    name={"hospitalName"}
                                                    value={hospitalName}
                                                    onChange={(e) => setHospitalName(e.target.value)}
                                                />
                                            )}

                                            <InputType
                                                labelText={"email"}
                                                labelFor={"forEmail"}
                                                inputType={"email"}
                                                name={"email"}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <InputType
                                                labelText={"Password"}
                                                labelFor={"forPassword"}
                                                inputType={"password"}
                                                name={"password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <InputType
                                                labelText={"website"}
                                                labelFor={"forWebsite"}
                                                inputType={"text"}
                                                name={"website"}
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                            />
                                            <InputType
                                                labelText={"Address"}
                                                labelFor={"forAddress"}
                                                inputType={"text"}
                                                name={"address"}
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            <InputType
                                                labelText={"Phone"}
                                                labelFor={"forPhone"}
                                                inputType={"text"}
                                                name={"phone"}
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </>
                                    );
                                }
                            }
                        })()}


                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" requiblue />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>



                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{submitBtn}</button>

                        {formType === "login" ? (


                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        ) : (
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account yet? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>
                        )}
                    </form>
                </div>
            </div>

        </>)
}

export default Form1