
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
        <h2 className="flex items-start justify-start pt-4 pb-10 text-2xl"> Pay your departmental dues semlessly  </h2>
        <TransactionTable />
      </main>
    </div>
  );
};

export default Dashboard;
