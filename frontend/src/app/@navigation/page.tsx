import Link from 'next/link';

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/docs">docs</Link>
      </li>
      <li>
        <Link href="/panel">panel</Link>
      </li>
    </ul>
  );
}
