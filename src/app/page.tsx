import Banner from "./components/home/Banner";
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
