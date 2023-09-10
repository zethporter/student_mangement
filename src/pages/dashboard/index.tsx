import axios from "axios";
import { atom, useAtom } from "jotai";
import DashboardLayout from "~/components/DashboardLayout";
import StudentsFetcher from "~/components/students/StudentsFetcher";

const tempAtom = atom("This is temporary");

const DashboardIndex = () => {
  const [temp, setTemp] = useAtom(tempAtom);

  const addStudent = async () => {
    const student = {
      id: "0eaaf230-7c26-48e8-ab6e-dd9a293da46d",
      firstName: "Zeth",
      lastName: "Porter",
      phoneNumber: "9998887777",
    };

    const { data } = await axios.post("/api/student-actions", student);
    setTemp(data);
  };

  const requestStudents = async () => {
    const { data } = await axios.get("/api/student-actions", {});
    console.log(data);
  };
  return (
    <DashboardLayout>
      <div className="flex flex-wrap gap-2 p-10">
        <div className="rounded-xl bg-base-200 p-2 shadow-md">
          <StudentsFetcher />
        </div>
        <div className="h-40 w-full rounded-xl bg-secondary shadow-md sm:w-1/4">
          <pre>{JSON.stringify(temp, null, 2)}</pre>
        </div>
        <div className="h-20 w-full rounded-xl bg-warning shadow-md sm:w-1/4"></div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
