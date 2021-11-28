import Joi from 'joi'

import FormGroup from '../components/FormGroup/index'

import { useValidator } from "react-joi"


const SignUp = () => {

  const { state, setData, setExplicitField, validate } = useValidator({

    initialData: {
      name:null,
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

      name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]'))
        .min(6)
        .required()
        .messages({
          'string.base': `Name is a required field`,
          'string.empty': `Name cannot be an empty field`,
          'string.min': `Name should have a minimum length of {#limit}`,
          'any.required': `Name is a required field`
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

  const updateName = (e) => {
    e.persist()

    setData((old) => ({
      ...old,
      name: e.target.value,
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
    <>


      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>

            <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>

              <div className="mt-4">
                <label htmlFor="email" className="sr-only">Full Name</label>
                <input type="text" placeholder="Full Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 rounded-b-md"
                  onChange={ updateName }
                  onBlur={ () => setExplicitField("name", true) }
                />
                <span style={ { color: "red" } }>{ state.$errors.name.map((data) => data.$message).join(",") }</span>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="text" placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 rounded-b-md"
                  onChange={ updateEmail }
                  onBlur={ () => setExplicitField("email", true) }
                />
                <span style={ { color: "red" } }>{ state.$errors.email.map((data) => data.$message).join(",") }</span>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={ updatePassword }
                  onBlur={ () => setExplicitField("password", true) }
                />
                <span style={ { color: "red" } }>{ state.$errors.password.map((data) => data.$message).join(",") }</span>
              </div>

              <div className="flex items-center justify-between">
              

               
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                  </span>
                  Sign Up
                </button>
              </div>


            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
