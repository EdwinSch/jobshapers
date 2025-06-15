import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <li>
          <Link
            href={"/"}
            className="text-jsText hover:text-jsBlue duration-200 cursor-pointer font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/vacatures"}
            className="text-jsText hover:text-jsBlue duration-200 cursor-pointer font-semibold"
          >
            Vacatures
          </Link>
        </li>
        <li>
          <Link
            href={"/werknemers"}
            className="text-jsText hover:text-jsBlue duration-200 cursor-pointer font-semibold"
          >
            Werknemers
          </Link>
        </li>
        <li>
          <Link
            href={"/werkgevers"}
            className="text-jsText hover:text-jsBlue duration-200 cursor-pointer font-semibold"
          >
            Werkgevers
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="text-jsText hover:text-jsBlue duration-200 cursor-pointer font-semibold"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
