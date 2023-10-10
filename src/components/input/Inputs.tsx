import { Controller } from "react-hook-form";

export const TextInput = ({
  control,
  label,
  placeholder,
  name,
  defaultValue = "",
}: {
  control: any;
  label?: string;
  placeholder?: string;
  name: string;
  defaultValue?: string;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="form-control">
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <input
            defaultValue={defaultValue}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="input input-bordered input-secondary"
          />
        </div>
      )}
    />
  );
};
