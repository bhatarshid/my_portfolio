import Image from "next/image"
import Link from "next/link"

export const LeftbarComponent = function() {
  return <div className="bg-white flex flex-col justify-center items-center w-14 py-5 rounded-sm fixed left-0 top-1/2 transform -translate-y-1/2">
    <Link href="https://linkedin.com/in/bhatars101">
      <Image className="bg-black rounded-md mb-5" src="/linkedin-ico.png" alt="linkedin" width="30" height="30"/>
    </Link>
    <Link href="https://github.com/bhatarshid">
      <Image className="filter grayscale invert sepia hue-rotate-180 brightness-200 rounded-md mb-5" src="/github-ico.png" alt="github" width="30" height="30"/>
    </Link>
    <Link href="https://x.com/Arsh1d_101">
      <Image className="filter grayscale invert sepia hue-rotate-180 brightness-200 rounded-md" src="/twitter-ico.png" alt="twitter" width="30" height="30"/>
    </Link>
  </div>
}