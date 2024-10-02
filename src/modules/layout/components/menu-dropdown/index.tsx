"use client";
import { Popover, Transition } from "@headlessui/react";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface MenuDropdownProps {
    name: string;
    href: string;
}

const MenuDropdown = ({
    children, name, href
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
                <LocalizedClientLink
                    key={name}
                    href={href}
                    className="text-white leading-10 hover:text-ui-fg-disabled place-content-center h-full"
                    data-testid={`${name.toLowerCase()}-link`}
                >
                    <Typography>
                        {name}
                    </Typography>
                </LocalizedClientLink>
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