import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from "@modules/layout/components/menu";
import Image from 'next/image'
import { Box } from "@mui/material"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle w-full h-full text-small-regular">
          <div className="h-16 flex w-full flex-wrap pr-20 pl-20">
            <div className="flex-1 basis-0 h-full flex items-center">
              {/* <div className="h-full">
                <SideMenu regions={regions} />
              </div> */}
            </div>

            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                data-testid="nav-store-link"
              >
                <Image
                  src="/images/Power_Queen_Logo.png"
                  alt="Power Queen Logo"
                  width={150}
                  height={50}
                />
              </LocalizedClientLink>
            </div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/search"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <AccountCircleIcon />
                </LocalizedClientLink>
              </div>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <ShoppingCartIcon />
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
          <div className="h-8 flex w-full bg-yellow-500">
            <Menu/>
          </div>
        </nav>
      </header>
    </div>
  )
}
