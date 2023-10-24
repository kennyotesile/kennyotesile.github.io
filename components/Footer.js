import Image from "next/image";
import Link from "next/link";

export default function () {
    return (
        <div className="p-5 md:py-6 md:px-20 2xl:px-80 bg-black text-white flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6  justify-between">
                <div>
                    <Link href="/">
                        <Image src="/logo-inverted.svg" width={228} height={18} />
                    </Link>
                </div>
                <div className="flex items-center gap-x-8">
                    <Link href="https://instagram.com/kennyotesile" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                    <Link href="https://linkedin.com/in/kennyotesile" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                    <Link href="https://twitter.com/kennyotesile" target="_blank" className="h-[28px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1962 3H16.5721L11.3827 8.92981L17.4875 17H12.7087L8.96298 12.1067L4.68221 17H2.30288L7.8524 10.6563L2 3H6.9L10.2822 7.4726L14.1962 3ZM13.3615 15.5798H14.6774L6.18317 4.34615H4.76971L13.3615 15.5798Z" fill="white" />
                        </svg>
                    </Link>
                    <Link href="https://youtube.com/@kennyotesile" target="_blank">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </Link>
                    {/* <Link href="https://facebook.com/thekennyotesile" target="_blank">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link> */}
                </div>
            </div>

            <div className="flex gap-x-8 mt-[-4px] text-gray-200 dark:text-gray-500">
                <Link href="/" className="text-base leading-[1.75rem]">Kenny Otesile Global</Link>
                <ul className="flex gap-x-8">
                    {/* <li>
                        <Link href="/" className="text-base">About</Link>
                    </li> */}
                    <li>
                        <Link href="mailto:contact@kennyotesile.com" className="text-base">Contact</Link>
                    </li>
                </ul>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}