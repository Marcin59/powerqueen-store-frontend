import { getCategoryByHandle, getProductsByCategoryHandle, getProductsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { Countertops } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ProductCategoryWithChildren } from "types/global";

interface CategoryColProps {
    category: ProductCategoryWithChildren;
}

const getCategoryByID = async (id: string) => {
    const {response} = await getProductsByCategoryHandle({ handle: id, countryCode: 'pl' });
    return response.products;
}

const CategoryCol = async ({ category }: CategoryColProps) => {

    const products = await getProductsByCategoryHandle({ 
        handle: category.handle, 
        countryCode: 'pl' 
    }).then((response) => response.response.products);
 
    return(
        <div className="flex flex-col flex-wrap gap-y-[15px] m-5">
            <LocalizedClientLink
                href={`/categories/${category.handle}`}
                className="hover:text-ui-fg-disabled text-lg font-bold"
            >
                {category.name}
            </LocalizedClientLink>
            <div className="grid gap-y-[8px]">
                {products && products.map((product) => {
                    return(
                        <LocalizedClientLink
                            key={product.id}
                            href={`/products/${product.handle}`}
                            className="hover:text-ui-fg-disabled text-base"
                        >
                            {product.title}
                        </LocalizedClientLink>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryCol;