type LeaveRequest = {
  id: string;
  user_email: string;
  start_date: string; 
  end_date: string; 
  leave_apply_date: string;
  is_approved: boolean;
  reason: string;
  source: string; 
};
//this is how api response looks like
const data: LeaveRequest[] = [
  {
    id: "1fcb645e-a9f1-4b64-8f8d-9d3b0fc5f3cb",
    user_email: "john.doe@example.com",
    start_date: "2025-04-10",
    end_date: "2025-04-12",
    leave_apply_date: "2025-03-28",
    is_approved: true,
    reason: "Family function",
    source: "leaves",
  },
  {
    id: "b2d35e41-4412-4d94-8a63-3e7dece5d7f4",
    user_email: "jane.smith@example.com",
    start_date: "2025-04-15",
    end_date: "2025-04-18",
    leave_apply_date: "2025-03-30",
    is_approved: true,
    reason: "Health reasons",
    source: "leaves",
  },
  {
    id: "c7f92f92-7db7-4e3c-a2c0-82e2b76a8e8f",
    user_email: "sarah.lee@example.com",
    start_date: "2025-04-25",
    end_date: "2025-04-25",
    leave_apply_date: "2025-04-01",
    is_approved: true,
    reason: "Work from home",
    source: "wfh",
  },
  {
    id: "99ac0aa1-437e-402f-9d6f-38a97b7e83fc",
    user_email: "mark.taylor@example.com",
    start_date: "2025-04-20",
    end_date: "2025-04-21",
    leave_apply_date: "2025-03-29",
    is_approved: true,
    reason: "Personal work",
    source: "leaves",
  },
  {
    id: "de340b56-6e88-4c2d-a2ae-6599b2e32a45",
    user_email: "alice.wong@example.com",
    start_date: "2025-04-05",
    end_date: "2025-04-06",
    leave_apply_date: "2025-03-27",
    is_approved: true,
    reason: "Festival",
    source: "leaves",
  },
  {
    id: "57eae5ab-98bb-499c-8934-f7a7bc9c2e8b",
    user_email: "rohit.verma@example.com",
    start_date: "2025-04-02",
    end_date: "2025-04-02",
    leave_apply_date: "2025-03-25",
    is_approved: true,
    reason: "WFH due to internet outage",
    source: "wfh",
  },
  {
    id: "7f35e792-7f5e-4c92-b7ea-c2a56a803e71",
    user_email: "emma.jones@example.com",
    start_date: "2025-04-12",
    end_date: "2025-04-12",
    leave_apply_date: "2025-04-02",
    is_approved: true,
    reason: "Doctor appointment",
    source: "leaves",
  },
  {
    id: "2d491167-2d8e-4a3d-9c63-2a5e25eaf62e",
    user_email: "sam.patel@example.com",
    start_date: "2025-04-26",
    end_date: "2025-04-26",
    leave_apply_date: "2025-04-03",
    is_approved: true,
    reason: "WFH for housework",
    source: "wfh",
  },
  {
    id: "5a63849b-2ff7-43a3-8933-c256cc12df4e",
    user_email: "lisa.kim@example.com",
    start_date: "2025-04-09",
    end_date: "2025-04-10",
    leave_apply_date: "2025-03-31",
    is_approved: true,
    reason: "College reunion",
    source: "leaves",
  },
  {
    id: "8efb2a6a-f6c2-4b48-890b-49171b72f750",
    user_email: "dev.singh@example.com",
    start_date: "2025-04-16",
    end_date: "2025-04-16",
    leave_apply_date: "2025-04-04",
    is_approved: true,
    reason: "Meeting with client from home",
    source: "wfh",
  },
  {
    id: "3a85dcd3-f8d4-4eb9-8e6f-9b8c22f3a91f",
    user_email: "aarav.sharma@example.com",
    start_date: "2025-04-07",
    end_date: "2025-04-08",
    leave_apply_date: "2025-03-26",
    is_approved: true,
    reason: "Family emergency",
    source: "leaves",
  },
  {
    id: "e3c4820e-2293-470e-8457-22e5f4e5aa4a",
    user_email: "olivia.wilson@example.com",
    start_date: "2025-04-22",
    end_date: "2025-04-23",
    leave_apply_date: "2025-04-05",
    is_approved: true,
    reason: "Out-of-town travel",
    source: "leaves",
  },
  {
    id: "a64c2d33-d8f7-4c5f-b2f3-60fca325ad23",
    user_email: "noah.brown@example.com",
    start_date: "2025-04-17",
    end_date: "2025-04-17",
    leave_apply_date: "2025-04-06",
    is_approved: true,
    reason: "Internet issues",
    source: "wfh",
  },
  {
    id: "a64c2d33-d8f7-4c5f-b2f3-60fca325ad23",
    user_email: "noah.brown@example.com",
    start_date: "2025-04-17",
    end_date: "2025-04-19",
    leave_apply_date: "2025-04-06",
    is_approved: true,
    reason: "Internet issues",
    source: "wfh",
  },
  {
    id: "f96b26f3-d3b0-4c20-90fa-2b9b77067d12",
    user_email: "mia.davis@example.com",
    start_date: "2025-04-27",
    end_date: "2025-04-29",
    leave_apply_date: "2025-04-08",
    is_approved: true,
    reason: "Vacation",
    source: "leaves",
  },
  {
    id: "c4b8ae3a-496b-4262-9996-9a5616dfc8a4",
    user_email: "ryan.martin@example.com",
    start_date: "2025-04-13",
    end_date: "2025-04-13",
    leave_apply_date: "2025-04-03",
    is_approved: true,
    reason: "Work from home due to delivery",
    source: "wfh",
  },
  {
    id: "d80e62b5-4af0-4646-949e-b03e6d4e239d",
    user_email: "zoe.jackson@example.com",
    start_date: "2025-04-14",
    end_date: "2025-04-14",
    leave_apply_date: "2025-04-04",
    is_approved: true,
    reason: "Medical checkup",
    source: "leaves",
  },
  {
    id: "bd496add-7489-45d2-9e97-b2740bfc983b",
    user_email: "lucas.thomas@example.com",
    start_date: "2025-04-28",
    end_date: "2025-04-28",
    leave_apply_date: "2025-04-10",
    is_approved: true,
    reason: "Electrician visit",
    source: "wfh",
  },
  {
    id: "1285cba1-f678-4a00-b5de-89b2558eb1cd",
    user_email: "chloe.moore@example.com",
    start_date: "2025-04-30",
    end_date: "2025-04-30",
    leave_apply_date: "2025-04-07",
    is_approved: true,
    reason: "Religious holiday",
    source: "leaves",
  },
  {
    id: "a45b2561-30b3-4fa9-ae3b-83788cc23f15",
    user_email: "daniel.white@example.com",
    start_date: "2025-04-19",
    end_date: "2025-04-24",
    leave_apply_date: "2025-03-31",
    is_approved: true,
    reason: "WFH for personal project",
    source: "wfh",
  },
  {
    id: "fd8eebd0-96b9-4a09-89b6-8a1ac99ffb7c",
    user_email: "ava.hall@example.com",
    start_date: "2025-04-11",
    end_date: "2025-04-19",
    leave_apply_date: "2025-04-01",
    is_approved: true,
    reason: "Driving license appointment",
    source: "leaves",
  },
];

