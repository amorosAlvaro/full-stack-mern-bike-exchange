import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const token = useSelector((store) => store.login);

  return <div>HOME</div>;
}

export default Home;
