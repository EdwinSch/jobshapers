import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        <li>
          <Link
            href={"/"}
            className="px-4 py-2 hover:bg-green-600 hover:text-white duration-200 rounded-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/vacatures"}
            className="px-4 py-2 hover:bg-green-600 hover:text-white duration-200 rounded-lg"
          >
            Vacatures
          </Link>
        </li>
        <li>
          <Link
            href={"/werknemers"}
            className="px-4 py-2 hover:bg-green-600 hover:text-white duration-200 rounded-lg"
          >
            Werknemers
          </Link>
        </li>
        <li>
          <Link
            href={"/werkgevers"}
            className="px-4 py-2 hover:bg-green-600 hover:text-white duration-200 rounded-lg"
          >
            Werkgevers
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="px-4 py-2 hover:bg-green-600 hover:text-white duration-200 rounded-lg"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
