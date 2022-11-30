import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,FreeMode } from "swiper";
import Loader from '../../../Icons/Loader/Loader'
import ButtonArrow from '../Buttons/ButtonsCarrousel/ButtonArrow'
import Cards from '../Cards/Cards'
import Titles from '../Titles/Titles'
import './Carrusel.css'
import "swiper/css";
import "swiper/css/navigation";

const Carrusel = ({ loading, data, dataCart, addCart, delFromCart, title, category }) => {

    return (
        <div className="container__category">
            <div className="category">
                <Titles title={title} />
                <div className="container__cards">
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode, Navigation]}
                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={30}
                        navigation={true}
                        >
                        {loading ?
                            <Loader />
                            :
                            data.products.map((data, index) => {
                                if (data.category === category.category1 || data.category === category.category2) {
                                    return <SwiperSlide >
                                        <Cards
                                            key={index}
                                            data={data}
                                            dataCart={dataCart}
                                            addCart={addCart}
                                            delFromCart={delFromCart}
                                        />
                                    </SwiperSlide>
                                }
                            }
                            )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Carrusel