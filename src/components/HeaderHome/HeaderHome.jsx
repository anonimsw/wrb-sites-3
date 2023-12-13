import React from 'react'
import '../HeaderHome/HeaderHome.scss'
import background from '../../assets/promo.jpg'
import companiy from '../../assets/about.jpg'

const HeaderHome = () => {
    return (
        <header className="header--home">
            <div className='header--block--1'>
                <div className="header--top">
                    <img src={background} alt="" />
                    <h2>
                        <span>МЫ ПРОИЗВОДИМ </span> ИСПОЛЬЗУЯ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ!
                    </h2>
                </div>
            </div>
            <div className="header--block--2">
                <div className="container">
                    <div className="block--2--left">
                        <div className="block--2--left--text">
                            <img src={companiy} alt="" />
                            <p>
                                3
                                <span>
                                    года
                                    <br />
                                    на рынке Узбекистана!
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="block--2--right">
                        <h2 className='block--2--text--1'>
                            01
                            <small>
                                О КОМПАНИИ
                            </small>
                        </h2>
                        <span>
                            Компания ORCHIDEE PHARM известна своими качественными и международными препаратами, зарегистрированными всеми государственными и ответственными организациями!
                        </span>
                        <p className='block--2--text--2'>
                            Компания ORCHIDEE PHARM была основана 9 июня 2020 года и работает в составе корпорации «XOS CORPORATION», имеющей многолетний опыт работы в качестве местного производителя.
                        </p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderHome