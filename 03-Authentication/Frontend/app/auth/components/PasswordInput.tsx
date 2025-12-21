interface PasswordInputProps {
  props: {
    field: string;
    text: string;
    value: string;
    changeField: (name: string, value: string) => void;
  };
}

export const PasswordInput = ({ props: { field, text, value, changeField } }: PasswordInputProps) => {
  return (
    <div className="relative w-100">
      <span className="absolute text-sm text-neutral-400 -top-2.5 left-4 bg-neutral-950 px-4 text-center">{text}</span>
      <input
        className="w-full py-4 px-8 border border-neutral-800"
        type="text"
        placeholder={text}
        value={value}
        onChange={(e) => changeField(field, e.target.value)}
      />
    </div>
  );
};
