import React from 'react';
import reklama from '../assets/reklama.svg';
import right from '../assets/right.svg';
import reklama2 from '../assets/reklama2.svg';
import reklama3 from '../assets/reklama3.svg';
import reklama4 from '../assets/reklama4.svg';

const Main = ({ addToCard }) => {

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
    ];
    API[0].title = 'Мезофильная закваска Danis...'





    return (
        <>
            <main>
                <section className='flex justify-center item-center mt-5'>

                    <div className=' ml-5 mt-5 w-[17%] h-[90vh] border-[2px] border-[#E6E6E6]'>
                        <div className='flex justify-between item-center bg-[#FBE8BB] border-bottom-[5px] border-[black]'>
                            <p>Закваски для сыра</p>

                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Хлористый кальций</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Кисломолочные закваски</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div>
                            <p>Красители для сыра</p>
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Специи для сыра</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div>
                            <p>Оборудование</p>
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Формы для сыра</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1' >
                            <p>Латексное покрытие</p>
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Воск для сыра</p>
                        </div>
                        <div className='flex justify-between item-center bg-[#FBE8BB] border-bottom-[5px] border-[black]'>
                            <div className='flex justify-between item-center bg-[#FBE8BB] border-bottom-[5px] border-[black]'>
                                <p>Закваски для сыра</p>
                            </div>

                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Специи для сыра</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div>
                            <p>Оборудование</p>
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Формы для сыра</p>
                            <img className='w-[10%]' src={right} alt="" />
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1' >
                            <p>Латексное покрытие</p>
                        </div>
                        <div className='border  h-[38px] flex item-center justify-between  pt-1'>
                            <p>Воск для сыра</p>
                        </div>

                    </div>




                    <div className='flex ml-5  mt-5 w-[72%] h-[160vh] border-[2px] border-[#E6E6E6]'>
                        <div>
                            <a href="">Популярные товары</a>
                            <a href="">Акции</a>
                            <div className='flex flex-wrap gap-4 justify-center item-center'>
                                {API.map((item) => {
                                    return (

                                    <div class="w-[225px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img class="p-8 rounded-t-lg" src={item.image} alt="product image" />
                                        </a>
                                        <div class="px-5 pb-5">
                                            <a href="#">
                                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                            </a>
                                            <div class="flex items-center mt-2.5 mb-5">
                                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <span class="text-2xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                                <button onClick={() => addToCard(item)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>





                    </div>

                </section>
                <div className='flex justify-center item-center mt-5'>
                    <img src={reklama} alt="" />
                </div>

                <section>
                    <div>
                        <img src={reklama2} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <img src={reklama3} alt="" />
                    </div>
                    <h2 className='ml-[80px] gap-5  mt-5 text-2xl font-bold mb-5x'>наше оборудование</h2>
                    <div className=' flex justify-center item-center' >

                        <img src={reklama4} alt="" />
                    </div>
                </section>

            </main>
        </>
    );
}

export default Main;
