import { productsPromise } from "@/lib/foods";
import Banner from "./components/home/Banner";
import { IProduct } from "@/types/foods";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ProductCard from "./components/shared/ProductCard";
import { priceBangla } from "@/utils/englishBangla";
import TryAgain from "./components/error/TryAgain";
import ProductList from "./components/home/ProductList";
import { Suspense } from "react";
import HomeProductsSkeleton from "./components/skeleton/HomeProductsSkeleton";

export default async function Home() {

  return (
    <section>

      <Banner />

      <Suspense fallback={<HomeProductsSkeleton />}>
        <ProductList />
      </Suspense>
    </section>
  );

}
