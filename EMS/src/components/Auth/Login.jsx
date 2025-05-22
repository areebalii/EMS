import { useState } from "react";

function Login({ handleLogin }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("")
    setPassword("")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="border-2 border-red-600 rounded-lg p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">Login</h1>
        <form onSubmit={submitHandler} className="flex flex-col space-y-4 w-64">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-500 text-black"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-500 text-black"
            placeholder="Password"
            required
          />
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Log in
          </button>
          <p className="text-sm text-center text-gray-600 mt-2">
            Don't have an account? <a href="#" className="text-red-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;