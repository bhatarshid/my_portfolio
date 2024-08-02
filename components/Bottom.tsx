import Image from 'next/image';
import Link from 'next/link';

export const BottomComponent = function() {
  return <div className="bg-black text-white sm:px-6 lg-px-8 font-sans pt-20">
    <div className="flex flex-row justify-between px-10 pb-16">
      <div className="w-2/5">
        <h2 className="font-bold text-xl pb-5">Arshid Bhat</h2>
        <p className="font-small text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>
      <div className="w-2/12">
        <h2 className="font-bold text-xl pb-5 flex justify-center">SOCIAL</h2>
        <div className="flex flex-row flex-wrap justify-end  space-x-5 pr-4">
          <Link href="https://linkedin.com/in/bhatars101">
            <Image className="rounded-xl" src="/linkedin-ico.png" alt="linkedin" width="30" height="30"/>
          </Link>
          <Link href="https://github.com/bhatarshid">
            <Image className="rounded-xl" src="/github-ico.png" alt="github" width="30" height="30"/>
          </Link>
          <Link href="https://x.com/Arsh1d_101">
            <Image className="rounded-xl" src="/twitter-ico.png" alt="twitter" width="30" height="30"/>
          </Link>
        </div>
      </div>
    </div>
    <hr className="border-t-1 border-gray-500 mx-8" />
    <div className="py-8">
      <p className="text-xs text-center">© Copyright 2024. Made by <u><strong>Arshid Bhat</strong></u></p>
    </div>
  </div>
}