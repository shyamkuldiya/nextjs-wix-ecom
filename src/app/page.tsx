import CategoryList from "@/components/categorylist";
import ProductList from "@/components/productlist";
import Slider from "@/components/slider";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-12 px-4 md:px-8 lg:px-16 ">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16">Categories</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-12 px-4 md:px-8 lg:px-16 ">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
