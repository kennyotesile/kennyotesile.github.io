import Image from "next/image";
import Link from "next/link";

export default function() {
    return (
        <div className="py-[24px] px-[132px] bg-black text-white">
            <div className="flex justify-between">
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        {/* <Image src="/logo.svg" width={200} height={68} /> */}
                        K E N N Y &nbsp;&nbsp;O T E S I L E
                    </Link>
                </div>
                <div className="flex items-center gap-x-4">
                    <Link href="#">
                        <ion-icon name="logo-youtube" size="small"></ion-icon>
                    </Link>
                    <Link href="#">
                        <ion-icon name="logo-twitter" size="small"></ion-icon>
                    </Link>
                    <Link href="#">
                        <ion-icon name="logo-linkedin" size="small"></ion-icon>
                    </Link>
                    <Link href="#">
                        <ion-icon name="logo-instagram" size="small"></ion-icon>
                    </Link>
                    <Link href="#">
                        <ion-icon name="logo-facebook" size="small"></ion-icon>
                    </Link>
                </div>
            </div>

            <br />

            <div className="flex gap-x-10">
                <p className="text-sm text-gray-200 leading-[22px]">&copy; 2023 Kehinde Otesile</p>
                <ul className="flex gap-x-10">
                    <li>
                        <Link href="#" className="text-sm text-gray-200">Contact</Link>
                    </li>
                </ul>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}