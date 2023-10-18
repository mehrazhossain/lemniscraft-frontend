import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const ProfileDropDown = (props: any) => {
  const [state, setState] = useState(false);
  const profileRef = useRef<HTMLButtonElement | null>(null);

  const isUserLoggedIn = isLoggedIn();
  const router = useRouter();

  const navigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "My Account", path: "/dashboard" },
    { title: "Logout", path: "/dashboard" },
  ];

  const handleLogout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  useEffect(() => {
    const handleDropDown = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setState(false);
      }
    };
    document.addEventListener("click", handleDropDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <UserOutlined width={40} height={40} />
        </button>
        <div className="lg:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {isUserLoggedIn ? (
          navigation.map((item, idx) => (
            <li key={idx}>
              {item.title === "Logout" ? (
                <button
                  className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                  onClick={handleLogout}
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                  href={item.path}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))
        ) : (
          <>
            <div className="pt-4 pl-5">
              <Link
                className="block text-gray-600 lg:hover:bg-gray-50 "
                href="/signup"
              >
                SIGNUP
              </Link>
            </div>

            <div className="pt-2 pl-5 pb-4">
              <Link
                className="block text-gray-600 lg:hover:bg-gray-50"
                href="/login"
              >
                LOGIN
              </Link>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileDropDown;
