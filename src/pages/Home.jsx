import React from 'react';
import Header from '../component/Header';
import Main from '../component/Main';
import Card from '../component/Card';
import Footer from '../component/Footer';

const Home = ({ addToCard, card}) => {
  return (
    <div>
      <Main card={card} addToCard={addToCard}/>
      <Card/>
    </div>
  );
}

export default Home;
