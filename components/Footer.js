import Image from "next/image";
import Link from "next/link";

export default function() {
    return (
        <div className="py-[24px] px-[24px] md:px-[132px] bg-black text-white flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6  justify-between">
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        {/* <Image src="/logo.svg" width={200} height={68} /> */}
                        K E N N Y &nbsp;&nbsp;O T E S I L E
                    </Link>
                </div>
                <div className="flex items-center gap-x-8">
                    <Link href="https://youtube.com/@kennyotesile" target="_blank">
                        <ion-icon name="logo-youtube" size="small"></ion-icon>
                    </Link>
                    <Link href="https://twitter.com/kennyotesile" target="_blank">
                        <ion-icon name="logo-twitter" size="small"></ion-icon>
                    </Link>
                    <Link href="https://linkedin.com/in/kennyotesile" target="_blank">
                        <ion-icon name="logo-linkedin" size="small"></ion-icon>
                    </Link>
                    <Link href="https://instagram.com/kennyotesile" target="_blank">
                        <ion-icon name="logo-instagram" size="small"></ion-icon>
                    </Link>
                    <Link href="https://facebook.com/thekennyotesile" target="_blank">
                        <ion-icon name="logo-facebook" size="small"></ion-icon>
                    </Link>
                </div>
            </div>

            <div className="flex gap-x-8 mt-[-4px]">
                <p className="text-sm text-gray-200 leading-[22px]">&copy; 2023 Kehinde Otesile</p>
                <ul className="flex gap-x-8">
                    <li>
                        <Link href="/about" className="text-sm text-gray-200">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-sm text-gray-200">Contact</Link>
                    </li>
                </ul>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}