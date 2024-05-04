
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between px-3 py-1">
                <Link href="/">
                    <Image src="/assets/images/epic.png" width={128} height={38} alt='logo' className='p-3' />
                </Link>

                <SignedIn>
                    <nav className="md:flex justify-between w-full max-w-xs hidden">
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className='flex w-32 justify-end gap-3'>
                    <SignedOut>
                        <SignInButton>
                            <Link href="/sign-in">
                                LogIn
                            </Link>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                            <MobileNav/>
                        </SignedIn>
                </div>
            </div>
        </header>
    )
}

export default Header