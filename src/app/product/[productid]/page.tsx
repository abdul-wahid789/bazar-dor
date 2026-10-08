import PriceChange from '@/app/components/shared/PriceChange';
import { productPromise } from '@/lib/foods';
import { IProduct, Market } from '@/types/foods';
import { priceBangla, unitBangla } from '@/utils/englishBangla';
import { halfNumberDisplay, priceDiff } from '@/utils/textModifier';
import Link from 'next/link';
import React from 'react';


const ProductDetailsPage = async ({ params }: { params: Promise<{ productid: string }> }) => {
    const { productid } = await params
    const { data: product }: { data: IProduct } = await productPromise(productid)


    const marketSort = (markets: Market[]): Market[] => {
        return markets.map(market => ({
            ...market,
            average: Math.round(((market.max + market.min) / 2) * 2) / 2
        }))
            .sort((a, b) => a.average - b.average)
    }




    const markets = marketSort(product.markets)
    return (
        <section className='space-y-10'>
            <div className='flex gap-1'>
                <Link href='/'>হোম</Link> &gt;
                <Link href={`/category/${product.category}`}>{product.categoryNameBn}</Link> &gt;
                <p>{product.nameBn}</p>
            </div>
            <div className='bg-base-200 rounded-2xl p-8 flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='bg-primary/5 p-5 h-fit rounded-2xl text-4xl'>
                        {product.image}
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>{product.nameBn}</h1>
                        <p className='text-black/50'>প্রতি {unitBangla(product.unit)} · {product.categoryNameBn}</p>
                        <p>গতকালের তুলনায় আজ দাম {priceDiff(product.today, product.yesterday)}</p>
                    </div>
                </div>
                <div className='bg-primary/10 p-3 rounded-2xl flex flex-col items-center'>
                    <p>আজকের দাম</p>
                    <h1 className='text-4xl font-bold'>{priceBangla(product.today)}</h1>
                    <p>টাকা / {unitBangla(product.unit)}</p>
                    <p className='text-lg'><PriceChange change={product.change} /></p>
                </div>
            </div>


            {/* all info*/}


            <div className='bg-base-200 p-5 rounded-2xl space-y-10'>
                <h1 className='font-bold text-2xl'>দামের সারসংক্ষেপ</h1>
                <div className='grid grid-cols-3 gap-2 items-center'>
                    <div className='border border-black/10 rounded-2xl p-5 space-y-1'>
                        <p>সর্বনিম্ন দাম</p>
                        <h2 className='font-bold text-lg text-primary'>{priceBangla(markets[0].min)} টাকা</h2>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className='border border-black/10 rounded-2xl p-5 space-y-1'>
                        <p>সর্বাধিক দাম</p>
                        <h2 className='font-bold text-lg text-error'>{priceBangla(markets[markets.length - 1].max)} টাকা</h2>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className='border border-black/10 rounded-2xl p-5 space-y-1'>
                        <p>গড় দাম</p>
                        <h2 className='font-bold text-lg text-primary'>{halfNumberDisplay(Math.round(((markets[0].min + markets[markets.length - 1].max) / 2) * 2) / 2)} টাকা </h2>
                        <p>প্রতি {unitBangla(product.unit)}-এর হিসাবে</p>
                    </div>
                </div>




                {/* all market price table  */}
                <h1 className='text-2xl font-bold'>বাজারভিত্তিক আজকের দাম</h1>
                <div className="overflow-x-auto">
                    <table className="table text-lg border-black/10 border">
                        {/* head */}
                        <thead className='font-bold text-lg'>
                            <tr >
                                <th>বাজার</th>
                                <th>বিভাগ</th>
                                <th>সর্বনিম্ন</th>
                                <th>সর্বাধিক</th>
                                <th>গড়</th>
                            </tr>
                        </thead>
                        <tbody className=''>
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
};


export default ProductDetailsPage;
