import React from "react";

type Props = {
  type: "button" | "submit";
  className: string;
  text?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

function Button({ type, className, text, onClick, children }: Props) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

export default Button;
