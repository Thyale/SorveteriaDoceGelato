import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Img1 from "../assets/Images/ImgCapaHome1.png"
import Img2 from "../assets/Images/ImgCapaHome2.png"
import Img3 from "../assets/Images/ImgCapaHome3.png"


function HomeSwiper() {
  return (
    <section className='HomeCapa'>
                <Swiper pagination={true} modules={[Pagination]} className='HomeCapa_Swiper'>
                    <SwiperSlide><img src={Img1} alt="Imagem Rotativa presente no banner da página web" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="Imagem Rotativa presente no banner da página web" /></SwiperSlide>
                    <SwiperSlide><img src={Img3} alt="Imagem Rotativa presente no banner da página web" /></SwiperSlide>
                </Swiper>
    </section>
  )
}

export default HomeSwiper