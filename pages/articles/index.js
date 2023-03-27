import Head from "next/head"
import styles from "../../styles/Home.module.css"
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

export default function Articles() {
    return (
        <>
            <Head>
                <title>Articles – Kenny Otesile</title>
            </Head>
            
            <div className={dmSans.className}>
                <Header />

                <Footer />
            </div>
        </>
    );
}