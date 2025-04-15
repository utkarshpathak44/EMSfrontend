export type LeaveDetail = {
  id: string;
  user_email: string;
  start_date: string;
  end_date: string;
  leave_apply_date: string;
  is_approved: boolean;
  reason: string;
  source: string;
};

export type LeaveSummary = {
  total: number;
  used: number;
  remaining: number;
};

export type Employee = {
  name: string;
  role: string;
  email: string;
  status: string;
  joinedDate: string;
  leaves: LeaveSummary;
  leaveDetails: LeaveDetail[];
};
