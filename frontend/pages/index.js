import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        border: '1px solid red',
      }}
    >
      <button>
        <Link href='/login'>Login</Link>
      </button>
      <button>
        <Link href='/register'>Register</Link>
      </button>
    </div>
  );
}
