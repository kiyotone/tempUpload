import React, { useContext, useState } from "react";

// import Logo from "../assest/products/logos.png";
import { GrSearch } from "react-icons/gr";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import Context from "../context";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const [below, setBelow] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      console.log(this.scrollY);
      if (this.scrollY > 300) {
        setBelow(true);
      } else {
        setBelow(false);
      }
    });
  }

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  const toggleSearch = () => {
    setSearchDisplay(!searchDisplay);
  };

  return (
    <div className="relative">
      <div
        className={`${
          !searchDisplay ? "absolute translate-y-[-100px]" : "translate-y-0"
        }  w-100vw  ease-in-out duration-300`}
      >
        <div
          className={`lg:flex items-center h-14 m-3 border-black  border rounded-2xl focus-within:shadow pl-2 max-w-[500px] justify-end mx-auto`}
        >
          <input
            type="text"
            placeholder="Get Your Products here..."
            className="w-[19rem] outline-none bg-transparent placeholder:text-black text-black"
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-black">
            <GrSearch />
          </div>
        </div>
      </div>

      <header
        className={`h-20  w-full px-14 z-40 ${
          below && searchInput.pathname == "/"
            ? "  fixed bg-black "
            : " bg-transparent absolute"
        }`}
      >
        <div className=" h-full container mx-auto flex items-center pl-2 justify-between">
          <div className="">
            <Link to={"/"}>
              <RiMotorbikeFill className="text-white h-10 w-10" />
            </Link>
          </div>

          <div className="text-white flex justify-around gap-5 items-center">
            <div
              onClick={toggleSearch}
              className="flex justify-center items-center gap-2"
            >
              Search
              <GrSearch />
            </div>

            <div className="flex items-center text-white gap-7">
              <div className="relative flex justify-center">
                {user?._id && (
                  <div
                    className="text-3xl  cursor-pointer relative flex justify-center"
                    onClick={() => setMenuDisplay((preve) => !preve)}
                  >
                    {user?.profilePic ? (
                      <img
                        src={user?.profilePic}
                        className="w-10 h-10 rounded-full"
                        alt={user?.name}
                      />
                    ) : (
                      <FaRegCircleUser />
                    )}
                  </div>
                )}

                {menuDisplay && (
                  <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                    <nav>
                      {user?.role === ROLE.ADMIN && (
                        <Link
                          to={"/admin-panel/all-products"}
                          className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                          onClick={() => setMenuDisplay((preve) => !preve)}
                        >
                          Admin Panel
                        </Link>
                      )}
                    </nav>
                  </div>
                )}
              </div>

              {user?._id && (
                <Link to={"/cart"} className="text-2xl text-white relative">
                  <span>
                    <FaShoppingCart />
                  </span>

                  <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                    <p className="text-sm">{context?.cartProductCount}</p>
                  </div>
                </Link>
              )}

              <div>
                {user?._id ? (
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 flex items-center justify-center"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to={"/login"}
                    className="px-5 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 flex items-center justify-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
