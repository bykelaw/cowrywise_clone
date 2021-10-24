const Signup = () => {
    return ( 
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-1/3 px-8 py-6  text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Create an account</h3>
                    <form>
                        <div className=" mt-4">
                            <label for="name">Name</label>
                            <input type="text" placeholder="Name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label for="email">Email</label>
                            <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label for="password">Password</label>
                            <input type="text" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
     );
}
 
export default Signup;