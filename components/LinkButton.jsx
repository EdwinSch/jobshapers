import Link from "next/link";

const variantClasses = {
  primary:
    "text-sm px-4 py-2 border-slate-300 border bg-jsOffWhite hover:bg-jsBlue/10",
  secondary:
    "text-sm px-4 py-2 bg-jsBlue text-white border border-jsBlue hover:bg-jsMidnight",
  ghost: "text-base text-jsText hover:text-jsBlue font-semibold",
};

const LinkButton = ({
  label,
  variant = "primary",
  href = "",
  className = "",
  type = "button",
}) => {
  return (
    <Link
      type={type}
      href={href}
      className={`
        block rounded-md cursor-pointer duration-200 ease-in-out capitalize
        ${variantClasses[variant]} ${className}
      `}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
