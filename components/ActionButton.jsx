import { twMerge } from "tailwind-merge";

const variantClasses = {
  primary: "text-sm border-slate-300 border bg-jsOffWhite hover:bg-jsGreen/10",
  blue: "text-sm bg-jsBlue text-white border border-jsBlue hover:bg-[#163ea5]",
  green:
    "text-sm bg-jsGreen text-white border border-jsGreen hover:bg-[#33b68b]",
  red: "text-sm bg-red-500 text-white border border-red-500 hover:bg-red-600",
};

const ActionButton = ({
  label,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  children,
  disabled = false,
}) => {
  const mergedClassName = twMerge(
    variantClasses[variant],
    "block rounded-md cursor-pointer duration-200 ease-in-out capitalize px-4 py-2",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button type={type} className={mergedClassName} onClick={onClick} disabled={disabled}>
      {label}
      {children}
    </button>
  );
};

export default ActionButton;
