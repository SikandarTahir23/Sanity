import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getdata() {
  const fetchData = await client.fetch(`*[_type == 'product']{
    name,
    "imageUrl": image.asset->url,
    price,
  }`);
  return fetchData;
}

export default async function Products() {
  const data = await getdata();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-12">
      {data.map((val: any, i: any) => (
        <Link href={`/products/${val.name}`} key={i}>
          <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-t-lg object-cover h-48 w-full"
              src={val.imageUrl}
              alt={val.name}
              width={300}
              height={200}
            />
            <div className="p-6">
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {val.name}
              </h5>
              <p className="mb-4 text-md font-medium text-gray-700 dark:text-gray-400">
                ${val.price}
              </p>
              <button
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
