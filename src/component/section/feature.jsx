import { Link } from "react-router-dom";
import featureImg01 from "assets/images/feature/01.png";
import featureImg02 from "assets/images/feature/02.png";
import featureImg03 from "assets/images/feature/03.png";
import featureImg04 from "assets/images/feature/04.png";
import featureImg05 from "assets/images/feature/05.png";
import featureImg06 from "assets/images/feature/06.png";

const subTitle = "Why Choose Us";
const title = "Get Everything for Learning";

const featureList = [
	{
		imgUrl: featureImg01,
		imgAlt: "feature mydevtoolkit ",
		title: "Book & Library",
		titleSpan: "Facelities",
		btnText: "View More"
	},
	{
		imgUrl: featureImg02,
		imgAlt: "feature mydevtoolkit ",
		title: "Online & Offline",
		titleSpan: "Courses",
		btnText: "View More"
	},
	{
		imgUrl: featureImg03,
		imgAlt: "feature mydevtoolkit ",
		title: "Certification After",
		titleSpan: "Course Complete",
		btnText: "View More"
	},
	{
		imgUrl: featureImg04,
		imgAlt: "feature mydevtoolkit ",
		title: "Professional and",
		titleSpan: "Ingenious Instructor",
		btnText: "View More"
	},
	{
		imgUrl: featureImg05,
		imgAlt: "feature mydevtoolkit ",
		title: "Air Condition Class",
		titleSpan: "Room",
		btnText: "View More"
	},
	{
		imgUrl: featureImg06,
		imgAlt: "feature mydevtoolkit ",
		title: "Best Industry",
		titleSpan: "Leader",
		btnText: "View More"
	}
];

const Feature = () => {
	return (
		<div className="feature-section padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
						{featureList.map((val, i) => (
							<div className="col" key={i}>
								<div className="feature-item">
									<div className="feature-inner">
										<div className="feature-thumb">
											<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
										</div>
										<div className="feature-content">
											<Link to="/course-single">
												<h5>
													{val.title} <span>{val.titleSpan}</span>
												</h5>
											</Link>
											<Link to="/course-single" className="lab-btn-text">
												{val.btnText} <span></span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;