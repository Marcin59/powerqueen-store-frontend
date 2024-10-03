import { Paper } from "@mui/material"; 
import CategoryCol from "@modules/layout/components/menu/components/category-col";
import { getCategoriesList } from "@lib/data";
import { ProductCategoryWithChildren } from "types/global";

const selected_categories_names = [
    'power-queen-12-v',
    'power-queen-48-v'
]

const ShopDropdownContent = async () => {

    const {product_categories} = await getCategoriesList()

    return(
        <Paper className="w-[500px] h-[200px] bg-yellow-500 grid grid-cols-2">
            {product_categories && product_categories.map((category: ProductCategoryWithChildren) => {
                return(
                    <CategoryCol key={category.id} category={category}/>
                )
            })}
        </Paper>
    )
}

export default ShopDropdownContent;