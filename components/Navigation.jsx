import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <li>
          <Link
            href={"/"}
            className="text-jsMidnight hover:text-jsBlue duration-200 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/vacatures"}
            className="text-jsMidnight hover:text-jsBlue duration-200 cursor-pointer"
          >
            Vacatures
          </Link>
        </li>
        <li>
          <Link
            href={"/werknemers"}
            className="text-jsMidnight hover:text-jsBlue duration-200 cursor-pointer"
          >
            Werknemers
          </Link>
        </li>
        <li>
          <Link
            href={"/werkgevers"}
            className="text-jsMidnight hover:text-jsBlue duration-200 cursor-pointer"
          >
            Werkgevers
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="text-jsMidnight hover:text-jsBlue duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
