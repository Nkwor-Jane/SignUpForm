import React from 'react';
import {Formik, Form, Field} from 'formik';

function SignUp() {
  return (
    <div className='md:flex justify-evenly items-center p-8 h-screen w-screen text-white sm:block'>
        <div className='p-10'>
            <p className='text-5xl font-semibold py-4 tracking-wide sm:py-7 sm:text-center'>Learn to code by<br/> watching others</p>
            <p className='md:text-sm font-light sm:text-center sm:text-2xl sm:tracking-wide'>See how experienced developers solve problems in real-time.</p>
            <p className='md:text-sm font-light sm:text-center sm:text-2xl sm:tracking-wide'>Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.</p>
        </div>
        <div className='p-8'>
            <div>
                <button className='m-2 bg-[#6055a5] py-3 px-20 text-center text-xs rounded-lg shadow-md-[#6055a5] tracking-wider hover:bg-[#6e66a7] sm:text-2xl sm:py-6'><span className='font-bold'>Try it free 7 days</span> <span className='font-light'>then $20/mo. thereafter</span></button>
            </div>
            <div className='m-1'>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName:'',
                        email:'',
                        password:''
                    }}
                    onSubmit={(values) =>{
                        console.log(values)
                    }

                    }
                >
                <Form className='bg-white px-6 flex flex-col py-4 rounded-lg'>
                    <Field id="firstName" name="firstName" type="text" placeholder='First Name' className='m-2 p-2 rounded text-base text-black border border-slate-300 hover:border-[#3e3c49] sm:p-4' />
                    <Field id="lastName" name="lastName" type="text" placeholder='Last Name'  className='m-2 p-2 rounded text-base text-black border border-slate-300 hover:border-[#3e3c49] sm:p-4'/>
                    <Field id="email" name="email" type="email" placeholder='Email Address' className='m-2 p-2 rounded text-base text-black border border-slate-300 hover:border-[#3e3c49] sm:p-4'/>
                    <Field id="password" name="password" type="password" placeholder='Password' className='m-2 p-2 rounded text-base text-black border border-slate-300 hover:border-[#3e3c49] sm:p-4'/>
                    <button  type="submit" className='m-1 bg-[#38cc8c] p-2 text-center text-xs rounded shadow-md-[#38cc8c] tracking-wider font-bold hover:bg-[#4cc28f] sm:p-5 sm:text-base'>CLAIM YOUR FREE TRIAL</button>
                    <p className='text-[#b9b6d3] text-[0.5rem] p-0.5 text-center sm:text-xl sm:p-2'>By clicking the button, you are agreeing to our <span className='text-[#ff7a7a] cursor-pointer'>Terms and Services</span></p>
                </Form>
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default SignUp;