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
                
                <section className="flex py-[24px] px-[132px] gap-[24px] items-center">
                    <div className="w-1/2">
                        {/* <Image src="/homepage-hero_568x408.jpeg" alt="" width={568} height={408} /> */}
                        <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                    </div>
                    <div className="w-1/2">
                        <p className="font-bold text-sm">WORKS</p>
                        <br />
                        <h1 className="text-6xl font-bold mt-[-8px]">Advanced search functionality for a commerce management app</h1>
                        <br />
                        <p>I designed and implemented a robust and scalable search system that allowed users to quickly and easily search and filter products by various attributes such as price, color, brand, and category.</p>
                        <br />
                        <p className="text-sm text-gray-600 mt-[-8px]">2023</p>
                        <br />
                        <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}