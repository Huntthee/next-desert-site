import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/commissions">
        <a>Commissions</a>
      </Link>
      <Link href="/policy">
        <a>Policy</a>
      </Link>
      <Link href="/waitlist">
        <a>Waitlist</a>
      </Link>
    </>
  );
}