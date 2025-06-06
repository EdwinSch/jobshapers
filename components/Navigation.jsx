import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link
            href={"/"}
            className="px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-200 rounded-md"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/vacatures"}
            className="px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-200 rounded-md"
          >
            Vacatures
          </Link>
        </li>
        <li>
          <Link
            href={"/werknemers"}
            className="px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-200 rounded-md"
          >
            Werknemers
          </Link>
        </li>
        <li>
          <Link
            href={"/werkgevers"}
            className="px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-200 rounded-md"
          >
            Werkgevers
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-200 rounded-md"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
