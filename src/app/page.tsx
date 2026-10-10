import { productsPromise } from "@/lib/foods";
import Banner from "./components/home/Banner";
import { IProduct } from "@/types/foods";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ProductCard from "./components/shared/ProductCard";
import { priceBangla } from "@/utils/englishBangla";
import TryAgain from "./components/error/TryAgain";

export default async function Home() {
  const { data: products, error }: { data: IProduct[], error: string } = await productsPromise()
  const filterProducts = (dir: 'up' | 'down') => {
    return products.filter(product => product.change.dir === dir)
  }

  console.log("from home products", products)
  console.log("from home error", error)



  return (
    <section>

      <Banner />

      {
        error ? <TryAgain/>
          :
          <>
            {/* up product */}
            <section className="my-15">
              <h1 className='mb-5 font-bold text-2xl flex gap-2'><FaCaretUp color='red' />আজ দাম বেড়েছে</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                  filterProducts('up').slice(0, 6).map(product => <ProductCard key={product.id}
                    product={product}
                  />)
                }
              </div>
            </section>

            {/* down product */}
            <section className="my-15">
              <h1 className='mb-5 font-bold text-2xl flex gap-2'><FaCaretDown color='green' />আজ দাম কমেছে</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                  filterProducts('down').slice(0, 6).map(product => <ProductCard key={product.id}
                    product={product}
                  />)
                }
              </div>
            </section>



            {/* all product  */}

            <section className="my-15" id='allProduct'>
              <h1 className='mb-2 font-bold text-2xl flex gap-2'>সব পণ্য</h1>
              <p className="mb-5">মোট {priceBangla(products.length)}টি পণ্য দেখানো হচ্ছে</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                  products.map(product => <ProductCard key={product.id}
                    product={product}
                  />)
                }
              </div>
            </section>

          </>
      }
    </section>
  );

}
