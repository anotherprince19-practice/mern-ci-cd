import React, {useEffect, useState} from 'react';

export default function App(){
  const [msg, setMsg] = useState('loading...');
  useEffect(()=> {
    fetch('http://localhost:5000/api/hello')
      .then(r => r.json())
      .then(j => setMsg(j.message))
      .catch(()=> setMsg('Could not reach API'));
  }, []);
  return (
    <div style={{fontFamily:'Arial',padding:20}}>
      <h1>MERN scaffold (with nginx-proxy & Let's Encrypt)</h1>
      <p>{msg}</p>
      <p>Visit <code>/api/health</code> for backend health.</p>
    </div>
  );
}
