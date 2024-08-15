import React from "react";
import { classNames } from "./const";

export function Button(props) {
  const {
    id,
    type,
    fullWidth,
    disabled,
    primary,
    outlined,
    onClick,
    className,
    children,
    block,
  } = props;

  return (
    <span
      className={classNames(
        fullWidth ? "w-full" : block ? "w-auto" : "w-max",
        block && "w-full sm:w-max"
      )}
    >
      <button
        id={id}
        type={type || "button"}
        disabled={disabled}
        onClick={onClick}
        className={classNames(
          "w-full min-w-[163px] min-h-10 flex justify-center items-center gap-2.5 py-2 px-2.5 text-base leading-[20.16px] rounded-[130px] border focus:outline-none",
          disabled && "opacity-50 hover:!bg-primary",
          primary &&
            "bg-primary hover:bg-primary-hover border-transparent text-white",
          outlined && "button-gradient-border text-gradient",
          className
        )}
      >
        {children}
      </button>
    </span>
  );
}
