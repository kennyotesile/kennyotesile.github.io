import Head from "next/head"
import styles from "../styles/Home.module.css"
import { DM_Sans } from "next/font/google"
import Image from "next/image"
import Header from "@/components/Header.js"
import Link from "next/link"
import Footer from "@/components/Footer"

const dmSans = DM_Sans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Kenny Otesile – Computer scientist and entrepreneur</title>
            </Head>
            
            {/* <div className={[dmSans.className, ""].join(" ")}>
                <Header />

                <section id="hero" className="flex flex-col my-[64px] px-[24px] md:px-[264px] gap-[48px] items-center">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-center">Unulax Business – an enterprise business and commerce management platform</h1>
                        <br />
                        <p className="text-center text-lg">I designed and developed a SaaS solution for business managers to efficiently manage inventory, ecommerce stores, CRM, finance and other aspects of their businesses.</p>
                        <br />
                        <p className="text-gray-600 dark:text-gray-400 text-center">Ecommerce, CMS, CRM &nbsp;•&nbsp; Java, Spring, JavaScript, React (Next.js), AWS, etc.</p>
                        <br />
                        <div className="text-center mt-4">
                            <Link href="/works/unulax-business" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                        </div>
                    </div>
                    <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                </section>

                <section id="works_products" className="flex flex-col py-[48px] pb-[56px] px-[24px] md:px-[132px] gap-[32px] bg-black dark:bg-white text-white dark:text-black">
                    <div id="about" className="pb-[32px] text-gray-200 dark:text-gray-800 text-3xl md:text-4xl font-semibold w-full md:w-[80%]">
                        I am Kenny Otesile, a computer scientist, AI software engineer, and entrepreneur. I created <Link href="#" className="border-white/30 border-b-[3.5px] hover:border-white transition-[border-bottom] duration-300 ease-in-out">Unulax Business</Link> and other enterprise products.
                    </div>

                    <div className="flex justify-between">
                        <p className="text-lg font-bold">WORKS</p>
                        <Link href="#">More works</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[24px]">
                        <div className="w-full md:w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Amobern App – an ecommerce store</h2>
                            <br />
                            <p className="text-gray-200 dark:text-gray-500">Ecommerce &nbsp;•&nbsp; Java, Spring, Elasticsearch, JavaScript, React (Next.js), etc.</p>
                            <br />
                            <div className="mt-3">
                                <Link href="#" className="px-5 py-2 border border-white dark:border-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white font-bold">Read more</Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Amobern Pay – a modern payments solution</h2>
                            <br />
                            <p className="text-gray-200 dark:text-gray-500">FinTech &nbsp;•&nbsp; Java, Spring, JavaScript, React (Next.js), AWS, etc.</p>
                            <br />
                            <div className="mt-3">
                                <Link href="#" className="px-5 py-2 border border-white dark:border-black hover:bg-whitehover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white font-bold">Read more</Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            <br />
                            <h2 className="font-bold text-2xl">Apostle Niyi Makinde – an interactive media app</h2>
                            <br />
                            <p className="text-gray-200 dark:text-gray-500">Media &nbsp;•&nbsp; Java, Spring, Elasticsearch, JavaScript, React Native (Expo CLI), etc.</p>
                            <br />
                            <div className="mt-3">
                                <Link href="#" className="px-5 py-2 border border-white dark:border-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white font-bold">Read more</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="articles" className="flex flex-col py-[48px] pb-[56px] px-[24px] md:px-[132px] gap-[32px]">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">ARTICLES</p>
                        <Link href="#">More articles</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[24px]">
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">How Computer Science is Changing the Field of Medicine</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">Exploring the Intersection of Computer Science and Neuroscience</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">How to Implement and Optimize Reinforcement Learning Algorithms</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">How to Use Bayesian Networks for Probabilistic Reasoning</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[24px]">
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">10 Algorithms Every Computer Scientist Should Know</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">The Impact of Computer Science on Education and Learning</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">The Ethics of Artificial Intelligence: Balancing Progress and Responsibility</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-[16px]">
                            <div className="w-5/12 md:w-full">
                                <Image src="/homepage-hero_2.svg" alt="" width={568} height={408} />
                            </div>
                            <div className="flex flex-col gap-[16px] w-7/12 md:w-full">
                                <h2 className="font-bold text-2xl">How to Build and Train Convolutional Neural Networks for Computer Vision</h2>
                                <p>This is an excerpt of the body of this article.</p>
                                <div className="mt-3">
                                    <Link href="#" className="px-5 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div> */}

            <div className={dmSans.className}>
                <Header />

                <section id="about" className="py-[48px] px-[24px] md:px-[132px]">
                    <article className="lg:w-[60%]">
                        <h1 className="font-bold text-5xl">Kenny Otesile</h1>
                        <br />
                        <p>Kenny Otesile is an entrepreneur and computer scientist. He is the Founder of <Link href="https://unulax.com" target="_blank" className="border-b-[1px] border-black hover:border-b-[2px]">Unulax</Link>; and Co-Founder and Principal Consultant of <Link href="https://amoberntech.com" target="_blank" className="border-b-[1px] border-black hover:border-b-[2px]">Amobern Technologies</Link>.</p>
                        <br />
                        <p>Skilled in computer programming and software engineering, Kenny's work cuts across full-stack software engineering, and software design and architecture. He is interested in the intersection of artificial intelligence with society, such as in finance technology, and human-computer interaction.</p>
                        <br />
                        <p>He is currently building <Link href="https://unulax.com" target="_blank" className="border-b-[1px] border-black hover:border-b-[2px]">an integrated suite of AI-powered products for work, play, and more</Link>. Via <Link href="https://amoberntech.com" target="_blank" className="border-b-[1px] border-black hover:border-b-[2px]">Amobern Technologies</Link>, he advises and provides professional services to companies innovating their processes and products with technology.</p>
                    </article>
                </section>

                <Footer />
            </div>
        </>
    );
}