import { Check, X } from "lucide-react";
interface LeaveRequest {
  name: string;
  designation: string;
  type: "WFH" | "Leave";
  from: string;
  to: string;
}

function PendingApprovals({ approvals = [] }: { approvals: LeaveRequest[] }) {
  return (
    <div className="bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-3xl p-6 border border-stone-700/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] backdrop-blur-lg text-stone-200 max-h-full overflow-y-auto w-full">
      <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
        Pending Approvals
      </h2>

      {approvals.length === 0 ? (
        <p className="text-stone-400 text-sm">No pending requests 🎉</p>
      ) : (
        <div className="flex flex-col gap-4">
          {approvals.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 rounded-xl bg-stone-800/60 hover:bg-stone-700/60 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-base font-medium text-stone-100">
                  {item.name} ({item.designation})
                </span>
                <span className="text-stone-400 text-sm mt-1">
                  {item.type} from {item.from} to {item.to}
                </span>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button className="bg-stone-600 hover:bg-stone-500 text-white p-2 rounded-md">
                  <Check size={16} />
                </button>
                <button className="bg-stone-800 hover:bg-stone-900 text-white p-2 rounded-md">
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PendingApprovals;
