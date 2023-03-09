import Head from "next/head"
import styles from "../styles/Home.module.css"
import { DM_Sans } from "@next/font/google"
import Image from "next/image"
import Header from "@/components/Header.js"
import Link from "next/link"
import Footer from "@/components/Footer"

const dmSans = DM_Sans({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Kenny Otesile</title>
            </Head>
            
            <div className={dmSans.className}>
                <Header />
                
                <section id="hero" className="flex py-[48px] px-[132px] gap-[24px] items-center">
                    <div className="w-1/2">
                        {/* <Image src="/homepage-hero_568x408.jpeg" alt="" width={568} height={408} /> */}
                        <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                    </div>
                    <div className="w-1/2">
                        <p className="font-bold text-sm">WORKS</p>
                        <br />
                        <h1 className="text-6xl font-bold">Advanced search functionality for a business management engine</h1>
                        <br />
                        <p>I designed and implemented a robust and scalable search system that allowed users to quickly and easily search and filter products by various attributes such as price, color, brand, and category.</p>
                        <br />
                        <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                        <br />
                        <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                    </div>
                </section>

                <section id="works_products" className="flex flex-col py-[48px] px-[132px] gap-[24px] bg-black text-white">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">PRODUCTS</p>
                        <Link href="#" className="font-bold">More products</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Unulax Business: A business management engine</h2>
                            <br />
                            <p className="text-gray-200">JavaScript, React, Recoil, Java, Spring</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Amobern: A robust ecommerce platform</h2>
                            <br />
                            <p className="text-gray-200">JavaScript, React, Recoil, Java, Spring</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Apostle Niyi Makinde: An interactive media streaming and articles app</h2>
                            <br />
                            <p className="text-gray-200">JavaScript, React Native, Recoil, Java, Spring</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                    </div>
                </section>

                <section id="works_features" className="flex flex-col py-[48px] px-[132px] gap-[24px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">FEATURES</p>
                        <Link href="#" className="font-bold">More features</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                    </div>
                </section>

                <section id="articles" className="flex flex-col py-[48px] px-[132px] gap-[24px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">ARTICLES</p>
                        <Link href="#" className="font-bold">More articles</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}