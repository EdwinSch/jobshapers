import { FaRegCircleCheck } from "react-icons/fa6";

const ListCard = ({ title = "heading", list, iconColor }) => {
  return (
    <div className="mb-8 bg-white border border-slate-300 p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-5">{title}</h2>

      {/* render list */}
      <ul className="flex flex-col gap-3">
        {list.map((item, idx) => {
          return (
            <li key={idx} className="flex items-center gap-2">
              <FaRegCircleCheck className={iconColor} />
              <span className="text-jsText">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCard;
