import React from "react";
// import styles from './Button.module.css'

type Props = {
  type: "button" | "submit";
  className: string;
  text: string;
  onClick?: () => void;
};

function Button({ type, className, text }: Props) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

export default Button;
