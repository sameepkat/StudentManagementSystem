import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TableFetch from "./tableFetch";

function Dashboard() {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 ">
      <nav className="border h-screen w-1/4 flex flex-col items-center shadow-2xl justify-around overflow-x-auto">
        <img
          src="/student.jpg"
          alt="Student Image"
          className="w-2xs rounded-full m-4 shadow-2xs shadow-blue-400"
        />
        <div className="flex flex-col items-center gap-3 w-full ">
          <button className="px-2 border rounded-xl p-3 w-[75%] text-white bg-[#ff6b6b] hover:bg-[#e81919] hover:scale-105 active:scale-95 cursor-pointer">
            Student Details
          </button>
          <button className="px-2 border rounded-xl p-3 w-[75%] text-white bg-[#ff6b6b] hover:bg-[#e81919] hover:scale-105 active:scale-95 cursor-pointer">
            1st sem
          </button>
          <button className="px-2 border rounded-xl p-3 w-[75%] text-white bg-[#ff6b6b] hover:bg-[#e81919] hover:scale-105 active:scale-95 cursor-pointer">
            2nd sem
          </button>
        </div>
        <button
          className="px-2 border rounded-xl p-3 w-[75%] text-white bg-[#ff6b6b] hover:bg-[#e81919] hover:scale-105 active:scale-95 cursor-pointer mt-3"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </nav>
      <main className="border  w-2/4 shadow-2xl flex-1">
        <QueryClientProvider client={queryClient}>
          <TableFetch />
        </QueryClientProvider>
      </main>
      <section className="border h-screen w-1/4 shadow-2xl"></section>
    </div>
  );
}

export default Dashboard;
