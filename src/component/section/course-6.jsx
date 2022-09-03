import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

import courseImg24 from "assets/images/course/24.jpg";
import courseImg25 from "assets/images/course/25.jpg";
import courseImg26 from "assets/images/course/26.jpg";
import courseImg27 from "assets/images/course/27.jpg";

const subTitle = "Learn easily the Bright Thing";
const title = "My Book & Publications";

const courseList = [
	{
		imgUrl: courseImg24,
		imgAlt: "course mydevtoolkit ",
		title: "Essential of English Language",
		cate: "Handcover",
		oldPrice: "$199.00",
		newPrice: "$150.00"
	},
	{
		imgUrl: courseImg25,
		imgAlt: "course mydevtoolkit ",
		title: "A to Z Rules of English Spoken",
		cate: "Handcover",
		oldPrice: "$199.00",
		newPrice: "$150.00"
	},
	{
		imgUrl: courseImg26,
		imgAlt: "course mydevtoolkit ",
		title: "How to Speak English Continuously",
		cate: "Handcover",
		oldPrice: "$199.00",
		newPrice: "$150.00"
	},
	{
		imgUrl: courseImg27,
		imgAlt: "course mydevtoolkit ",
		title: "A to Z Rules of English Spoken",
		cate: "Handcover",
		oldPrice: "$199.00",
		newPrice: "$150.00"
	}
];

const CourseSix = () => {
	return (
		<div className="course-section style-4 padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
						{courseList.map((val, i) => (
							<div className="col" key={i}>
								<div className="course-item style-5">
									<div className="course-inner">
										<div className="course-thumb">
											<Link to="/course-single" className="d-block">
												<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
											</Link>
										</div>
										<div className="course-content">
											<Link to="/course-single">
												<h5>{val.title}</h5>
											</Link>
											<span className="course-cate">{val.cate}</span>
											<div className="course-footer">
												<Rating />
												<div className="course-price">
													<del>{val.oldPrice}</del> {val.newPrice}
												</div>
											</div>
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

export default CourseSix;
