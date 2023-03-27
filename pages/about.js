import Head from "next/head"
import styles from "../styles/Home.module.css"
import { DM_Sans } from "next/font/google"
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

                <section id="about" className="py-[48px] px-[132px]">
                    <article className="lg:w-[60%]">
                        <h1 className="font-bold text-5xl">Kenny Otesile</h1>
                        <br />
                        <p>Kenny Otesile is an entrepreneur, computer scientist and writer. He is the founder and CTO of <Link href="#" className="border-b-[1px] border-black hover:border-b-[2px]">Unulax</Link>{/* and Kenny Otesile, Inc */}; co-founder and CTO of <Link href="#" className="border-b-[1px] border-black hover:border-b-[2px]">Amobern Technologies</Link>; and CTO of <Link href="#" className="border-b-[1px] border-black hover:border-b-[2px]">Rebirth Global</Link> and <Link href="#" className="border-b-[1px] border-black hover:border-b-[2px]">Niyi Makinde, Inc</Link>{/* ; and president of Kenny Otesile Foundation */}.</p>
                        <br />
                        <p>Skilled in computer programming and software engineering, Kenny's work cuts across full-stack software engineering, artificial intelligence engineering, and software design and architecture. He is interested in the intersection of artificial intelligence with society, such as in finance technology, and human-computer interaction. His works and writings can be found at <Link href="/" className="border-b-[1px] border-black hover:border-b-[2px]">kennyotesile.com</Link>.</p>
                        <br />
                        <p>He is open to working with or consulting for companies solving challenging problems with advanced and robust technologies.</p>
                    </article>
                </section>

                <Footer />
            </div>
        </>
    );
}