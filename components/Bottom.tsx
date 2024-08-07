import Image from 'next/image';
import Link from 'next/link';

export const BottomComponent = function() {
  return <div className="bg-black text-white sm:px-6 lg:px-8 pt-10">
    <div className="flex flex-col-reverse sm:flex-row justify-between mx-8 py-10">
      <div className="w-4/5 sm:w-3/5">
        <h3 className="font-bold text-xl pb-5 text-start">ARSHID BHAT</h3>
        <p className="text-justify text-base sm:text-lg font-medium">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.  </p>
      </div>
      <div className="mb-8 sm:mb-0">
      <h3 className="font-bold text-xl pb-5 text-start">SOCIAL</h3>
        <div className="flex flex-row space-x-4 sm:space-x-2">
          <Link href="https://linkedin.com/in/bhatars101">
            <Image className="rounded-xl" src="/linkedin-ico.png" alt="linkedin" width="28" height="28"/>
          </Link>
          <Link href="https://github.com/bhatarshid">
            <Image className="rounded-xl" src="/github-ico.png" alt="github" width="28" height="28"/>
          </Link>
          <Link href="https://x.com/Arsh1d_101">
            <Image className="rounded-xl" src="/twitter-ico.png" alt="twitter" width="28" height="28"/>
          </Link>
        </div>
      </div>
    </div>
    <hr className="border-t-2 rounded-full border-gray-500 mx-8" />
    <div className="py-8 mx-8">
      <p className="text-xs text-center">© Copyright 2024.</p>
      <p className="text-xs text-center">Designed and developed by <u><strong>Arshid Bhat</strong></u></p>
    </div>
  </div>
}