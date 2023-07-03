import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full shadow-sm" style={{backgroundColor:"#004687",color:"white"}}>
      <div className="flex justify-center mt-14 mb-14">
      <UserIcon className="h-5 w-5" />
      <span className="pl-2"> Hello, User</span>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Discussion Forum</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Market Stories</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Sentiment</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div>
              <p className="ml-5 pl-2">Market</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div>
              <p className="ml-5 pl-2">Sectors</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-100 text-500"
                : "text-gray-400 hover:bg-100 hover:text-500"
            }`}
          >
            <div>
              <p className="ml-5 pl-2">Events</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
