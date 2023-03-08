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
                        <Image src="/homepage-hero_568x408.jpeg" alt="" width={568} height={408} />
                    </div>
                    <div className="w-1/2">
                        <p className="font-bold">WORKS</p>
                        <br />
                        <h1 className="text-6xl font-bold">Introducing ChatGPT</h1>
                        <br />
                        <p>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>
                        <br />
                        <p>By <span className="font-bold">Kenny Otesile</span></p>
                        <br />
                        <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white">Read post</Link>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}