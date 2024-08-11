import React from "react";

// Utility function to join class names conditionally
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button(props) {
  const {
    id,
    type,
    fullWidth,
    disabled,
    primary,
    secondary,
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
          "w-full min-w-[127px] min-h-11 flex justify-center items-center py-2 px-2.5 text-white text-sm xl:text-base font-medium rounded-[10px] border focus:outline-none",
          disabled && "opacity-50 hover:!bg-primary",
          primary && "bg-primary hover:bg-secondary border-transparent",
          secondary && "bg-secondary hover:bg-primary border-transparent",
          className
        )}
      >
        {children}
      </button>
    </span>
  );
}
