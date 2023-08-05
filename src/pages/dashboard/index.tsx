import DashboardLayout from "~/components/DashboardLayout";

const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap gap-2 p-10">
        <div className="h-52 grow rounded-xl bg-primary shadow-md"></div>
        <div className="h-40 w-full rounded-xl bg-secondary shadow-md sm:w-1/4"></div>
        <div className="h-20 w-full rounded-xl bg-warning shadow-md sm:w-1/4"></div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
