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
                
                {/* <Link href="#">
                    <section id="hero" className="flex flex-col my-[64px] px-[132px] gap-[24px] items-center">
                        <div className="mb-8 px-40">
                            <h1 className="text-6xl font-bold text-center">Advanced search functionality for a business management engine</h1>
                            <br />
                            <p className="text-center">I designed and implemented a robust and scalable search system that allowed users to quickly and easily search and filter products by various attributes such as price, color, brand, and category.</p>
                            <br />
                            <p className="text-gray-600 text-center">Java, Spring Data Elasticsearch &nbsp;•&nbsp; Unulax Business</p>
                            <br />
                            <div className="text-center mt-2">
                                <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                            </div>
                        </div>
                        <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                    </section>
                </Link> */}

                <Link href="#">
                    <section id="hero" className="flex flex-col my-[64px] px-[132px] gap-[24px] items-center">
                        <div className="mb-8 px-40">
                            <h1 className="text-6xl font-bold text-center">Unulax Business: An enterprise business management engine</h1>
                            <br />
                            <p className="text-center text-lg">I designed and developed a SaaS solution for business owners and managers to efficiently manage inventory, ecommerce, CRM, finance and other tasks.</p>
                            <br />
                            <p className="text-gray-600 text-center">Ecommerce, CMS, CRM &nbsp;•&nbsp; Java, JavaScript &nbsp;•&nbsp; Unulax</p>
                            <br />
                            <div className="text-center mt-2">
                                <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                            </div>
                        </div>
                        <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                    </section>
                </Link>

                <section id="works_products" className="flex flex-col py-[48px] px-[132px] gap-[24px] bg-black text-white">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">PRODUCTS</p>
                        <Link href="#">More products</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Unulax Business: A business management engine</h2>
                            <br />
                            <p className="text-gray-200">Ecommerce, CMS, CRM, Java, JavaScript &nbsp;•&nbsp; Unulax</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Amobern Pay: A robust payments solution</h2>
                            <br />
                            <p className="text-gray-200">FinTech, Java, JavaScript &nbsp;•&nbsp; Amobern Technologies</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                        <div className="w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Apostle Niyi Makinde: An interactive media streaming and articles app</h2>
                            <br />
                            <p className="text-gray-200">Full stack, ML, JavaScript, Java &nbsp;•&nbsp; Apostle Niyi Makinde</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-white hover:bg-white hover:text-black font-bold">Read more</Link>
                        </div>
                    </div>
                </section>

                <section id="works_features" className="flex flex-col py-[48px] px-[132px] gap-[24px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">FEATURES</p>
                        <Link href="#">More features</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch &nbsp;•&nbsp; Unulax Business</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch &nbsp;•&nbsp; Unulax Business</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch &nbsp;•&nbsp; Unulax Business</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Advanced search functionality for a business management engine</h2>
                            <br />
                            <p className="text-gray-600">Java, Spring Data Elasticsearch &nbsp;•&nbsp; Unulax Business</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                    </div>
                </section>

                <section id="articles" className="flex flex-col py-[48px] px-[132px] gap-[24px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">ARTICLES</p>
                        <Link href="#">More articles</Link>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Understanding current security methods in software engineering: Authentication, authorization, tokens, etc.</h2>
                            <br />
                            <p>This is an excerpt of the body of this article.</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Understanding current security methods in software engineering: Authentication, authorization, tokens, etc.</h2>
                            <br />
                            <p>This is an excerpt of the body of this article.</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Understanding current security methods in software engineering: Authentication, authorization, tokens, etc.</h2>
                            <br />
                            <p>This is an excerpt of the body of this article.</p>
                            <br />
                            <Link href="#" className="px-5 py-2 border border-black hover:bg-black hover:text-white font-bold">Read more</Link>
                        </div>
                        <div className="w-1/4">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Understanding current security methods in software engineering: Authentication, authorization, tokens, etc.</h2>
                            <br />
                            <p>This is an excerpt of the body of this article.</p>
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