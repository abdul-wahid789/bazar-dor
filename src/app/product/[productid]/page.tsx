import TryAgain from '@/app/components/error/TryAgain';
import PriceChange from '@/app/components/shared/PriceChange';
import { productPromise } from '@/lib/foods';
import { IProduct, Market } from '@/types/foods';
import { priceBangla, unitBangla } from '@/utils/englishBangla';
import { halfNumberDisplay, priceDiff } from '@/utils/textModifier';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';


export async function generateMetadata({ params }:
    { params: Promise<{ productid: string }>}): Promise<Metadata> {
    const { productid } = await params;
    const { data: product, error } = await productPromise(productid);
    if (error) {
        return { title: 'খুঁজে পাওয়া যায়নি | বাজার দর' };
    }
    return {
        title: `${product.nameBn} | বাজার দর`,
        description: `আজকের বাজারে ${product.nameBn} এর বিস্তারিত দাম দেখুন।`,
    };
}


const ProductDetailsPage = async ({ params }: { params: Promise<{ productid: string }> }) => {
    const { productid } = await params
    const { data: product, error }: { data: IProduct, error: string } = await productPromise(productid)


    const marketSort = (markets: Market[]): Market[] => {
        return markets.map(market => ({
            ...market,
            average: Math.round(((market.max + market.min) / 2) * 2) / 2
        }))
            .sort((a, b) => a.average - b.average)
    }

    if (error) {

       return  <TryAgain />

    } else {
        const markets = marketSort(product.markets)
        return (
            <section className='space-y-10'>
                <div className='flex gap-1'>
                    <Link href='/'>হোম</Link> &gt;
                    <Link href={`/category/${product.category}`}>{product.categoryNameBn}</Link> &gt;
                    <p>{product.nameBn}</p>
                </div>
                <div className='bg-base-200 rounded-2xl p-2 lg:p-8 flex justify-between gap-2'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-primary/5 p-2 lg:p-5 h-fit rounded-2xl text-2xl lg:text-4xl'>
                            {product.image}
                        </div>
                        <div>
                            <h1 className='font-bold text-lg lg:text-2xl'>{product.nameBn}</h1>
                            <p className='text-xs lg:text-base text-black/50'>প্রতি {unitBangla(product.unit)} · {product.categoryNameBn}</p>
                            <p className='text-xs lg:text-base'>গতকালের তুলনায় আজ দাম {priceDiff(product.today, product.yesterday)}</p>
                        </div>
                    </div>
                    <div className='bg-primary/10 p-3 rounded-2xl flex flex-col items-center w-1/2 lg:w-fit'>
                        <p className='text-xs lg:text-base text-center'>আজকের দাম</p>
                        <h1 className='text-2xl lg:text-4xl font-bold'>{priceBangla(product.today)}</h1>
                        <p className='text-xs lg:text-base text-center'>টাকা / {unitBangla(product.unit)}</p>
                        <p className='text-xs lg:text-lg'><PriceChange change={product.change} /></p>
                    </div>
                </div>


                {/* all info*/}


                <div className='bg-base-200 p-5 rounded-2xl space-y-10'>
                    <h1 className='font-bold text-2xl'>দামের সারসংক্ষেপ</h1>
                    <div className='grid grid-cols-3 gap-2 items-center'>
                        <div className='border border-black/10 rounded-2xl h-full p-2 lg:p-5 space-y-1'>
                            <p className='text-center lg:text-left text-sm lg:text-base'>সর্বনিম্ন দাম</p>
                            <h2 className='font-bold text-base lg:text-lg text-primary text-center lg:text-left  '>{priceBangla(markets[0].min)} টাকা</h2>
                            <p className='text-xs text-center lg:text-base lg:text-left'>সবচেয়ে কম দামের বাজার</p>
                        </div>
                        <div className='border border-black/10 rounded-2xl h-full p-2 lg:p-5 space-y-1'>
                            <p className='text-center lg:text-left text-sm lg:text-base'>সর্বাধিক দাম</p>
                            <h2 className='font-bold text-base lg:text-lg text-error text-center lg:text-left '> {priceBangla(markets[markets.length - 1].max)} টাকা</h2>
                            <p className='text-xs text-center lg:text-base lg:text-left'>সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                        <div className='border border-black/10 rounded-2xl h-full p-2 lg:p-5 space-y-1'>
                            <p className='text-center lg:text-left text-sm lg:text-base'>গড় দাম</p>
                            <h2 className='font-bold text-base lg:text-lg text-primary text-center lg:text-left  '>{halfNumberDisplay(Math.round(((markets[0].min + markets[markets.length - 1].max) / 2) * 2) / 2)} টাকা </h2>
                            <p className='text-xs text-center lg:text-base lg:text-left'>প্রতি {unitBangla(product.unit)}-এর হিসাবে</p>
                        </div>
                    </div>




                    {/* all market price table  */}
                    <h1 className='text-2xl font-bold'>বাজারভিত্তিক আজকের দাম</h1>
                    <div className="overflow-x-auto">
                        <table className="table  text-base lg:text-lg border-black/10 border">
                            {/* head */}
                            <thead className='font-bold text-base lg:text-lg'>
                                <tr >
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th>সর্বনিম্ন</th>
                                    <th>সর্বাধিক</th>
                                    <th>গড়</th>
                                </tr>
                            </thead>
                            <tbody className='font-light'>
                                {/* row  */}
                                {
                                    markets.map((market, i) => <tr key={i} className='even:bg-primary/5'>
                                        <td>{market.market}</td>
                                        <td>{market.division}</td>
                                        <td>{priceBangla(market.min)}</td>
                                        <td>{priceBangla(market.max)}</td>
                                        <td className='font-bold'>{halfNumberDisplay(market.average as number)}</td>
                                    </tr>)
                                }




                            </tbody>
                        </table>
                    </div>


                </div>
            </section>
        );
    }
};


export default ProductDetailsPage;
