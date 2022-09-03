import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clientImg01 from "assets/images/clients/01.jpg";
import clientImg02 from "assets/images/clients/02.jpg";
import clientImg03 from "assets/images/clients/03.jpg";

const subTitle = "Don’t Miss the Day";
const title = "What People Say About Us";

const clientList = [
	{
		imgUrl: clientImg01,
		imgAlt: "education thumb mydevtoolkit ",
		desc: "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
		name: "Angel Mili",
		degi: "Assistant principal"
	},
	{
		imgUrl: clientImg02,
		imgAlt: "education thumb mydevtoolkit ",
		desc: "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
		name: "Dave Wong",
		degi: "Assistant principal"
	},
	{
		imgUrl: clientImg03,
		imgAlt: "education thumb mydevtoolkit ",
		desc: "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
		name: "Umme Nishat",
		degi: "Assistant principal"
	}
];

const Clients = () => {
	return (
		<div className="clients-section padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="clients-slider overflow-hidden">
						<div className="swiper-wrapper">
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
										slidesPerView: 2
									},
									1200: {
										width: 1200,
										slidesPerView: 2.8
									}
								}}>
								{clientList.map((val, i) => (
									<SwiperSlide key={i}>
										<div className="client-item">
											<div className="client-inner">
												<div className="client-thumb">
													<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
												</div>
												<div className="client-content">
													<p>{val.desc}</p>
													<div className="client-info">
														<h6 className="client-name">{val.name}</h6>
														<span className="client-degi">{val.degi}</span>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
