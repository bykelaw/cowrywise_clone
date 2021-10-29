import Joi from 'joi'
import { useValidator } from "react-joi"

const Signin = () => {
    
    const { state, setData, setExplicitField, validate } = useValidator({

        initialData: {
            email: null,
            password: null,
        },

        schema: Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required()
                .messages({
                    'string.base': `Email is a required field`,
                    'string.empty': `Email cannot be an empty field`,
                    'string.email': `Email must be valid`,
                    'any.required': `Email is a required field`
                }),
            
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .min(6)
                .required()
                .messages({
                    'string.base': `Password is a required field`,
                    'string.pattern.base': `Password must contain Uppercase, Lowercase, a number and a special character`,
                    'string.empty': `Password cannot be an empty field`,
                    'string.min': `Password should have a minimum length of {#limit}`,
                    'any.required': `Password is a required field`
                  }),
            
        }),
        explicitCheck: {
            email: false,
            password: false,
        },
    })

    const updateEmail = (e) => {
        e.persist()

        setData((old) => ({
            ...old,
            email: e.target.value,
        }))
    }

    const updatePassword = (e) => {
        e.persist()

        setData((old) => ({
            ...old,
            password: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
       validate()
       event.preventDefault()
    }
    return ( 
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-1/3 px-8 py-6 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Log in your account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label for="email">Email</label>
                            <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={updateEmail}
                            onBlur={() => setExplicitField("email", true)}
                            />
                            <span style={{color:"red"}}>{state.$errors.email.map((data) => data.$message).join(",")}</span>
                        </div>
                        <div className="mt-4">
                            <label for="password">Password</label>
                            <input type="text" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={updatePassword}
                            onBlur={() => setExplicitField("password", true)}
                            />
                             <span style={{color:"red"}}>{state.$errors.password.map((data) => data.$message).join(",")}</span>
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