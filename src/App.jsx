import React, { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const API = [
    {
        "title": "Мезофильная закваска Danisco CHOOZIT MM...",
        "price": "1300",
        "oldPrice": "1800",
        "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065.png"
    },
    {
        "title": "Душистый перец горошком (100г)",
        "price": "200",
        "oldPrice": "320",
        "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065%20(3).png"
    },
    {
        "title": "Красный перец молотый (100г)",
        "price": "380",
        "oldPrice": "400",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(2).png?raw=true"
    },
    {
        "title": "Мускатный орех молотый (100г)",
        "price": "420",
        "oldPrice": "560",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(1).png?raw=true"
    },
    {
        "title": "Форма для твердого сыра 1 кг",
        "price": "1330",
        "oldPrice": "1800",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(4).png?raw=true"
    },
    {
        "title": "Форма для твердого сыра 1 кг",
        "price": "200",
        "oldPrice": "320",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(5).png?raw=true"
    },
    {
        "title": "Красный перец молотый (100г)",
        "price": "380",
        "oldPrice": "400",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(6).png?raw=true"
    },
    {
        "title": "Мускатный орех молотый (100г)",
        "price": "420",
        "oldPrice": "560",
        "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(7).png?raw=true"
    }
  ]

  const [card,setCard] = useState([])
  function addToCard(item) {
    setCard([...card,item])
  }
  function deleteToCard(itemToDelete) {
    const index = card.findIndex(item => item === itemToDelete)
    if (index > -1) {
      card.splice(index, 1)
      setCard([...card])
    }
  }

  return (
    <div>
      <Header length = {card.length}/>
      <Routes>
        <Route path='/' element={<Home API={API} card={card} addToCard={addToCard}/>}/>
        <Route path='/cart' element={<Cart card={card} deleteToCard={deleteToCard}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
