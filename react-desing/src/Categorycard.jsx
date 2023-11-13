
import { ProductCard } from "./ProductCard"





export function Categorycard(){
    return(
    <div className="flex flex-wrap justify-center gap-4 space-x-2 mr-2 ml-2 shadow-xl my-6 lg:gap-8 lg:space-x-6 md:mr-36 md:ml-36 lg:mx-56  bg-blue-gray-100 rounded-lg md:py-6 md:px-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    
    </div>

   )
}



