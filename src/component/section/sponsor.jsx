import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sponsorImg01 from "assets/images/sponsor/01.png";
import sponsorImg02 from "assets/images/sponsor/02.png";
import sponsorImg03 from "assets/images/sponsor/03.png";
import sponsorImg04 from "assets/images/sponsor/04.png";
import sponsorImg05 from "assets/images/sponsor/05.png";
import sponsorImg06 from "assets/images/sponsor/06.png";

const sponsorList = [
	{
		imgUrl: sponsorImg01,
		imgAlt: "sponsor mydevtoolkit "
	},
	{
		imgUrl: sponsorImg02,
		imgAlt: "sponsor mydevtoolkit "
	},
	{
		imgUrl: sponsorImg03,
		imgAlt: "sponsor mydevtoolkit "
	},
	{
		imgUrl: sponsorImg04,
		imgAlt: "sponsor mydevtoolkit "
	},
	{
		imgUrl: sponsorImg05,
		imgAlt: "sponsor mydevtoolkit "
	},
	{
		imgUrl: sponsorImg06,
		imgAlt: "sponsor mydevtoolkit "
	}
];

const Sponsor = () => {
	return (
		<div className="sponsor-section section-bg">
			<div className="container">
				<div className="section-wrapper">
					<div className="sponsor-slider">
						<Swiper
							spaceBetween={20}
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
									slidesPerView: 1
								},
								768: {
									width: 768,
									slidesPerView: 3
								},
								1200: {
									width: 1200,
									slidesPerView: 5.5
								}
							}}>
							{sponsorList.map((val, i) => (
								<SwiperSlide key={i}>
									<div className="sponsor-iten">
										<div className="sponsor-thumb">
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
	);
};

export default Sponsor;
