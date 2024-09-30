import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Box, Typography } from "@mui/material"

const SideMenuItems = {
    'O nas': "/",
    Sklep: "/store",
    Konto: "/account",
    Koszyk: "/cart",
}

const Menu = () => {
    return (
        <div className="flex gap-10 justify-center w-full h-full align-content-center">
            {Object.entries(SideMenuItems).map(([name, href]) => {
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
                      })}
        </div>
    )
}

export default Menu;