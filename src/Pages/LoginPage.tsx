import laptop from '../../public/Images/macbook.svg'
import logo from '../../public/Images/logo-2.png';
import languages from '../../public/Images/languages.svg';
import down from '../../public/Images/chevron-down.svg'


const LoginPage = () => {
  return (
    <section className="grid grid-cols-7 w-full h-[100vh]">
        <div className='bg-slate-100 col-start-1 col-end-5 h-full flex justify-center items-center'>
            <img src={laptop} className='relative'/>
            {/* <img src={display} alt="" className='absolute top-0'/> */}
        </div>
        <div className='bg-white flex flex-col w-[448px] px-[20px] ml-[45px] justify-center'>
            <img src={logo} alt="Logo" className="w-[140px] h-[41px] mb-2"/>
            <div>
                <h3 className='text-2xl font-semibold'>Welcome to PROCG-POC Project</h3>
                <p className='text-slate-500'>Please enter your credentials to access your account.</p>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <div className='flex flex-col gap-1'>
                    <label className='text-slate-500'>Email Address</label>
                    <input type="text" placeholder='Enter email address' className='text-slate-500 pl-4 w-full h-8 border-2 border-slate-500 rounded-md outline-none' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-slate-500'>Password</label>
                    <input type="text" placeholder='Enter password' className='text-slate-500 pl-4 w-full h-8 border-2 border-slate-500 rounded-md outline-none' />
                </div>
            </div>
            <div className='flex justify-between mt-1'>
                <div className='flex gap-5'>
                    <input type="checkbox" />
                    <p>Remeber Me</p>
                </div>
                <p className='text-blue-700'>Forget Password?</p>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <button className='h-8 w-full bg-red-500 rounded-md text-white'>Login</button>
                <div className='flex justify-between items-center'>
                    <div className='w-[183px] h-[1px] bg-slate-500'></div>
                    <p>OR</p>
                    <div className='w-[183px] h-[1px] bg-slate-500'></div>
                </div>
                <button className='h-8 w-full bg-slate-600 rounded-md text-white'>Continue with SSO</button>
            </div>
            <div className='bg-slate-100 p-2 mt-2 rounded-md'>
                By clicking Continue, you agree to our Terms of Service and Privacy Policy.
            </div>
            <div className='flex gap-3 mt-1 w-full justify-center'>
                <img src={languages} alt="language" />
                <p>English</p>
                <img src={down} alt="down" />
            </div>
        </div>
      
    </section>
  )
}

export default LoginPage
