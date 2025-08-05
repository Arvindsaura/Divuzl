import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f9fc]">
      <div className="w-full max-w-[420px]">
        <SignIn />
      </div>
    </div>
  )
}

export default Login
