import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        }  min-h-screen`}
      >
        <button
          className="m-3 px-3 py-3 bg-green-500 text-white cursor-pointer hover:bg-green-700 rounded-sm transition-transform hover:scale-105 active:scale-95"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <main className="flex flex-col justify-center items-center min-h-screen w-full px-4">
          <div className="h-[80%] w-[80%] sm:w-[60%] lg:w-1/4 max-h-[90vh] overflow-auto flex flex-col justify-center items-center border-2 border-gray-300 rounded-md shadow-2xl p-6">
            <img
              src="/login_PU_logo.png"
              className="p-5 mt-5 scale-90 "
              alt="Pokhara University"
            />
            <span
              className={`${darkMode ? "text-sky-200 " : "text-blue-800"}
              m-4 m`}
            >
              Sign in to access SMS
            </span>
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder="Username"
              className="block border border-gray-400 px-3 py-2 my-2 w-3/4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Password"
              className="block border border-gray-400 px-3 py-2 my-2 w-3/4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="relative block py-2 px-5 bg-green-500 hover:bg-green-700 rounded-md text-white my-2 cursor-pointer transition-transform hover:scale-105 active:scale-95 mt-8 mb-3"
              onClick={() => navigate("/dashboard")}
            >
              Login
            </button>
          </div>
        </main>
        <div>
          <button className="p-3 bg-green-500 hover:bg-green-700 text-white cursor-pointer transition-transform rounded-md hover:scale-105 active:scale-95 m-2">
            English
          </button>
          <button className="p-3 bg-green-500 hover:bg-green-700 text-white cursor-pointer transition-transform rounded-md hover:scale-105 active:scale-95 m-2">
            नेपाली
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
