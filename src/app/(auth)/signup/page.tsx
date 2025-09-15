

const page = () => {
    
    return (
                <div className='bg-gray-100 min-h-screen flex items-center justify-center px-5'>
            <div className='w-full md:w-[60%] lg:w-[40%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5'>
                <h1 className='text-center text-red-950 font-semibold text-xl'>Create An Account</h1>
                <form className="space-y-3">
                    <div>
                        <label className='text-sm font-semibold text-red-900'>Email</label>
                        <div className="relative">
                            <input type="email" name='email' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Enter your email" required/>
                           
                        </div>
                    </div>
                    <div>
                        <label className='text-sm font-semibold text-red-900'>Phone Number</label>
                        <div className="relative">
                            <input type="number" name='phone' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Enter your phone number" required/>
                            
                        </div>
                    </div>
                    <div className="relative">
                        <label className='text-sm font-semibold text-red-900'>Password</label>
                        <div className="relative">
                            <input  name='password' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Create a password" required/>
                           
                        </div>
                        
                    </div>
                    <div className="relative">
                        <label className='text-sm font-semibold text-red-900'>Confirm Password</label>
                        <div className="relative">
                            <input  name='confirmPassword' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Confirm password" required/>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name='terms' className='mr-2 leading-tight' />
                        <label className='text-sm font-medium text-gray-500'>I agree to the Privacy Policy  and Terms of service </label>
                    </div>
                    <button type="submit" className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer">Sign Up</button>
                    <div className="flex items-center gap-2 text-sm justify-center">
                        <p>Already You Have Account?</p>
                        {/* <Link className="text-red-950 font-semibold" to={"/sign-in"}>Sign In Here</Link> */}
                    </div>
                </form>
            </div>
        </div>

    );
};

export default page;