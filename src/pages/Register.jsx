import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext, useState } from "react";
import { AuthContext } from './../providers/AuthProvider';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {createUser}=useContext(AuthContext);
  const navigate=useNavigate()
  const [error,setError]=useState('')

    const handleRegister=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password');
        // console.log(name,email,password)
        createUser( email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    updateProfile(user,{
      displayName:name
    })
    
    navigate('/login')
    // ...
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    console.log(errorMessage)
    setError('user already exist')
    // ..
  });
    }
    
    
  return (
    <div className="my-28 mx-auto container ">
      <form className="max-w-sm mx-auto border p-5 " onSubmit={handleRegister}>
        <div className="text-center flex flex-col">
          <h1 className="capitalize font-bold">please login first</h1>
          <img src={logo} alt="" className="w-24 mx-[130px] my-7" />
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
          name='name'
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="put your name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
          name='email'
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
          name='password'
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="put your password"
            required
          />
        </div>
        <div className="mb-2">

        {
          error && <p className="text-red-500">{error}</p>
        }
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <p className="mt-2 capitalize">
          already have an account ? please 
          <Link to="/login" className="text-blue-500 pl-2">
           Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
