import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  Mail,
  Pencil,
  Search,
  ShieldX,
  SlidersHorizontal,
  History,
  FileText,
  ShieldCheck,
  UserPlus,
  Ban,
  Trash2,
  UserCog,
} from "lucide-react";

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

      {/* yahan pe dynamically contents daalenge */}
      <div className="flex-1 bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-3xl p-6 border border-stone-700/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 overflow-y-scroll">
        {/* <div className="border border-stone-700/30 rounded-2xl p-6 text-stone-400 text-sm bg-stone-800/40">
          No employee selected.
        </div> */}

        <div className="w-full bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-3xl p-6 border border-stone-700/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 space-y-6 ">
          {/* Header */}
          <div className="flex flex-row items-start gap-3">
            <div className="flex w-30 h-30 items-center rounded-2xl border border-stone-700/30 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]">
              <img
                src="/rect7.svg"
                alt=""
                className="w-full h-full   shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
                {employee.name}
              </h2>
              <p className="text-stone-400 text-sm flex items-center gap-1 mt-1">
                <BadgeCheck size={14} className="text-stone-400" />
                {employee.role}
              </p>
            </div>
            <button className="flex ml-auto items-center gap-2 px-4 py-2 bg-stone-700/60 hover:bg-stone-600/70 text-sm rounded-xl transition-all">
              <Pencil size={16} /> Edit
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-stone-400" />
              {employee.email}
            </div>
            <div className="flex items-center gap-2">
              <ShieldX size={16} className="text-stone-400" />
              Status: {employee.status}
            </div>
            <div className="flex items-center gap-2">
              <History size={16} className="text-stone-400" />
              Joined: {employee.joinedDate}
            </div>
          </div>

          {/* Leave Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              icon={<Clock size={20} />}
              label="Total Leaves"
              value={employee.leaves.total}
            />
            <StatCard
              icon={<CalendarCheck size={20} />}
              label="Used Leaves"
              value={employee.leaves.used}
            />
            <StatCard
              icon={<Clock size={20} />}
              label="Remaining"
              value={employee.leaves.remaining}
            />
          </div>

          <div className="flex flex-col w-full gap-7">
            <div className="flex flex-col w-full gap-4">
              {employee.leaveDetails.map((leave) => {
                const start = new Date(leave.start_date);
                const end = new Date(leave.end_date);
                const totalDays =
                  (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1;

                return (
                  <div
                    key={leave.id}
                    className="w-full bg-stone-800/60 border border-stone-700/40 rounded-2xl p-4 shadow-md backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 text-stone-300 font-semibold text-sm">
                        <span className="px-3 py-1 bg-stone-200/10 text-stone-200 rounded-full border border-stone-600">
                          {start.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <i className="text-stone-500">to</i>
                        <span className="px-3 py-1 bg-stone-200/10 text-stone-200 rounded-full border border-stone-600">
                          {end.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <i className="text-stone-400 text-bold mt-1 px-3 font-semibold">
                        ({totalDays} day{totalDays > 1 ? "s" : ""})
                      </i>
                    </div>

                    <div className="flex flex-col md:items-end gap-2 text-sm">
                      <span className="italic text-stone-400">
                        "{leave.reason}"
                      </span>
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium tracking-wide border ${
                          leave.is_approved
                            ? "bg-stone-900/30 text-stone-400 border-stone-600"
                            : "bg-stone-900/30 text-stone-300 border-stone-600"
                        }`}
                      >
                        {leave.is_approved ? "Approved" : "Pending"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-stone-700/40">
            <button className="flex items-center gap-2 px-4 py-2 bg-stone-800/70 hover:bg-stone-700/70 rounded-lg text-sm text-stone-200 transition-all">
              <Trash2 size={16} className="text-stone-400" />
              Delete Record
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-stone-800/70 hover:bg-stone-700/70 rounded-lg text-sm text-stone-200 transition-all">
              <Ban size={16} className="text-stone-400" />
              Disable Account
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-stone-800/70 hover:bg-stone-700/70 rounded-lg text-sm text-stone-200 transition-all">
              <UserCog size={16} className="text-stone-400" />
              Change Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-3 p-4 bg-stone-800/60 rounded-xl shadow-inner text-stone-300">
      <div className="p-2 rounded-lg bg-stone-700 text-stone-200">{icon}</div>
      <div>
        <p className="text-xs text-stone-400">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
