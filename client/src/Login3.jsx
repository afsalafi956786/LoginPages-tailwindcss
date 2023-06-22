import React from 'react'
import treesImag from './assets/trees.jpg'

function Login3() {
  return (
    <div className='w-full h-screen flex '> 
       <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] sm:max-w-[900px]  shadow-lg shadow-gray-600'>
            <div className='hidden md:block w-full h-[550px]'>
                <img className='w-full h-full' src={treesImag} alt="/" />
            </div>
            <div className='flex flex-col justify-around p-4'> 
                <form  className=''>
                    <h2 className='text-4xl font-bold text-center mb-8'>BRAND</h2>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='usernaem' />
                        <input className='border p-2' type="password" placeholder='password'/>
                    </div>

                    <button className='w-full py-2 my-4 text-white bg-green-600 hover:bg-green-500'>Sign in</button>
                    <p className='text-center font-semibold'>Forgot username or password?</p>
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
       </div>
    </div>
  )
}

export default Login3
    // div creation for login page
{/* <div> //full width div
<div>// table div
     <div>//image div
         <img src="" alt="/" />
     </div>
     <div>  //right form div
         <form action="">

         </form>
     </div>
</div>
</div> */}