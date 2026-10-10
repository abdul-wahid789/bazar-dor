import { ICategory, IProduct } from "@/types/foods";

const BASE_URL = "https://openapi.programming-hero.com/api/bazardor"


async function fetcher(url: string) {
    try {
        const res = await fetch(url, { next: { revalidate: 3600 } })
        const data = await res.json()
        return { data, error: "" }
    } catch (e) {
        return { data: [], error: String(e) }
    }



    // try {
    //     // Slow down by 2000 milliseconds (2 seconds) ONLY in development
    //     if (process.env.NODE_ENV === 'development') {
    //         await new Promise(resolve => setTimeout(resolve, 2000));
    //     }

    //     const res = await fetch(url, { next: { revalidate: 3600 } })
    //     const data = await res.json()
    //     return { data, error: "" }
    // } catch (e) {
    //     return { data: [], error: String(e) }
    // }

}

export async function categoriesPromise(): Promise<{ data: ICategory[], error: string }> {
    const url = `${BASE_URL}/categories`
    return await fetcher(url)
}
export async function productsPromise(): Promise<{ data: IProduct[], error: string }> {
    const url = `${BASE_URL}/products`
    return await fetcher(url)
}

export async function categoryProductPromise(category: string): Promise<{ data: IProduct[], error: string }> {
    const url = `${BASE_URL}/products?category=${category}`
    return await fetcher(url)
}


export async function productPromise(productId: string): Promise<{ data: IProduct, error: string }> {
    const url = `${BASE_URL}/products/${productId}`
    return await fetcher(url)
}


