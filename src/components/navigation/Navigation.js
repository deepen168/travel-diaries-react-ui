import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className="flex items-center flex-wrap bg-gray-200 p-3">
      <div className="aspect-square ring-white ring-2 font-semibold text-xl tracking-tight ml-3 mr-5">
        <p>Travel</p>
        <p>Diaries</p>
      </div>
      <nav className="">
        {[
          { title: "Places To Be", link: "/" },
          { title: "History", link: "/history" },
        ].map(({ title, link }) => {
          return (
            <NavLink
              key={`${link}`}
              className={(isActive) =>
                "font-medium px-3 py-2 text-black-700 rounded-lg hover:bg-gray-300" +
                (!isActive.isActive ? "" : " bg-gray-300")
              }
              to={link}
              end
            >
              {title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
