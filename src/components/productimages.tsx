"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductImages({ items }: { items: any }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt="product"
          fill
          sizes="50vw"
          className="object-cover rounded-md "
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        {items.map((img: any, index: number) => {
          return (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={index}
              onClick={() => setIndex(index)}
            >
              <Image
                src={img.image.url}
                alt="product"
                fill
                sizes="30vw"
                className="object-cover  rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
