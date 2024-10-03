import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Box, Paper, Typography } from "@mui/material"
import { Suspense, useMemo } from "react"
import MenuDropdown from "../menu-dropdown"
import ShopDropdownContent from "./components/shop-dropdown-content"


const menuItems = [
    {name: 'O nas', href: "/",
        DropdownContext: () => {
            return(
                <Paper className="hidden"/>
            )
        }
    },
    {name: 'Sklep', href: "/store",
        DropdownContext: () => {
            return(
                <ShopDropdownContent/>
            )
        }},
    {name: 'Konto', href: "/account",
        DropdownContext: () => {
            return(
                <Paper className="hidden"/>
            )
        }},
    {name: 'Koszyk', href: "/cart",
        DropdownContext: () => {
            return(
                <Paper className="hidden"/>
            )
        }},
]

const Menu = () => {

    return (
        <div className="flex gap-10 justify-center w-full h-full align-content-center">
            {menuItems.map(({name, href, DropdownContext}) => {

                    const MenuItem = () => {
                        return (
                            <LocalizedClientLink
                                key={name}
                                href={href}
                                className="text-white leading-10 hover:text-ui-fg-disabled place-content-center"
                                data-testid={`${name.toLowerCase()}-link`}
                            >
                                <Typography>
                                    {name}
                                </Typography>
                            </LocalizedClientLink>
                        )
                    }

                    return (
                        <Suspense 
                            key={name}
                            fallback={
                                <MenuItem/>}>
                            <MenuDropdown 
                                name={name}
                                href={href}
                                menuItem={<MenuItem/>}>
                                <DropdownContext/>
                            </MenuDropdown>
                        </Suspense>
                    )
                    })}
        </div>
    )
}

export default Menu;