// const colors = [
//   "#B2BEB5",
//   "#7393B3",
//   "#36454F",
//   "#A9A9A9",
//   "#6082B6",
//   "#808080",
//   "#818589",
//   "#D3D3D3",
//   "#899499",
//   "#E5E4E2",
//   "#8A9A5B",
//   "#C0C0C0",
//   "#708090",
//   "#848884",
//   "#71797E",
// ];

// const colors = ["#555555", "#444444", "#343434", "#474747", "#666666"];
const colors = ["#444444",];


const currentDate = new Date();

const dummyQueryResponseData = data
  .map((item) => ({
    ...item,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
  .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

export const days: (LeaveRequest & { position: number; isStart: boolean; isEnd: boolean, color:string })[][] = Array.from({ length: daysInMonth }, () => []);

dummyQueryResponseData.forEach((item) => {
  let start = new Date(item.start_date).getDate() - 1;

  if (new Date(item.start_date).getMonth() !== currentDate.getMonth()) {
    start = 0;
  }

  const end = new Date(item.end_date).getDate() - 1;

  let position = 0;
  while (days[start][position] !== undefined) {
    position++;
  }

  for (let d = start; d <= end; d++) {
    if (!days[d]) {
      days[d] = [];
    }

    days[d][position] = {
      ...item,
      position,
      isStart: d === start,
      isEnd: d === end,
      color: item.color,
    };
  }
});

const fillMissingPositions = (group:(LeaveRequest & { position: number; isStart: boolean; isEnd: boolean, color:string })[]) => {
  const clean = group.flat().filter(
    (item) =>
      item && typeof item === "object" && typeof item.position === "number"
  );

  if (clean.length === 0) return [];

  if (clean.length === 1) {
    const { position } = clean[0];
    const emptyCount = Math.max(0, position);
    return [...Array(emptyCount).fill({}), clean[0]];
  }

  const sorted = clean.sort((a, b) => a.position - b.position);
  const filled = [];

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    filled.push(current);

    const next = sorted[i + 1];
    if (next) {
      const gap = next.position - current.position - 1;
      for (let j = 0; j < gap; j++) {
        filled.push({});
      }
    }
  }

  return filled;
};

export const segregatedLeaveData:(LeaveRequest & { position: number; isStart: boolean; isEnd: boolean,color:string })[][] = days.map(fillMissingPositions);
