import UserTable from "@/components/user-table";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Users"
};
const UserPage = () => (
  <div className="bg-slate-50 min-h-screen">
    <div className="max-w-screen-xl mx-auto py-10">
      <h1 className="text-2xl font-bold">User List</h1>
      <UserTable />
    </div>
  </div>
);

export default UserPage