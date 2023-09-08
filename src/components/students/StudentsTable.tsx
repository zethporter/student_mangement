import { PencilSquareIcon } from "@heroicons/react/24/outline";
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

const StudentsTable = () => {
  const { isLoading, data, error, mutate } = useSwr("/api/student-actions");

  if (isLoading)
    return (
      <span className="loading loading-ring loading-lg mx-auto text-accent"></span>
    );

  console.log(data);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(
            (student: {
              id: Key | string;
              firstName: string;
              lastName: string;
              phoneNumber: string;
            }) => (
              <tr key={student.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="h-12 w-12 rounded-full bg-primary text-primary-content">
                        <span className="text-xl">{`${student.firstName[0]}${student.lastName[0]}`}</span>
                      </div>
                    </div>
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
                  <span className="badge badge-ghost badge-sm">Validated</span>
                </td>
                <th>
                  <button
                    data-tip="edit"
                    className="btn tooltip-secondary tooltip-right border-0 text-secondary lg:tooltip hover:border-0 hover:bg-transparent hover:text-secondary-focus"
                  >
                    <PencilSquareIcon className="h-6 w-6" />
                  </button>
                </th>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
