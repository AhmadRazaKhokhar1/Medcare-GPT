import React from 'react'
import {SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
export default function Authentication() {
  return (
    <header>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </header>
  )
}
