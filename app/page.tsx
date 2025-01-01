import Product from "./products/page";
import Image from "next/image";
import Hero from "./banner.png";


export default function Home() {
  return (
    < >
       <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Shop the Latest Trends
            <br className="hidden lg:inline-block" />
            in Fashion & Lifestyle
          </h1>
          <p className="mb-8 leading-relaxed">
            Discover a curated collection of the season's must-haves. From stylish apparel to premium accessories, 
            find everything you need to elevate your wardrobe and home. Shop now for exclusive deals and offers!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={Hero}
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
      <Product />

    </>
  );
}
