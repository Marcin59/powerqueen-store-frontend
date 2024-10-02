import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Box, Paper, Typography } from "@mui/material"
import { Suspense } from "react"
import MenuDropdown from "../menu-dropdown"


const menuItems = [
    {name: 'O nas', href: "/"},
    {name: 'Sklep', href: "/store"},
    {name: 'Konto', href: "/account"},
    {name: 'Koszyk', href: "/cart"},
]

const Menu = () => {

    return (
        <div className="flex gap-10 justify-center w-full h-full align-content-center">
            {menuItems.map(({name, href}) => {
                        return (
                            <Suspense 
                                key={name}
                                fallback={
                                    <LocalizedClientLink
                                        key={name}
                                        href={href}
                                        className="text-white leading-10 hover:text-ui-fg-disabled place-content-center"
                                        data-testid={`${name.toLowerCase()}-link`}
                                    >
                                        <Typography>
                                            {name}
                                        </Typography>
                                    </LocalizedClientLink>}>
                                <MenuDropdown 
                                    name={name}
                                    href={href}>
                                    <Paper className="w-[500px] h-[300px] bg-yellow-500">
                                    </Paper>
                                </MenuDropdown>
                            </Suspense>
                        )
                      })}
        </div>
    )
}

export default Menu;