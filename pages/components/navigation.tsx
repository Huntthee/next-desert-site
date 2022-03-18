import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <div className="flex justify-around text-center border-b border-amaranth lg:pt-3 lg:border-b-2 lg:border-amaranth lg:justify-center">
        <Link href="/">
          <a className="text-ampurp hover:text-amaranth rounded-full lg:text-white lg:bg-amaranth lg:px-5 lg:rounded-b lg:mb-0 lg:hover:bg-ampurp lg:hover:text-white lg:mx-3">
            Home
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="text-ampurp hover:text-amaranth rounded-full lg:text-white lg:bg-amaranth lg:px-5 lg:rounded-b lg:mb-0 lg:hover:bg-ampurp lg:hover:text-white lg:mx-3">
            Portfolio
          </a>
        </Link>
        <Link href="/commissions">
          <a className="text-ampurp hover:text-amaranth rounded-full lg:text-white lg:bg-amaranth lg:px-5 lg:rounded-b lg:mb-0 lg:hover:bg-ampurp lg:hover:text-white lg:mx-3">
            Commissions
          </a>
        </Link>
        <Link href="/policy">
          <a className="text-ampurp hover:text-amaranth rounded-full lg:text-white lg:bg-amaranth lg:px-5 lg:rounded-b lg:mb-0 lg:hover:bg-ampurp lg:hover:text-white lg:mx-3">
            Policy
          </a>
        </Link>
        <Link href="/waitlist">
          <a className="text-ampurp hover:text-amaranth rounded-full lg:text-white lg:bg-amaranth lg:px-5 lg:rounded-b lg:mb-0 lg:hover:bg-ampurp lg:hover:text-white lg:mx-3">
            Waitlist
          </a>
        </Link>
      </div>
    </>
  );
}