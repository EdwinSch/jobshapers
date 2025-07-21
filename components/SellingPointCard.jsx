const SellingPointCard = ({
  title = "heading",
  text = "Lorem ipsum doler samet",
  icon: Icon,
  iconShade = "#d9edff",
  iconColor = "text-jsBlue",
  fontSize = "text-xl",
  children,
  className,
}) => {
  return (
    <article
      className={`${className} min-h-[250px] rounded-md p-6 bg-jsOffWhite border border-slate-300 shadow-md`}
    >
      <div
        className="mb-5 w-12 h-12 rounded-lg grid place-items-center"
        style={{ backgroundColor: iconShade }}
      >
        {Icon && <Icon size={22} className={iconColor} />}
      </div>
      <h3 className={`${fontSize} mb-2 font-semibold`}>{title}</h3>
      <p className="text-jsText text-sm">{text}</p>
    </article>
  );
};

export default SellingPointCard;
