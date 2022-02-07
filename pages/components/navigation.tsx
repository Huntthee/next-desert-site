import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <div className="flex justify-around text-center border-b border-amaranth">
        <Link href="/">
          <a className="text-amaranth hover:text-ampurp rounded-full">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="text-amaranth hover:text-ampurp rounded-full">Portfolio</a>
        </Link>
        <Link href="/commissions">
          <a className="text-amaranth hover:text-ampurp rounded-full">Commissions</a>
        </Link>
        <Link href="/policy">
          <a className="text-amaranth hover:text-ampurp rounded-full">Policy</a>
        </Link>
        <Link href="/waitlist">
          <a className="text-amaranth hover:text-ampurp rounded-full">Waitlist</a>
        </Link>
      </div>
    </>
  );
}