import React from 'react'
import Sidebar from '../components/sidebar'
import DashboardHeader from '../components/DashboardHeader'
import RegistratonForm from "../components/RegistrationForm"


 const Register = () => {
  return <>
   <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
        <RegistratonForm />
      </main>
    </div>
  </>
    
  
}

export default Register;
