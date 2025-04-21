import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import '../styles/HuquqiyHujjatlar.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HuquqiyHujjatlar() {
    const cards = [
        {
            id: 1,
            header: "Yakka Tartibdagi Tadbirkorlik (YaTT)",
            body: "Yuridik shaxs tashkil etmasdan kichik biznes yuritish uchun eng oddiy shakl.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> 88 ta cheklangan faoliyat (chakana savdo, xizmatlar, ta’mirlash).<br/>" +
                  "<strong>Soliqlar:</strong> Aylanma 100 mln so‘mgacha qat’iy soliq yoki 12% JShDS, 100 mln – 1 mlrd so‘m aylanma solig‘i, 1 mlrd so‘mdan yuqori QQS.<br/>" +
                  "<strong>Hisobot:</strong> Minimal, aylanma 100 mln so‘mgacha soddalashtirilgan.<br/>" +
                  "<strong>Afzallik:</strong> Ro‘yxatdan o‘tish oson (30 daqiqa, 340,000 so‘m), soliq tizimi oddiy.<br/>" +
                  "<strong>Kamchilik:</strong> Shaxsiy mol-mulk bilan javobgarlik, faoliyat turlari cheklangan."
        },
        {
            id: 2,
            header: "Mas’uliyati Cheklangan Jamiyat (MChJ)",
            body: "Bir yoki bir nechta ta’sischilar uchun yuridik shaxs sifatida biznes yuritish.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Qonun bilan taqiqlanmagan har qanday faoliyat (litsenziya bilan).<br/>" +
                  "<strong>Soliqlar:</strong> Umumbelgilangan (QQS, foyda solig‘i) yoki soddalashtirilgan (4-8% aylanma solig‘i).<br/>" +
                  "<strong>Hisobot:</strong> Standart buxgalteriya, soliq va statistika hisobotlari.<br/>" +
                  "<strong>Afzallik:</strong> Shaxsiy mol-mulk xavfsiz, ko‘p ta’sischilar, yirik loyihalarga mos.<br/>" +
                  "<strong>Kamchilik:</strong> Murakkab hisobot, ro‘yxatdan o‘tish YaTTga qaraganda qiyinroq."
        },
        {
            id: 3,
            header: "Aksiyadorlik Jamiyati (AJ)",
            body: "Aksiyalar orqali kapital jalb qilish uchun mo‘ljallangan yuridik shaxs.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Har qanday faoliyat (litsenziya bilan).<br/>" +
                  "<strong>Soliqlar:</strong> MChJ bilan deyarli bir xil (umumbelgilangan yoki soddalashtirilgan).<br/>" +
                  "<strong>Hisobot:</strong> Qattiq buxgalteriya va moliyaviy hisobot talablari.<br/>" +
                  "<strong>Afzallik:</strong> Katta kapital jalb qilish, xalqaro bozorlar uchun mos.<br/>" +
                  "<strong>Kamchilik:</strong> Ro‘yxatdan o‘tish va yuritish qimmat va murakkab."
        },
        {
            id: 4,
            header: "O‘zini O‘zi Band Qilish",
            body: "Eng soddalashtirilgan shakl, yuridik shaxs tashkil etmasdan faoliyat yuritish.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Cheklangan (hunarmandchilik, repetitorlik, kuryerlik).<br/>" +
                  "<strong>Soliqlar:</strong> 4-8% daromad solig‘i, soddalashtirilgan.<br/>" +
                  "<strong>Hisobot:</strong> Minimal, faqat daromad deklaratsiyasi.<br/>" +
                  "<strong>Afzallik:</strong> Bepul ro‘yxatdan o‘tish, past soliq yuki.<br/>" +
                  "<strong>Kamchilik:</strong> Xodim yollash mumkin emas, faoliyat turlari cheklangan."
        },
    ];

    const LisenceData = [
        {
            id: 1,
            header: "Qurilish sohasi",
            body: "Qurilish faoliyati uchun maxsus litsenziya talab qilinadi.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Ko‘p qavatli uylar, infratuzilma, muhandislik-izlanish ishlari.<br/>" +
                  "<strong>Litsenziya organi:</strong> Qurilish va uy-joy kommunal xo‘jaligi vazirligi.<br/>" +
                  "<strong>Talablar:</strong> Loyiha hujjatlari, malaka sertifikatlari, texnik resurslar.<br/>" +
                  "<strong>Muddat:</strong> Ariza ko‘rib chiqish 5-15 ish kuni.<br/>" +
                  "<strong>Afzallik:</strong> Yirik loyihalarda ishtirok etish imkoniyati.<br/>" +
                  "<strong>Kamchilik:</strong> Yuqori sifat va xavfsizlik standartlariga rioya qilish."
        },
        {
            id: 2,
            header: "Farmatsevtika sohasi",
            body: "Dori vositalari ishlab chiqarish va savdosi uchun litsenziya zarur.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Dorixona, ulgurji/chakana savdo, dori ishlab chiqarish.<br/>" +
                  "<strong>Litsenziya organi:</strong> Sog‘liqni saqlash vazirligi.<br/>" +
                  "<strong>Talablar:</strong> Malakali xodimlar, sanitariya standartlari, uskunalar.<br/>" +
                  "<strong>Muddat:</strong> Ariza ko‘rib chiqish 5-10 ish kuni.<br/>" +
                  "<strong>Afzallik:</strong> Barqaror bozor talabi.<br/>" +
                  "<strong>Kamchilik:</strong> Qattiq nazorat va raqamli markirovka talablari."
        },
        {
            id: 3,
            header: "Bank va moliya xizmatlari",
            body: "Moliyaviy xizmatlar ko‘rsatish uchun qonuniy ruxsat talab qilinadi.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Bank operatsiyalari, kredit tashkilotlari, to‘lov tizimlari.<br/>" +
                  "<strong>Litsenziya organi:</strong> O‘zbekiston Respublikasi Markaziy banki.<br/>" +
                  "<strong>Talablar:</strong> Moliyaviy barqarorlik, xavfsizlik tizimlari, malakali kadrlar.<br/>" +
                  "<strong>Muddat:</strong> Ariza ko‘rib chiqish 15-30 ish kuni.<br/>" +
                  "<strong>Afzallik:</strong> Yuqori daromad potentsiali.<br/>" +
                  "<strong>Kamchilik:</strong> Murakkab tartib va yuqori kapital talabi."
        },
        {
            id: 4,
            header: "Turizm sohasi",
            body: "Turistik xizmatlar, xususan Umra tashkilotlari uchun litsenziya kerak.<br/><br/>" +
                  "<strong>Faoliyat turlari:</strong> Turistik sayohatlar, Umra va ziyorat turlari.<br/>" +
                  "<strong>Litsenziya organi:</strong> Turizmni rivojlantirish davlat qo‘mitasi.<br/>" +
                  "<strong>Talablar:</strong> Xizmat sifati, xavfsizlik kafolatlari, tajribali xodimlar.<br/>" +
                  "<strong>Muddat:</strong> Ariza ko‘rib chiqish 10-15 ish kuni.<br/>" +
                  "<strong>Afzallik:</strong> Yuqori talab, xalqaro bozorga chiqish imkoniyati.<br/>" +
                  "<strong>Kamchilik:</strong> Mavsumiy daromad va qattiq raqobat."
        },
    ];

    return (
        <Container fluid className="mt-5 huquqiy-hujjatlar-container">
            <h2 className="text-center mb-4 text-light">O'zbekistonda Tadbirkorlik Turlari</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}  // This sets the second card (index 1) as the initial slide
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="card">
                            <div className="card-header">{card.header}</div>
                            <div className="card-body">
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: card.body }} />
                            </div>
                            <div className="card-footer">
                                <Button variant="success" className="w-100">Batafsil</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <h2 className="text-center mb-4 text-light">O'zbekistonda Tadbirkorlikni Litsenziyalash</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}  // This sets the second card (index 1) as the initial slide
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                {LisenceData.map((license) => (
                    <SwiperSlide key={license.id}>
                        <div className="card">
                            <div className="card-header">{license.header}</div>
                            <div className="card-body">
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: license.body }} />
                            </div>
                            <div className="card-footer">
                                <Button variant="success" className="w-100">Batafsil</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}

export default HuquqiyHujjatlar;