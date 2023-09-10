import DashboardLayout from "~/components/DashboardLayout";
import StudentsFetcher from "~/components/students/StudentsFetcher";

const DashboardIndex = () => {
  return (
    <div className="flex flex-wrap gap-2 p-10">
      <div className="bg-base-200 rounded-xl p-2 shadow-md">
        <StudentsFetcher />
      </div>
      <div className="bg-secondary h-40 w-full rounded-xl shadow-md sm:w-1/4"></div>
      <div className="bg-warning h-20 w-full rounded-xl shadow-md sm:w-1/4"></div>
    </div>
  );
};

export default DashboardIndex;
