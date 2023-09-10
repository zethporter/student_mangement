import { useState } from "react";
import { useAtom } from "jotai";
import { PencilSquareIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { PatternFormat } from "react-number-format";
import CustomModal from "../common/CustomModal";
import { studentsAtom } from "./StudentsFetcher";

const StudentsTable = () => {
  const [studentsData, setStudentsData] = useAtom(studentsAtom);
  const [studentModalOpen, setStudentModalOpen] = useState(false);

  return (
    <>
      <div className="flex w-full justify-between">
        <p className="pl-2 align-middle">Students</p>
        <button
          onClick={() => setStudentModalOpen(true)}
          className="btn text-primary hover:text-primary-focus border-0 hover:border-0 hover:bg-transparent"
        >
          <UserPlusIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {studentsData.map(
              (student: {
                id: string;
                firstName: string;
                lastName: string;
                phoneNumber: string;
              }) => (
                <tr key={student.id}>
                  <td>
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content h-12 w-12 rounded-full">
                        <span className="text-xl">{`${student.firstName[0]}${student.lastName[0]}`}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{`${student.firstName} ${student.lastName}`}</div>
                        <div className="text-sm opacity-50">Student</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <PatternFormat
                      className="bg-transparent font-bold"
                      value={student.phoneNumber}
                      format="(###) ###-####"
                    />
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Validated
                    </span>
                  </td>
                  <th>
                    <button className="btn text-secondary hover:text-secondary-focus border-0 hover:border-0 hover:bg-transparent">
                      <PencilSquareIcon className="h-6 w-6" />
                    </button>
                  </th>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <CustomModal open={studentModalOpen} onClose={setStudentModalOpen}>
        <p>This is the customModal</p>
      </CustomModal>
    </>
  );
};

export default StudentsTable;
