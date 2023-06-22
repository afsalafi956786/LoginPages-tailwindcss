import loginImg from './assets/login.jpg'


function Login() {


  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  w-full">
  {/* image */}
  <div className='hidden sm:block'>
      <img className='w-full h-full object-cover' src={loginImg} alt="" />
  </div>


  <div className='bg-gray-100 flex justify-center flex-col  '>
       {/* login form */}
    <form className='max-w-[400px] mx-auto w-full bg-white p-4'>
      <h2 className='text-4xl font-bold text-center py-6'>BRAND</h2>
      <div className='flex flex-col p-2'>
        <label >Username</label>
        <input className='border p-2' type="text" />
      </div>
      <div className='flex flex-col p-2'>
        <label >password</label>
        <input className='border p-2' type="password" />
      </div>
      <button className='border w-full my-5 py-2 bg-indigo-600 text-white hover:bg-indigo-500'>Sign In</button>
      <div className='flex justify-between'>
        <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
        <p>Create an account</p>
      </div>
    </form>
    {/* login form */}

  </div>
 
 </div>
  )
}

export default Login
