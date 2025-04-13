import {
  Pencil,
  Clock,
  CalendarCheck,
  Trash2,
  Ban,
  UserCog,
} from "lucide-react";
import { LanyardGenerator } from "./LanyardGenerator";

interface ActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee?: any;
  children: React.ReactNode;
}

const EmployeeDetailsModal = ({
  isOpen,
  onClose,
  employee,
  children,
}: ActionsModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 w-screen h-screen antialiased"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-7xl max-h-[90%] overflow-scroll 
            bg-black
            border border-stone-700/30 
            rounded-3xl p-6 
            shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] 
            backdrop-blur-lg 
            text-stone-200"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-stone-400 hover:text-red-400 text-2xl transition-colors"
        >
          ×
        </button>
        {children}

        <div className="w-full h-full mt-8 max-h-[90%] bg-black rounded-3xl p-6  shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 space-y-6 ">
          {/* Header */}
          <div className="flex flex-row gap-10 p-10">
            <LanyardGenerator />

            <div className="flex flex-col  justify-end gap-2 w-70">
              <button className="flex w-40 items-center gap-2 px-4 py-2  hover:bg-stone-600/70 text-sm rounded-xl transition-all">
                <Pencil size={16} /> Edit Employee
              </button>
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
          </div>

          {/* Leave Summary */}

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
                    className="w-full bg-stone-950/60 border border-stone-700/40 rounded-2xl p-4 shadow-md backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
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
        <div className="h-128"></div>
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;

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
    <div className="flex items-center gap-4 px-4 py-3 rounded-2xl border border-stone-700/40 bg-stone-900/60 backdrop-blur-md shadow-inner hover:shadow-md transition-all">
      <div className="p-2 bg-stone-800/60 rounded-xl text-stone-300 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-stone-400 tracking-wide">{label}</span>
        <span className="text-xl font-semibold text-stone-100 leading-tight">
          {value}
        </span>
      </div>
    </div>
  );
}

