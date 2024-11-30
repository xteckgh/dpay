import React from 'react'
import PaymentForm from "../components/PaymentForm"
import Sidebar from '../components/sidebar'
import DashboardHeader from '../components/DashboardHeader'


const page = () => {
  return <>
    <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
      <PaymentForm />
      
      </main>
    </div>
    </>
}

export default page
