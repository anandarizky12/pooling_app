import React from 'react'
import router from 'next/router'
import { route } from 'next/dist/server/router'
import { WarningAlert } from '../components/alert/WarningAlert'

function login() {

    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
    })};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.email === '' && state.password === '') {
            WarningAlert('Email dan password harus diisi')
        } else if (state.email === '') {
            WarningAlert('Email harus diisi')
        } else if (state.password === '') {
            WarningAlert('Password harus diisi')
        } else {
            router.push('/')
        }
    }



    return (
        <div className="flex w-screen h-screen">
            <div className="ml-36 mt-24 w-full">
                <div className="">
                    <p className="text-2xl text-gray-600">Selamat Datang</p>
                    <p className= "text-4xl font-bold text-blue-900">Sahabat Data!</p>
                </div>
                <form className="mt-10">
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Email <span className="text-red-600">*</span></label>
                        <input required name="email" onChange={(e)=>{handleInput(e)}} type="email" className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Password <span  className="text-red-600">*</span></label>
                        <input required name="password" onChange={(e)=>handleInput(e)} type="password" className="text-gray-600 p-5 my-2 border h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="my-8 flex justify-between  w-10/12">
                        <button className="bg-blue-900 p-2 w-32 rounded-3xl text-white">Login</button>
                        <p className="text-gray-500">Lupa Password?</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Belum punya akun?
                        <span onClick={()=>{router.push('/register')}} className="text-gray-600 font-medium cursor-pointer"> Klik Untuk Daftar</span></p>
                    </div>
                </form>
            </div>
            <div className="w-full bg-gray-100 bg-bps_login bg-center bg-cover"></div>
       
        </div>
    )
}

export default login