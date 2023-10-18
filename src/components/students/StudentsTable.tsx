import { useState, useRef, useEffect } from "react";
import { useAtom } from "jotai";
import {
  PencilSquareIcon,
  UserPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { PatternFormat } from "react-number-format";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import useSwr from "swr";

import { selectStudentSchema } from "~/db/schema";
import CustomModal from "../common/CustomModal";
import { studentsAtom } from "./StudentsFetcher";
import {
  ToastError,
  ToastSuccess,
  ToastInfo,
  ToastWarning,
  ToastLoading,
} from "~/components/common/Toasts";
import NewStudentInput from "./NewStudentInput";

const StudentsTable = () => {
  const [studentsData, setStudentsData] = useAtom(studentsAtom);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const tempToasts = () => {
    ToastError("Toast Error");
    ToastSuccess("Toast Success");
    ToastInfo("ToastInfo");
    ToastWarning("Toast Warning");
    ToastLoading("Toast Loading");
  };

  //   useEffect(() => {
  //     if (studentModalRef.current?.open) {
  //       studentModalRef.current?.close()
  //     } else if (!studentModalRef.current?.open) {
  //       studentModalRef.current?.showModal()
  //     }
  // }, [])

  return (
    <>
      <div className="flex w-full justify-between">
        <p className="pl-2 align-middle">Students</p>
        <CustomModal
          buttonClassName="btn border-0 text-primary hover:border-0 hover:bg-transparent hover:text-primary-focus"
          buttonContent={<UserPlusIcon className="h-6 w-6" />}
        >
          <NewStudentInput />
        </CustomModal>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {studentsData.map(
              (student: {
                id: Key | string;
                first_name: string;
                last_name: string;
                phone_number: string;
              }) => (
                <tr key={student.id}>
                  <td>
                    <div className="avatar placeholder">
                      <div className="h-12 w-12 rounded-full bg-primary text-primary-content">
                        <span className="text-xl">{`${student.first_name[0]}${student.last_name[0]}`}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{`${student.first_name} ${student.last_name}`}</div>
                        <div className="text-sm opacity-50">Student</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <PatternFormat
                      className="bg-transparent font-bold"
                      value={student.phone_number}
                      format="(###) ###-####"
                    />
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Validated
                    </span>
                  </td>
                  <th>
                    <button className="btn border-0 text-secondary hover:border-0 hover:bg-transparent hover:text-secondary-focus">
                      <PencilSquareIcon className="h-6 w-6" />
                    </button>
                  </th>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsTable;
