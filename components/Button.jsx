const variantClasses = {
  primary: "border-slate-300 border bg-jsOffWhite hover:bg-jsBlue/10",
  secondary: "bg-jsBlue text-white border border-jsBlue hover:bg-jsMidnight",
  ghost: "",
};

const Button = ({
  label,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        block text-sm px-4 py-2 rounded-md cursor-pointer duration-200 ease-in-out
        ${variantClasses[variant]} ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
