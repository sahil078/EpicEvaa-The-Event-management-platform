import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex items-center justify-between wrapper flex-col gap-4 px-3 py-2 sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/epic.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2024 EpicEvaa... All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer