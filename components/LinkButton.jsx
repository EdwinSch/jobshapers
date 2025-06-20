import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  primary:
    "text-sm px-4 py-2 border-slate-300 border bg-jsOffWhite hover:bg-jsBlue/10",
  secondary:
    "text-sm px-4 py-2 bg-jsBlue text-white border border-jsBlue hover:bg-[#163ea5]",
  tertiary:
    "text-sm px-4 py-2 bg-jsGreen text-white border border-jsGreen hover:bg-[#33b68b]",
  ghost: "text-base text-jsText hover:text-jsBlue font-semibold",
};

const LinkButton = ({
  label,
  variant = "primary",
  href = "",
  className = "",
}) => {
  const mergedClassName = twMerge(
    variantClasses[variant],
    "block rounded-md cursor-pointer duration-200 ease-in-out capitalize",
    className
  );

  return (
    <Link href={href} className={mergedClassName}>
      {label}
    </Link>
  );
};

export default LinkButton;
