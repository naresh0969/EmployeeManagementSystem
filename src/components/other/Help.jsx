import React from 'react'

const Help = ({ onBack }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 rounded-xl border-emerald-600 p-10 w-[90%] max-w-xl shadow-md bg-black">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6 text-center">Help Center</h1>
        <hr className="mb-6 border-emerald-300" />

        <div className="space-y-4 text-gray-700 text-base font-medium">
          <p>
            <span className="font-semibold text-emerald-700">Password:</span> <span className="text-white">123</span> <br />
            <span className="text-sm text-gray-500">(*Same password for all accounts)</span>
          </p>

          <p>
            <span className="font-semibold text-emerald-700 underline">Admin Dashboard</span><br />
            Email: <span className="text-white">admin@me.com</span>
          </p>

          <div>
            <span className="font-semibold text-emerald-700 underline">Employee Dashboard</span><br />
            <ul className="list-disc ml-6 text-black">
              <li>e@e.com</li>
              <li>employee2@example.com</li>
              <li>employee3@example.com</li>
              <li>employee4@example.com</li>
              <li>employee5@example.com</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 pt-4 italic">
            *This site is currently in development. Thanks for understanding!
          </p>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full w-full font-semibold"
          >
            Back to Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Help
