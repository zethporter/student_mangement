import { Controller } from "react-hook-form";

export const TextInput = ({
  control,
  label,
  placeholder,
  name,
}: {
  control: any;
  label?: string;
  placeholder?: string;
  name: string;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      )}
    />
  );
};
