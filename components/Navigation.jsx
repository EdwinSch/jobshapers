import LinkButton from "./LinkButton";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <li>
          <LinkButton href="/" label="home" variant="ghost" />
        </li>
        <li>
          <LinkButton href="/vacatures" label="vacatures" variant="ghost" />
        </li>
        <li>
          <LinkButton href="/werknemers" label="werknemers" variant="ghost" />
        </li>
        <li>
          <LinkButton href="/werkgevers" label="werkgevers" variant="ghost" />
        </li>
        <li>
          <LinkButton href="/contact" label="contact" variant="ghost" />
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
