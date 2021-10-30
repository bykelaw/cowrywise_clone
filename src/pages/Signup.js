import Joi from 'joi'
import { useValidator } from "react-joi"

const Signup = () => {

    const { state, setData, setExplicitField, validate } = useValidator({

        initialData: {
            name: null,
            email: null,
            password: null,
        },

        schema: Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .required(),
    
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
            
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .min(6)
                .required(),
            
        }),
        explicitCheck: {
            name: false,
            email: false,
            password: false,
        },
    })

    const updateName = (e) => {
        e.persist()

        setData((old) => ({
            ...old,
            name: e.target.value,
        }))
    }

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
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-1/3 px-8 py-6  text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Create an account</h3>
                    <form onSubmit={handleSubmit} >
                        <div className=" mt-4">
                            <label for="name">Name</label>
                            <input type="text" placeholder="Name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={updateName}
                            />
                            <span style={{color:"red"}}>{state.$errors.name.map((data) => data.$message).join(",")}</span>
                        </div>
                        <div className="mt-4">
                            <label for="email">Email</label>
                            <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={updateEmail}
                            />
                            <span style={{color:"red"}}>{state.$errors.email.map((data) => data.$message).join(",")}</span>
                        </div>
                        <div className="mt-4">
                            <label for="password">Password</label>
                            <input type="text" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={updatePassword}
                            />
                            <span style={{color:"red"}}>{state.$errors.password.map((data) => data.$message).join(",")}</span>
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