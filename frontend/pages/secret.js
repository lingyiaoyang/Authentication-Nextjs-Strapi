import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  //this is handle when page is not yet loading then return nothing
  if (typeof window !== 'undefined' && loading) return null;
  if (!session) {
    return (
      <main>
        <h1>You aren't signed in,pls sign in first</h1>
      </main>
    );
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>{content}</p>
    </div>
  );
}
