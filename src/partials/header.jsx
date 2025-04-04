"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    return (
    <header className={`header z-30 sticky top-0 shadow-sm`}>
        <div className="bg-white">
            <div className="flex items-center justify-between py-2 px-12">
                <div className="flex items-center gap-x-2">
                    <img src="/media/noovah-logo.png" alt="Noovah" className="h-25 w-25" />
                    {/* <span className="text-[30pt] font-light hidden md:block">NOORVAH</span> */}
                </div>
                <nav>
                <style jsx>{`
                    .font-blue-custom {
                    color: #309FED;
                    }
                    p {
                    color: blue;
                    }
                `}</style>
                    <ul className="flex gap-x-4">
                        <li>
                            <Link href="/"><a className={`${pathname === "/" && 'font-blue-custom'}`}>Home</a></Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/about-us"><a className={`${pathname.includes("/about-us") && 'font-blue-custom'}`}>About</a></Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/products"><a className={`${pathname.includes("/products") && 'font-blue-custom'}`}>Products</a></Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link href="/contact"><a className={`${pathname.includes("/contact") && 'font-blue-custom'}`}>Contact</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}
export default Header;