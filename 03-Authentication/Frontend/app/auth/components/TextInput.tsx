interface TextInputProps {
  props: {
    field: string;
  };
}

export const TextInput = ({ props: { field } }: TextInputProps) => {
  return (
    <div className="relative w-100">
      <span className="absolute text-sm text-neutral-400 -top-2.5 left-4 bg-neutral-950 px-4 text-center">{field}</span>
      <input className="w-full py-4 px-8 border border-neutral-800" type="text" placeholder={field} />
    </div>
  );
};
