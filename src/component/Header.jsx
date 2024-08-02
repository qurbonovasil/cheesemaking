import React from 'react';
import location from '../assets/location.svg';
import soat from '../assets/soat.svg';
import account from '../assets/account.svg';
import logo from '../assets/logo.svg';
import dastavka from '../assets/datavka.svg';
import skidka from '../assets/skidka.svg';
import zashita from '../assets/zashita.svg';
import telegram from '../assets/telegram.svg';
import whatsapp from '../assets/whatsapp.svg';
import messenger from '../assets/messenger.svg';
import savatcha from '../assets/savatcha.svg';
import { Link } from 'react-router-dom';

const Header = ({ length }) => {
  return (
    <div>
      <>
        <div className='flex ml-20 mt-2 '>
          <img src={location} alt="" />
          <p>Ваш город: </p>
          <select name="" id="">
            <option value="uzbekiston">Москва</option>
            <option value="uzbekiston">samarqand</option>
            <option value="uzbekiston">buxoro</option>
            <option value="uzbekiston">toshkent</option>
          </select>
          <img className='ml-5' src={soat} alt="" />
          <p>Пн-Пт 9:00 - 19:00</p>
          <div className='ml-[250px] flex gap-5'>
            <a href="#">О компании</a>
            <a href="#">Преимущества</a>
            <a href="#">Акционные товары</a>
            <img src={account} alt="" />
            <a href="#">Войти в аккаунт</a>
          </div>
        </div>
        <nav >
          <div className='flex justify-between item-center mt-5 ml-20 mr-20'>
            <Link to={"/"}>

              <img src={logo} alt="" />
            </Link>
            <div className='flex  ml-10'>
              <img src={dastavka} alt="" className='h-10' />
              <p>Бесплатная доставка</p>
            </div>
            <div className='flex'>
              <img src={skidka} alt="" className='h-10' />
              <p>Скидка при оплате на сайте</p>
            </div>
            <div className='flex'>
              <img src={zashita} alt="" className='h-10' />
              <p>Защита покупателей</p>
            </div>
            <div className='flex mt-3'>
             <a href="https://t.me/telegram.com"> <img src={telegram} alt="" className='h-8' /></a>
             <a href="https://t.me/whatsapp.com"><img src={whatsapp} alt="" className='h-8' /></a>
             <a href="https://t.me/messenger.com"> <img src={messenger} alt="" className='h-8' /></a>
              
              
            </div>
            <div className='w-60 ml-10 '>
              <p>+8 916 460-19-60</p>
              <button className='border border-yellow-500 p-2 text-yellow-500'>Заказать звонок</button>
            </div>
            <div className='flex w-60'>
              <p>Ваша корзина <br />
                1680 руб. </p>
              <Link to={"/cart"}>
                <img src={savatcha} alt="" className='h-10 ml-4' />
                <span>{length}</span>
              </Link>
            </div>
          </div>
          <div className='flex j item-center mt-5 ml-20 '>
            <div className='flex gap-4'>
              <a href="">Рецепты </a>
              <a href="">Доставка и оплата </a>
              <a href=" ">Рецепты</a>
              <a href=" ">Акции</a>
              <a href=" ">Отзывы</a>
              <a href=" ">Вопросы и ответы</a>
              <a href=" ">Контакты</a>
            </div>
            <input className='w-80 h-5 text-center p-3 ml-[205px] p-0' type="text" placeholder=' Введите название товара или артикул' />
          </div>
        </nav>
      </>

    </div>
  );
}

export default Header;
