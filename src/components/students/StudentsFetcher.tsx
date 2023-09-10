import { atom, useSetAtom } from "jotai";
import {
  PencilSquareIcon,
  UserPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import useSwr from "swr";
import StudentsTable from "./StudentsTable";

export const studentsAtom = atom([]);

const StudentsFetcher = () => {
  const setStudentsAtom = useSetAtom(studentsAtom);
  const { isLoading, data, error, mutate } = useSwr("/api/student-actions");

  if (isLoading)
    return (
      <span className="loading loading-ring loading-lg mx-auto text-accent"></span>
    );

  if (error)
    return (
      <div className="alert alert-error">
        <XCircleIcon className="h-4 w-4" />
        <span>{"This will be an error"}</span>
      </div>
    );

  setStudentsAtom(data.data);

  return <StudentsTable />;
};

export default StudentsFetcher;
