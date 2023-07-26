import React from 'react'
import Form1 from '../../components/shared/form/Form1'
import { useSelector } from 'react-redux'
import Spinner from '../../components/shared/Spinner'
import { toast } from 'react-toastify'

const Login = () => {
    const { loading, error } = useSelector(state => state.auth)
    return (
        <>


            {error && <span>{alert(error)}</span>}

            {loading ? (<></>) : (
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">


                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-heart w-8 h-8 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18.288 11.282a6.734 6.734 0 0 0 -.224 -.405l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.117 7.117 0 0 0 3.824 1.548" />
                                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                            </svg>
                            Blood Bank
                        </a>

                        <Form1 formTitle={'Sign in to your account'} submitBtn={'Login'} formType={'login'} />

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">



                            </div>
                        </div>
                    </div>
                </section>


            )
            }

        </>





    )
}

export default Login