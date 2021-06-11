import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

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
      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div>You can now access our pages now!</div>
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </div>
    </div>
  );
}
