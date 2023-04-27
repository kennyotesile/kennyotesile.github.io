import Image from "next/image";
import Link from "next/link";

export default function() {
    return (
        <div className="flex h-[68px] mx-[24px] md:mx-[132px] items-center justify-between border-b-[1px] border-black dark:border-white">
            <div>
                <Link href="/" className="text-2xl font-bold">
                    {/* <Image src="/logo.svg" width={200} height={68} /> */}
                    K E N N Y &nbsp;&nbsp;O T E S I L E
                </Link>
            </div>
            <div className="flex">
                <nav className="flex items-center hidden md:inline-block">
                    <ul className="flex items-center gap-x-8 mr-8">
                        {/* <li>
                            <Link href="/products">PRODUCTS</Link>
                        </li>
                        <li>
                            <Link href="/research">RESEARCH</Link>
                        </li>
                        <li>
                            <Link href="/works">WORKS</Link>
                        </li>
                        <li>
                            <Link href="/about">ME</Link>
                        </li> */}
                    </ul>
                </nav>
                <ul className="flex items-center gap-x-8">
                    {/* Search icon */}
                    {/* <li className="hidden md:inline-block">
                        <Link href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        </Link>
                    </li> */}
                    {/* Shop icon */}
                    {/* <li className="hidden md:inline-block">
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </Link>
                    </li> */}
                    {/* Multi-language icon */}
                    {/* <li className="hidden md:inline-block">
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                        </Link>
                    </li> */}
                    {/* Menu icon */}
                    {/* <li className="md:hidden">
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-9 h-9 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}