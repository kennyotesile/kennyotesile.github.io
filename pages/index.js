import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DM_Sans } from '@next/font/google'
import Image from 'next/image'

const dmSans = DM_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)</title>
            </Head>
            
            <div>
              <Image src="/logo.svg" width={500} height={500} />
            </div>
        </>
    );
}