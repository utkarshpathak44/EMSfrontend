import {
  Search,
  SlidersHorizontal,
  FileText,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";

const employee = {
  name: "Grant Douglas Ward",
  role: "Field Agent",
  email: "grant.ward@shield.gov",
  status: "Compromized",
  joinedDate: "May 4, 2010",
  leaves: {
    total: 30,
    used: 25,
    remaining: 5,
  },
  leaveDetails: [
    {
      id: "a64c2d33-d8f7-4c5f-b2f3-60fca325ad23",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-04-17",
      end_date: "2025-04-19",
      leave_apply_date: "2025-04-06",
      is_approved: true,
      reason: "Internet issues",
      source: "wfh",
    },
    {
      id: "f45d3a12-ecc3-4b7a-8721-d1c4e3a1981c",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-03-10",
      end_date: "2025-03-12",
      leave_apply_date: "2025-03-01",
      is_approved: false,
      reason: "Personal matters",
      source: "on-site",
    },
    {
      id: "c31a90b4-8e4b-4fae-9d5f-3fbf7f07c2a5",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-02-01",
      end_date: "2025-02-03",
      leave_apply_date: "2025-01-25",
      is_approved: true,
      reason: "Recon mission debrief",
      source: "classified",
    },
    {
      id: "d8ff6b72-1a3b-4e1e-b7d2-8e93e8910176",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-01-05",
      end_date: "2025-01-06",
      leave_apply_date: "2025-01-02",
      is_approved: true,
      reason: "Medical leave",
      source: "clinic",
    },
    {
      id: "f45d3a12-ecc3-4b7a-8721-d1c4e3a1981c",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-03-10",
      end_date: "2025-03-12",
      leave_apply_date: "2025-03-01",
      is_approved: false,
      reason: "Personal matters",
      source: "on-site",
    },
    {
      id: "c31a90b4-8e4b-4fae-9d5f-3fbf7f07c2a5",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-02-01",
      end_date: "2025-02-03",
      leave_apply_date: "2025-01-25",
      is_approved: true,
      reason: "Recon mission debrief",
      source: "classified",
    },
    {
      id: "d8ff6b72-1a3b-4e1e-b7d2-8e93e8910176",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-01-05",
      end_date: "2025-01-06",
      leave_apply_date: "2025-01-02",
      is_approved: true,
      reason: "Medical leave",
      source: "clinic",
    },
    {
      id: "f45d3a12-ecc3-4b7a-8721-d1c4e3a1981c",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-03-10",
      end_date: "2025-03-12",
      leave_apply_date: "2025-03-01",
      is_approved: false,
      reason: "Personal matters",
      source: "on-site",
    },
    {
      id: "c31a90b4-8e4b-4fae-9d5f-3fbf7f07c2a5",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-02-01",
      end_date: "2025-02-03",
      leave_apply_date: "2025-01-25",
      is_approved: true,
      reason: "Recon mission debrief",
      source: "classified",
    },
    {
      id: "d8ff6b72-1a3b-4e1e-b7d2-8e93e8910176",
      user_email: "grant.ward@hydra.net",
      start_date: "2025-01-05",
      end_date: "2025-01-06",
      leave_apply_date: "2025-01-02",
      is_approved: true,
      reason: "Medical leave",
      source: "clinic",
    },
  ],
};

export const Admin = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-full w-full gap-4 px-6 py-4 pl-20">
      <div className="w-100 flex-shrink-0 bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-3xl p-4 border border-stone-700/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            Admin Dashboard
          </h1>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-2.5 text-stone-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search employee..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-800/70 text-sm text-stone-200 placeholder-stone-400 border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-stone-400 text-sm">
            <SlidersHorizontal size={16} />
            <span className="font-semibold text-stone-300">Filters</span>
          </div>
          {[
            "All Employees",
            "On Leave Today",
            "Pending Approvals",
            "Recently Joined",
          ].map((label) => (
            <button
              key={label}
              className="px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="text-stone-400 text-sm font-semibold">
            Employee Management
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            <UserPlus size={16} className="text-stone-400" />
            Add Employee
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            <FileText size={16} className="text-stone-400" />
            View All Records
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            <ShieldCheck size={16} className="text-stone-400" />
            Assign Roles
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="text-stone-400 text-sm font-semibold">
            Events Management
          </div>
          <button className="px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            ➕ Add Employee
          </button>

          <button className="px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            🧾 View All Records
          </button>
          <button className="px-4 py-2 rounded-lg bg-stone-800/70 hover:bg-stone-700/70 text-left text-sm text-stone-300 transition-all">
            🛡️ Assign Roles
          </button>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-stone-950/80 to-stone-900/80 rounded-3xl p-6 border border-stone-700/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 overflow-y-scroll">
      </div>
        <EmployeeDetailsModal isOpen={isOpen} onClose={()=>setIsOpen(false)} employee={employee} >
        <h2 className="text-xl font-bold w-full h-full">Employee details</h2>
        <i>{employee.name}</i>
        </EmployeeDetailsModal>
    </div>
  );
};
