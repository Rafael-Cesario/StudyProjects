interface TextInputProps {
  props: {
    field: string;
    text: string;
    value: string;
    changeField: (name: string, value: string) => void;
    error: string;
  };
}

export const TextInput = ({ props: { field, text, value, changeField, error } }: TextInputProps) => {
  const borderColor = error.length > 0 ? "border-red-400" : "border-neutral-800";

  return (
    <div className="relative w-100">
      <span className="absolute text-sm text-neutral-400 -top-2.5 left-4 bg-neutral-950 px-4 text-center">{text}</span>
      <input
        className={`w-full py-4 px-8 border ${borderColor}`}
        type="text"
        placeholder={text}
        value={value}
        onChange={(e) => changeField(field, e.target.value)}
      />
      <p className="ml-4 mt-4 h-6 text-red-400">{error}</p>
    </div>
  );
};
