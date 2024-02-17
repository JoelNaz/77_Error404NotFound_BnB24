import { Suspense, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Toaster } from 'react-hot-toast';
import SpinnerCircular from './components/ui/SpinnerCircular';
import React from 'react';

const HomePage = React.lazy(()=>import ('./pages/Home/Home'))
const SignUp = React.lazy(()=>import ('./pages/Auth/SignUp'))
const SignIn = React.lazy(()=>import ('./pages/Auth/SignIn'))
const Report = React.lazy(()=>import ('./pages/Report/Report'))
const VolunDash = React.lazy(()=>import ('./pages/volunteerDash/VolunteerDash'))
const InvestDash = React.lazy(()=>import ('./pages/InvestDash/InvestigatorDash'))
const InvestSignin = React.lazy(()=>import ('./pages/Auth/SigninInvestigator'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signin-investigator",
    element: <InvestSignin/>,
  },
  {
    path: "/report",
    element: <Report/>,
  },
  {
    path:"/volun-dash",
    element: <VolunDash/>,
  },
  {
    path:"/invest-dash",
    element: <InvestDash/>,
  }
])
function App() {
  

  return (
    <Suspense fallback={<SpinnerCircular/>}>
       <RouterProvider router={router} />
       <Toaster />
      </Suspense>
  )
}

export default App
