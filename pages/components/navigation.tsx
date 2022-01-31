import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <div className="text-center my-3">
        <Link href="/">
          <a className="text-amaranth bg-lorange hover:text-ampurp rounded-full">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="text-amaranth bg-lorange hover:text-ampurp rounded-full">Portfolio</a>
        </Link>
        <Link href="/commissions">
          <a className="text-amaranth bg-lorange hover:text-ampurp rounded-full">Commissions</a>
        </Link>
        <Link href="/policy">
          <a className="text-amaranth bg-lorange hover:text-ampurp rounded-full">Policy</a>
        </Link>
        <Link href="/waitlist">
          <a className="text-amaranth bg-lorange hover:text-ampurp rounded-full">Waitlist</a>
        </Link>
      </div>
    </>
  );
}