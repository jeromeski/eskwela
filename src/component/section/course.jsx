import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

import { courseListOne } from "data/course-data";

const courseList = courseListOne;

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const Course = () => {
	return (
		<div className="course-section padding-tb section-bg">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
						{courseList.slice(0, 6).map((val, i) => (
							<div className="col" key={i}>
								<div className="course-item">
									<div className="course-inner">
										<div className="course-thumb">
											<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
										</div>
										<div className="course-content">
											<div className="course-price">{val.price}</div>
											<div className="course-category">
												<div className="course-cate">
													<a href="#">{val.cate}</a>
												</div>
												<div className="course-reiew">
													<Rating />
													<span className="ratting-count"> {val.reviewCount}</span>
												</div>
											</div>
											<Link to="/course-single">
												<h4>{val.title}</h4>
											</Link>
											<div className="course-details">
												<div className="couse-count">
													<i className="icofont-video-alt"></i> {val.totalLeson}
												</div>
												<div className="couse-topic">
													<i className="icofont-signal"></i> {val.schdule}
												</div>
											</div>
											<div className="course-footer">
												<div className="course-author">
													<img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
													<Link to="/team-single" className="ca-name">
														{val.authorName}
													</Link>
												</div>
												<div className="course-btn">
													<Link to="/course-single" className="lab-btn-text">
														{val.btnText} <i className="icofont-external-link"></i>
													</Link>
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

export default Course;
