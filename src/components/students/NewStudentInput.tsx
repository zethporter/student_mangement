import { useForm, SubmitHandler } from "react-hook-form";
import { TextInput } from "../input/Inputs";

const NewStudentInput = () => {
  const { control, handleSubmit, reset } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.debug("data:", data);

  return (
    <form onSubmit={handleSubmit((data) => console.debug(data))}>
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
      <TextInput
        name={"phone_number"}
        control={control}
        placeholder={"Test"}
        label={"Phone Number"}
      />
      <button
        // onClick={() => console.debug("submitted")}
        type="submit"
        className="btn btn-primary"
      >
        save
      </button>
    </form>
  );
};

export default NewStudentInput;
