import { twMerge } from "tailwind-merge";

const variantClasses = {
  primary: "text-sm border-slate-300 border bg-white hover:bg-jsGreen/10",
  blue: "text-sm bg-jsBlue text-white border border-jsBlue hover:bg-[#163ea5]",
  green:
    "text-sm bg-jsGreen text-white border border-jsGreen hover:bg-[#33b68b]",
};

const ActionButton = ({
  label,
  type = "button",
  variant = "primary",
  className = "",
  children,
}) => {
  const mergedClassName = twMerge(
    variantClasses[variant],
    "block rounded-md cursor-pointer duration-200 ease-in-out capitalize px-4 py-2",
    className
  );

  return (
    <button type={type} className={mergedClassName}>
      {label}
      {children}
    </button>
  );
};

export default ActionButton;
