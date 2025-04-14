import { useState } from "react";
import { User, Mail, Calendar, Briefcase } from "lucide-react";

export const AddEmployeePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    role: "",
    department: "",
  });

  const roles = ["Engineer", "Designer", "Manager", "Analyst", "Support"];
  const departments = [
    "Operations",
    "Engineering",
    "HR",
    "Marketing",
    "Finance",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding Employee:", form);
    // Add employee logic
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-stone-950 to-stone-900 px-8 py-6">
      <div className="w-full max-w-4xl  bg-stone-900/70 border border-stone-700/30 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] rounded-3xl p-10 flex flex-col gap-8 text-stone-200">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            Add New Employee
          </h2>
          <p className="text-sm text-stone-400 italic">
            Fill in the details to onboard a new agent
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <User
              className="absolute left-4 top-3.5 text-stone-500"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-base text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600"
            />
          </div>

          <div className="relative">
            <Mail
              className="absolute left-4 top-3.5 text-stone-500"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-base text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600"
            />
          </div>

          <div className="relative">
            <Calendar
              className="absolute left-4 top-3.5 text-stone-500"
              size={20}
            />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-base text-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-600"
            />
          </div>

          <div className="relative">
            <Briefcase
              className="absolute left-4 top-3.5 text-stone-500"
              size={20}
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full appearance-none pl-12 pr-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-base text-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-600"
            >
              <option value="" disabled>
                Select Role
              </option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Briefcase
              className="absolute left-4 top-3.5 text-stone-500"
              size={20}
            />
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              className="w-full appearance-none pl-12 pr-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-base text-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-600"
            >
              <option value="" disabled>
                Select Department
              </option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-stone-700 to-stone-600 text-white font-semibold text-base hover:brightness-110 transition-all"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};
