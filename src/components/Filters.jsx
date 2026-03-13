import { FaFilter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillAppstore } from "react-icons/ai";

const Filters = ({ onClick, state }) => {
  const status = ["All", "Active", "Paused", "Archive", "Draft"];

  return (
    <div className="flex gap-2 justify-between mx-4  ">
      <div className="flex gap-6 mt-4">
        {status.map((item) => (
          <button
            onClick={() => onClick(item)}
            key={crypto.randomUUID()}
            className={`${item === state ? "border-b-2 border-[purple] text-black" : ""} cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex gap-6 mt-4">
        <FaFilter />
        <RxHamburgerMenu />
        <AiFillAppstore className="text-red-500" />
      </div>
    </div>
  );
};

export default Filters;
