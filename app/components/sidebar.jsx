import { FaWallet, FaUserFriends, FaRegListAlt, FaCog } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="bg-blue-800 text-white h-screen w-60 p-5">
      <div className="flex items-center mt-10 mb-8">
        <Image
          width={40}
          height={40}
          src={Logo}
          alt="Logo"
        />
        <div className="text-3xl font-bold">Tally</div>

      </div >
      <div className=" text-xl mb-8 font-bold" >
        <h2>Manage</h2>
      </div>
      <nav>
        <ul className="space-y-2">

          <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/dashboard">
              <FaWallet />
              <span className="p-3">Dashboard</span>
            </Link>
          </li>

          <li className="flex items-center space-x-3  cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/pay">
              <FaRegListAlt />
              <span className="p-3">Pay Dues</span>
            </Link>
          </li>
          <li className="flex items-center space-x-3  cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/cryptopay">
              <FaRegListAlt />
              <span className="p-3">Pay in Crypto</span>
            </Link>
          </li>
          <li className="flex items-center space-x-3  cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/transactions">
              <FaRegListAlt />
              <span className="p-3">Transactions</span>
            </Link>
          </li>

          <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/Register">
              <FaUserFriends />
              <span className="p-3">Manual Registration</span>
            </Link>

          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-400">
            <Link className="flex items-center " href="/Settings">
              <FaCog />
              <span className="p-3">Settings</span>
            </Link>
          </li>
        </ul>


      </nav>
      <div className="flex items-start justify-start absolute bottom-10 text-sm">
        <Link href="/login">


          <button className="flex text-white px-8 py-4 rounded hover:bg-blue-600 transition duration-200" aria-label="Logout">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>

            Logout
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
