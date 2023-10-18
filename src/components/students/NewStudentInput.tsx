import { useForm, SubmitHandler } from "react-hook-form";
import { TextInput, FormattedNumberInput } from "../input/Inputs";
import axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastInfo,
  ToastWarning,
  ToastLoading,
} from "~/components/common/Toasts";

const NewStudentInput = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<any> = async (body) => {
    const newStudentToast = ToastLoading(
      `Adding student: ${[body.first_name, body.last_name].join(" ")}`,
    );
    const { data, error }: any = await axios.post("/api/student-actions", body);

    if (error) {
      ToastError(error.message, {
        id: newStudentToast,
      });
    }

    ToastSuccess(data.message, {
      id: newStudentToast,
    });
  };

  const resetForm = () => {
    reset({
      first_name: "",
      last_name: "",
      phone_number: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        resetForm();
      })}
    >
      <div className="flex flex-col justify-end gap-y-3">
        <TextInput
          name={"first_name"}
          control={control}
          placeholder={"Johnny"}
          label={"First Name"}
        />
        <TextInput
          name={"last_name"}
          control={control}
          placeholder={"Appleseed"}
          label={"Last Name"}
        />
        <FormattedNumberInput
          name={"phone_number"}
          control={control}
          placeholder={"Test"}
          label={"Phone Number"}
          format={"(###) ###-####"}
        />
        <div>
          <button
            // onClick={() => console.debug("submitted")}
            type="submit"
            className="btn btn-primary"
          >
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewStudentInput;
