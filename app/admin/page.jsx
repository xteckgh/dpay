
import Sidebar from "../components/sidebar";
import DashboardHeader from "../components/DashboardHeader";
import CardStats from "../components/CardStats";
import TransactionTable from "../components/TransactionTable";
import { FaUserFriends, FaWallet, FaRegListAlt } from "react-icons/fa";

const Dashboard = () => {

  const active = {
    backgroundColor: "blue"
  }

  return (
    <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
        <div className="flex  space-x-4 justify-between  mt-5 cursor-pointer">
          <CardStats 
            icon={<FaWallet  />}
            title="Total Balance"
            value="GHS 3140.74"
            color={active}
          />
          <CardStats 
            icon={<FaUserFriends />}
            title="Total Students"
            value="42"
          />
          <CardStats 
            icon={<FaRegListAlt />}
            title="Manual Registrations"
            value="200"
          />
          <CardStats 
            icon={<FaWallet />}
            title="Paid Students"
            value="429"
          />
        </div>
        <TransactionTable />
      </main>
    </div>
  );
};

export default Dashboard;
