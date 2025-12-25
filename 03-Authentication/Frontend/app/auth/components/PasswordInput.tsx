"use client";

import Image from "next/image";
import { useState } from "react";

interface PasswordInputProps {
  props: {
    field: string;
    text: string;
    value: string;
    changeField: (name: string, value: string) => void;
    error: string;
  };
}

export const PasswordInput = ({ props: { field, text, value, changeField, error } }: PasswordInputProps) => {
  const [hide, setHide] = useState(true);
  const borderColor = error.length > 0 ? "border-red-400" : "border-neutral-800";

  return (
    <div className={`w-100`}>
      <div className={`border ${borderColor} relative flex items-center`}>
        <span className={`absolute text-sm text-neutral-400 -top-2.5 left-4 bg-neutral-950 px-4 text-center`}>
          {text}
        </span>

        <input
          className={`w-full py-4 px-8`}
          type={hide ? "password" : "text"}
          placeholder={text}
          value={value}
          onChange={(e) => changeField(field, e.target.value)}
        />

        <button className="mr-4" onClick={() => setHide(!hide)}>
          {hide && <Image width={24} height={24} src="/icons/eyeHide.png" alt={"Eye icon"} />}
          {hide || <Image width={24} height={24} src="/icons/eyeShow.png" alt={"Eye icon"} />}
        </button>
      </div>

      <p className="ml-4 mt-4 h-6 text-red-400">{error}</p>
    </div>
  );
};
