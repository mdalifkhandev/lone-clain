

const page = () => {
    
    return (
         <div className="bg-gray-100 min-h-screen flex items-center justify-center px-5">
      <div className="w-full md:w-[60%] lg:w-[40%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5">
        <h1 className="text-center text-red-950 font-semibold text-xl">
          Welcome Back
        </h1>
        <form /*onSubmit={handleSignIn}*/ className="space-y-3">
          <div>
            <label className="text-sm font-semibold text-red-900">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium"
                placeholder="Enter your email"
              />
              
            </div>
          </div>
          <div className="relative">
            <label className="text-sm font-semibold text-red-900">
              Password
            </label>
            <div className="relative">
              <input
                
                name="password"
                className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium"
                placeholder="Enter your password"
              />
             
            </div>
            <p
             
              className="absolute right-2 top-[32px] cursor-pointer"
            >
              
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                className="mr-2 leading-tight"
              />
              <label className="text-sm font-medium text-gray-500">
                Remember me
              </label>
            </div>
            
          </div>
          <button
            type="submit"
            className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer"
          >
            Sign In
          </button>
          <div className="flex items-center gap-2 text-sm justify-center">
            <p>New To our Platform?</p>
            
          </div>
        </form>
      </div>
    </div>
    );
};

export default page;