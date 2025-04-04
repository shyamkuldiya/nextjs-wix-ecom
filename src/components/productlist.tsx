import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./pagination";

const PRODUCT_PER_PAGE = 8;

export default async function ProductList({
  categoryID,
  limit,
  searchParams,
}: {
  categoryID?: string;
  limit?: number;
  searchParams?: any;
}) {
  const wixClient = await wixClientServer();

  const productQuery = wixClient?.products
    ?.queryProducts()
    .startsWith("name", searchParams?.name || "")
    ?.eq("collectionIds", categoryID)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams?.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  // .find();
  let res;
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams?.sort?.split(" ");
    if (sortType === "asc") {
      res = await productQuery?.ascending(sortBy).find();
    }
    if (sortType === "desc") {
      res = await productQuery?.descending(sortBy).find();
    }
  }
  if (!searchParams?.sort) {
    res = await productQuery.find();
  }

  return (
    <div className="mt-6 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
      {res?.items.map((product: products.Product) => {
        return (
          <Link
            key={product._id}
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative w-full h-80 ">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                fill
                alt="product"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                sizes="25vw"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  fill
                  alt="product"
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.priceData?.price}</span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm textgray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections?.find(
                      (section: any) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}
            <button className="rounded-2xl w-max ring-1 ring-batpink text-batpink py-2 px-4 text-xs hover:bg-batpink hover:text-white">
              Add to cart
            </button>
          </Link>
        );
      })}
      <Pagination
        currentPage={res?.currentPage || 0}
        hasNext={res?.hasNext()!}
        hasPrev={res?.hasPrev()!}
      />
    </div>
  );
}
