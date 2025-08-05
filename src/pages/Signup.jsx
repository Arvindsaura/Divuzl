import React from 'react'
import { SignUp } from '@clerk/clerk-react'

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f9fc]">
      <div className="w-full max-w-[420px]">
        <SignUp />
      </div>
    </div>
  )
}

export default Signup
