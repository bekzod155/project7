import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// Import custom CSS
import '../styles/analitika.css';

const sampleData = [
	{
		title: "Startup Rejasi",
		description: "Biznes rejangizni tuzish va moliyaviy bashoratlarni yaratish bo'yicha maslahatlar.",
		buttonText: "Batafsil"
	},
	{
		title: "Bozor Tahlili",
		description: "Bozor hajmi, raqobatchilar va mijozlar segmentatsiyasi haqida ma'lumot.",
		buttonText: "Ko'proq"
	},
	{
		title: "Moliyalashtirish",
		description: "Venchur kapital, angel investorlar va kraudfanding haqida tushunchalar.",
		buttonText: "O'rganish"
	},
	{
		title: "Scaling Strategiyasi",
		description: "Startapingizni kengaytirish va o'sish uchun samarali usullar.",
		buttonText: "Boshlash"
	}
];

function AnalitikaCube() {
	return (
		<div className="analitika-cube-container">
			<Swiper
				effect={'cube'}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination]}
				className="mySwiper"
			>
				{sampleData.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="cube-card">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<button>{item.buttonText}</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default AnalitikaCube;