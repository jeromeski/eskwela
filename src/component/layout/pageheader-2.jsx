import Rating from "../sidebar/rating";

import pageheaderImg02 from "assets/images/pageheader/02.jpg";
import pageheaderImg03 from "assets/images/pageheader/03.jpg";

const title = "Advanced Adobe Photoshop For Everyone";
const desc = "The most impressive is collection of share me online college courses";
const author = "Dave Wong";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";

const categoryList = [
	{
		link: "#",
		text: "Adobe XD",
		className: "course-cate"
	},
	{
		link: "#",
		text: "30% Off",
		className: "course-offer"
	}
];

const PageHeaderTwo = () => {
	return (
		<div className="pageheader-section style-2">
			<div className="container">
				<div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
					<div className="col-lg-7 col-12">
						<div className="pageheader-thumb">
							<img src={pageheaderImg02} alt="mydevtoolkit" className="w-100" />
							<a href={videoLink} className="video-button popup" target="_blank">
								<i className="icofont-ui-play"></i>
							</a>
						</div>
					</div>
					<div className="col-lg-5 col-12">
						<div className="pageheader-content">
							<div className="course-category">
								{categoryList.map((val, i) => (
									<a href={val.link} className={val.className} key={i}>
										{val.text}
									</a>
								))}
							</div>
							<h2 className="phs-title">{title}</h2>
							<p className="phs-desc">{desc}</p>
							<div className="phs-thumb">
								<img src={pageheaderImg03} alt="mydevtoolkit" />
								<span>{author}</span>
								<div className="course-reiew">
									<Rating />
									<span className="ratting-count">{reviewCount}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeaderTwo;
