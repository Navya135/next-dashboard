import { Fragment } from "react";
import React from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import Image from 'next/image';
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      {showNav?
      <div className="" style={{marginLeft:"-5px",verticalAlign:"middle",marginTop:"60%"}}>
        <Image src="/sidebar.png" className="h-8 w-8 text-gray-700 cursor-pointer" alt="" width="250" height="250" onClick={() => setShowNav(!showNav)}/>
    </div>:
    <div className="" style={{marginLeft:"-5px",verticalAlign:"middle",marginTop:"50%"}}>
            <Image src="/sidebar.png" className="h-8 w-8 text-gray-700 cursor-pointer" alt="" width="250" height="250" onClick={() => setShowNav(!showNav)}/>
  </div>}
    </div>
  );
}
