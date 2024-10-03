"use client";
import { Popover, Transition } from "@headlessui/react";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface MenuDropdownProps {
    name: string;
    href: string;
    menuItem: React.ReactElement;}

const MenuDropdown = ({
    children, name, href, menuItem
}: PropsWithChildren<MenuDropdownProps>) => {
    
const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
const open = () => setCartDropdownOpen(true)
const close = () => setCartDropdownOpen(false)

return (
    <div
        onMouseEnter={open}
        onMouseLeave={close}
    >
        <Popover className="h-full">
            <Popover.Button className="h-full">
                {menuItem}
            </Popover.Button>
            <Transition
                show={cartDropdownOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-[-1]"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[-1]"
            >
                <div
                    className="fixed top-[calc(100%)] translate-x-[-50%] left-1/2"
                >
                    {children}
                </div>
            </Transition>
        </Popover>
    </div>
);
}

export default MenuDropdown;