function LoginCard() {
  return (
    <>
      <div className="w-screen h-screen ">
        <button className="m-3 px-3 py-3 bg-green-500 text-white cursor-pointer hover:bg-green-700 rounded-sm">
          Dark Mode
        </button>
        <main className="flex flex-col justify-center items-center ">
          <div className="w-[400px] h-[30%] flex flex-col justify-center items-center border border-gray-200 rounded-md shadow-2xl">
            <img
              src="/login_PU_logo.png"
              className="p-10 "
              alt="Pokhara University"
            />
            <span className="text-blue-800 mb-4">Sign in to access SMS</span>
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder="Username"
              className="block border border-gray-400 px-3 py-2 my-2 w-3/4"
            />
            <input
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Password"
              className="block border border-gray-400 px-3 py-2 my-2 w-3/4"
            />
            <button className="py-2 px-5 bg-green-500 rounded-sm text-white my-2 cursor-pointer">
              Login
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginCard;
