import {useState} from 'react'
import Joi from 'joi'
import FormGroup from '../components/FormGroup/index'
const Signin = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
        
    })
    return ( 
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-1/3 px-8 py-6 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Log in your account</h3>
                    <form>
                        <div className="mt-4">
                            <label for="email">Email</label>
                            <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* <FormGroup fieldStyle='shortText' name='email' placeholder='Email'/> */}
                        </div>
                        <div className="mt-4">
                            <label for="password">Password</label>
                            <input type="text" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signin;