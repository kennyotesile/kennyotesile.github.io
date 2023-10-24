import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Header from "@/components/Header.js";
import Link from "next/link";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import {
    AspectRatioBox,
    AspectRatioBoxBody
} from "baseui/aspect-ratio-box";
import {
    Accordion,
    Panel
} from "baseui/accordion";

const dmSans = DM_Sans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Kenny Otesile — Technology Consulting and Development</title>
            </Head>

            <div className={dmSans.className}>
                <Header />

                <Section className="flex flex-col gap-20">
                    <div className="font-bold text-4xl md:text-8xl w-full">
                        Kenny Otesile is an Entrepreneur <span className="text-gray-300">+</span> Computer Scientist.
                    </div>
                    <div className="text-2xl w-full md:w-7/12 flex gap-8">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[-90px]">
                            <path d="M10 20V12H2V20H10Z" stroke="#141B34" strokeWidth="1.5" fill="rgb(209 213 219)" />
                            <path d="M2 12V10C2 6.68629 4.68629 4 8 4" stroke="#141B34" strokeWidth="1.5" />
                            <path d="M22 20V12H14V20H22Z" stroke="#141B34" strokeWidth="1.5" fill="rgb(209 213 219)" />
                            <path d="M14 12V10C14 6.68629 16.6863 4 20 4" stroke="#141B34" strokeWidth="1.5" />
                        </svg>
                        <div className="flex flex-col gap-10">
                            <span className="leading-[36px] flex flex-col gap-6">
                                <span>
                                    Welcome here! I am Kenny, the Founder and President of <span className="bg-black text-white px-2 inline-block">Kenny Otesile Global</span> – a creative entrepreneurship conglomerate with companies including <span className="bg-black text-white px-2  inline-block">Unulax Technologies,</span> <span className="bg-black text-white px-2  inline-block">Primiad Luxury,</span> and more.
                                </span>
                                <span>
                                    I mentor entrepreneurs at <span className="bg-black text-white px-2  inline-block">Kenny Otesile Fellowship,</span> and we together build businesses and products of all kinds across various industries globally.
                                </span>
                                <span>
                                    Through <span className="bg-black text-white px-2  inline-block">Kenny Otesile Consulting,</span> we provide organizations with valuable insights and innovative technology solutions that help them stand out in their respective fields.
                                </span>
                            </span>
                            <Image src="/signature.svg" width={232} height={56} />
                        </div>
                    </div>
                </Section>

                <Section className="hidden md:block">
                    <AspectRatioBox aspectRatio={16 / 9}>
                        <AspectRatioBoxBody
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            overrides={{
                                Block: {
                                    style: {
                                        background: "black",
                                        padding: "0px"
                                    },
                                },
                            }}
                        >
                            {/* <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F796339727%3Fh%3D1af2c28dd8%26app_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F796339727%2F1af2c28dd8&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1604587793-0914cd5715744abd9f128a2fb126ac168ff0bab2963769b62c3acdb101227687-d_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo" scrolling="no" allowFullScreen width={1280} height={720}></iframe> */}
                        </AspectRatioBoxBody>
                    </AspectRatioBox>
                    <div className="bg-black">
                    </div>
                </Section>

                <Section className="md:hidden">
                    <AspectRatioBox aspectRatio={16 / 9}>
                        <AspectRatioBoxBody
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            overrides={{
                                Block: {
                                    style: {
                                        background: "black",
                                        padding: "0px"
                                    },
                                },
                            }}
                        >
                            {/* <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F796339727%3Fh%3D1af2c28dd8%26app_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F796339727%2F1af2c28dd8&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1604587793-0914cd5715744abd9f128a2fb126ac168ff0bab2963769b62c3acdb101227687-d_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo" scrolling="no" allowFullScreen width={480} height={270}></iframe> */}
                        </AspectRatioBoxBody>
                    </AspectRatioBox>
                    <div className="bg-black">
                    </div>
                </Section>

                {/* <Section className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row gap-10">
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank" className="w-full md:w-1/2">
                            <figure className="flex flex-col gap-6">
                                <video width={640} height={360} controls autoPlay loop>
                                    <source src="/homepage-hero_1.mp4" type="video/mp4" />
                                </video>
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Unulax Money</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank" className="w-full md:w-1/2">
                            <figure className="flex flex-col gap-6">
                                <video width={640} height={360} controls autoPlay loop>
                                    <source src="/homepage-hero_1.mp4" type="video/mp4" />
                                </video>
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Unulax Commerce</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="flex items-center w-full">
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank">
                            <figure className="flex flex-col gap-6">
                                <Image src="/homepage-hero_1.png" width={1296} height={623} quality={100} />
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Renda Africa</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank" className="w-full md:w-1/2">
                            <figure className="flex flex-col gap-6">
                                <video width={640} height={360} controls autoPlay loop>
                                    <source src="/homepage-hero_1.mp4" type="video/mp4" />
                                </video>
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Rebirth World</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank" className="w-full md:w-1/2">
                            <figure className="flex flex-col gap-6">
                                <video width={640} height={360} controls autoPlay loop>
                                    <source src="/homepage-hero_1.mp4" type="video/mp4" />
                                </video>
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Rebirth TV</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="flex items-center w-full">
                        <Link href="https://play.google.com/store/apps/details?id=com.niyimakinde.mobile" target="_blank">
                            <figure className="flex flex-col gap-6">
                                <Image src="/homepage-hero_1.png" width={1296} height={623} quality={100} />
                                <figcaption className="flex flex-col">
                                    <span className="font-bold">Renda Africa</span>
                                    <span>Design, Web, Mobile (Android, iOS)</span>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </Section> */}

                <Section>
                    <Accordion
                        overrides={{
                            Header: {
                                style: {
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "28px",
                                    fontFamily: "",
                                    fontWeight: "400",
                                    fontSize: "23px",
                                    lineHeight: "36px",
                                    ":hover": {
                                        color: "white"
                                    },
                                }
                            },
                            Content: {
                                style: {
                                    backgroundColor: "white",
                                    color: "black",
                                    padding: "28px",
                                    fontFamily: ""
                                }
                            },
                            ToggleIcon: {
                                style: {
                                    width: "32px",
                                    height: "32px",
                                    color: "white"
                                }
                            }
                        }}
                    >
                        <Panel title="Innovation">
                            <span className="text-lg">We believe in pushing boundaries and exploring the uncharted territories of technology. Every project is an opportunity to craft inventive solutions that redefine what's possible, setting new benchmarks every day.</span>
                        </Panel>
                        <Panel title="Functionality">
                            <span className="text-lg">We understand that technology must not only dazzle, but also perform seamlessly. With meticulous attention to detail, we ensure that every aspect of our solutions is finely tuned to deliver optimum performance and reliability.</span>
                        </Panel>
                        <Panel title="Design">
                            <span className="text-lg">Our team of designers combines artistry with usability, creating interfaces that are not only visually striking but also intuitive to navigate. Through thoughtful design, we elevate user experiences, leaving a lasting impression on every interaction.</span>
                        </Panel>
                        <Panel title="Accessibility">
                            <span className="text-lg">We design with accessibility in mind, ensuring that our solutions are usable by all, regardless of ability or disability. From robust coding practices to intuitive interfaces, we are committed to making technology truly inclusive.</span>
                        </Panel>
                        <Panel title="Scalability">
                            <span className="text-lg">We build robust foundations that can adapt and expand as needs evolve, ensuring that investments stand the test of time.</span>
                        </Panel>
                    </Accordion>
                </Section>

                <Footer />
            </div>
        </>
    );
}
