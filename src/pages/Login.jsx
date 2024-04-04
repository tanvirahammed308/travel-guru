import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
  const {createSignIn}=useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()
  
  const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value; 
    const password=e.target.password.value;
    console.log(password,email) 
    createSignIn( email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate(location ?.state ? location.state : '/')
    // ...
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  };
  
  return (
    <div className="my-28 mx-auto container ">
         
        

<form className="max-w-sm mx-auto border p-5 " onSubmit={handleLogin}>
<div className='text-center flex flex-col'>
<h1 className='capitalize font-bold'>please login first</h1>
        <img src={logo} alt="" className='w-24 mx-[130px] my-7'/>
        
    </div>
   
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='put your password' required />
  </div>
   
  
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  <p className='mt-2 capitalize'>Are you new ? please <Link to='/register' className='text-blue-500'>Register</Link></p>
</form>

    </div>
  )
}

export default Login