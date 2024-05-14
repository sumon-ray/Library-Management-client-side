import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../UseAuth/UseAuth";

const Login = () => {
  const { loginWithGoogle, loginUser } = UseAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Get the email and password from the form fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call the loginUser function with the email and password
    loginUser(email, password)
      .then(() => {
        toast.success("login successfully");
        navigate("/");
      })
      .catch((error) => {
        // Handle login error
        setError(error)
      });
  };

  const handleClick = () => {
    loginWithGoogle().then(() => {
      // toast.success('Logged in successfully');
      navigate("/");
    });
  };

  return (
    <div>
      <header className="bg-gray-900 pattern">
        <div className="container  px-6 mx-auto">
          <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center"></nav>

          <div className="flex flex-col  items-center py-6  lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
                Brand
              </h2>

              <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                Hello <span className="text-blue-400">Guest</span>
              </h3>

              <p className="mt-4 text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non exercitationem
                quasi, maxime culpa ut nemo ab delectus saepe iste nostrum
                explicabo a?
              </p>
            </div>

            <div className="flex my-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                <div className="px-6 py-3 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
                    Sign In
                  </h2>

                  <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                    <h2 className="mb-3 text-3xl font-semibold text-center">
                      Login to your account
                    </h2>
                    <Link to='/register' className="flex gap-3 text-sm text-center dark:text-gray-600">
                      Don't have an account?
                      <a 
                        href="#"
                        rel="noopener noreferrer"
                        className="focus:underline underline text-blue-600 "
                      >
                         Sign up here
                      </a>
                    </Link>
                    <div className="my-6 space-y-4">
                      <button
                        onClick={handleClick}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                      </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                      <hr className="w-full dark:text-gray-600" />
                      <p className="px-3 dark:text-gray-600">OR</p>
                      <hr className="w-full dark:text-gray-600" />
                    </div>
                    <form noValidate="" action="" className="space-y-8">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">
                              Password
                            </label>
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="text-xs hover:underline dark:text-gray-600"
                            >
                              Forgot password?
                            </a>
                          </div>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                          />
                        </div>
                      </div>
                      {error && (
                        <span className="text-red-500">
                          does not match with registerd email or password
                        </span>
                      )}
                      <button
                        onClick={handleLogin} // Call handleLogin function on button click
                        type="button"
                        className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
