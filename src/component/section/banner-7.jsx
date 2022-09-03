import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import flagImg01 from "assets/images/flag/01.jpg";
import flagImg02 from "assets/images/flag/02.jpg";
import flagImg03 from "assets/images/flag/03.jpg";
import flagImg04 from "assets/images/flag/04.jpg";
import flagImg05 from "assets/images/flag/05.jpg";
import flagImg06 from "assets/images/flag/06.jpg";
import flagImg07 from "assets/images/flag/07.jpg";
import flagImg08 from "assets/images/flag/08.jpg";
import flagImg09 from "assets/images/flag/09.jpg";
import flagImg10 from "assets/images/flag/10.jpg";
import flagImg11 from "assets/images/flag/11.jpg";
import flagImg12 from "assets/images/flag/12.jpg";
import flagImg13 from "assets/images/flag/13.jpg";
import flagImg14 from "assets/images/flag/14.jpg";

const title = "Language is The Dress of Thought";
const desc = "Learn Unlimited Language & Explore Yourself";
const btnText = "Get Started Now";

const flagSlider = [
	{
		imgUrl: flagImg01,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg02,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg03,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg04,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg05,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg06,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg07,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg08,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg09,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg10,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg11,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg12,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg13,
		imgAlt: "flag mydevtoolkit "
	},
	{
		imgUrl: flagImg14,
		imgAlt: "flag mydevtoolkit "
	}
];

const BannerSeven = () => {
	return (
		<section className="banner-section style-7">
			<div className="container">
				<div className="section-wrapper">
					<div className="banner-top">
						<div className="row justify-content-center">
							<div className="offset-xl-6 col-xl-6">
								<div className="banner-content">
									<h2 className="title">{title}</h2>
									<p className="desc">{desc}</p>
									<Link to="/signup" className="lab-btn">
										<span>{btnText}</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="banner-bottom">
						<div className="bannerflag-slider overflow-hidden">
							<Swiper
								spaceBetween={10}
								slidesPerView={2}
								loop={"true"}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false
								}}
								modules={[Autoplay]}
								breakpoints={{
									0: {
										width: 0,
										slidesPerView: 3
									},
									768: {
										width: 768,
										slidesPerView: 8
									},
									1200: {
										width: 1200,
										slidesPerView: 13.2
									}
								}}>
								{flagSlider.map((val, i) => (
									<SwiperSlide key={i}>
										<div className="flag-item">
											<div className="flag-thumb">
												<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerSeven;
