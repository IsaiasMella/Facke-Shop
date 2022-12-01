import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import Loader from '../../../Icons/Loader/Loader'
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
                        slidesPerGroup={1}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView:1
                            },
                            480: {
                                slidesPerView:2,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView:3,
                                spaceBetween:30
                            },
                            1024: {
                                slidesPerView:4,
                                spaceBetween:30
                            },
                            // 1280: {
                            //     slidesPerView:5,
                            //     spaceBetween:30
                            // },
                        }}
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