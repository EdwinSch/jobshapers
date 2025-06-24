const ContactItem = ({
  title = "heading",
  icon: Icon,
  iconShade = "#d9edff",
  iconColor = "text-jsBlue",
  children,
}) => {
  return (
    <div className="flex gap-3">
      <div
        className={`bg-[${iconShade}] w-10 h-10 rounded-lg grid place-items-center`}
      >
        {Icon && <Icon size={18} className={iconColor} />}
      </div>

      <div>
        <h3 className="font-bold capitalize text-jsMidnight">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ContactItem;
