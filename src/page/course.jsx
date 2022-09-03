import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";

import courseImg01 from "assets/images/course/01.jpg";
import courseImg02 from "assets/images/course/02.jpg";
import courseImg03 from "assets/images/course/03.jpg";
import courseImg04 from "assets/images/course/04.jpg";
import courseImg05 from "assets/images/course/05.jpg";
import courseImg06 from "assets/images/course/06.jpg";

import courseAuthorImg01 from "assets/images/course/author/01.jpg";
import courseAuthorImg02 from "assets/images/course/author/02.jpg";
import courseAuthorImg03 from "assets/images/course/author/03.jpg";
import courseAuthorImg04 from "assets/images/course/author/04.jpg";
import courseAuthorImg05 from "assets/images/course/author/05.jpg";
import courseAuthorImg06 from "assets/images/course/author/06.jpg";

const courseList = [
	{
		imgUrl: courseImg01,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Fundamentals of Adobe XD Theory Learn New",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg01,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "William Smith",
		btnText: "Read More"
	},
	{
		imgUrl: courseImg02,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Certified Graphic Design with Free Project Course",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg02,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "Lora Smith",
		btnText: "Read More"
	},
	{
		imgUrl: courseImg03,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Theory Learn New Student And Fundamentals",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg03,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "Robot Smith",
		btnText: "Read More"
	},
	{
		imgUrl: courseImg04,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Computer Fundamentals Basic Startup Ultricies Vitae",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg04,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "Zinat Zaara",
		btnText: "Read More"
	},
	{
		imgUrl: courseImg05,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg05,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "Dave Wong",
		btnText: "Read More"
	},
	{
		imgUrl: courseImg06,
		imgAlt: "course mydevtoolkit ",
		price: "$30",
		cate: "Adobe XD",
		reviewCount: "03 reviews",
		title: "Student Want to Learn About Science And Arts",
		totalLeson: "18x Lesson",
		schdule: "Online Class",
		authorImgUrl: courseAuthorImg06,
		authorImgAlt: "course author mydevtoolkit ",
		authorName: "Angel Mili",
		btnText: "Read More"
	}
];

const CoursePage = () => {
	return (
		<Fragment>
			<Header />
			<PageHeader title={"Archives: Courses"} curPage={"Course Page"} />
			<GroupSelect />
			<div className="course-section padding-tb section-bg">
				<div className="container">
					<div className="section-wrapper">
						<div className="course-showing-part">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<div className="course-showing-part-left">
									<p>Showing 1-6 of 10 results</p>
								</div>
								<div className="course-showing-part-right d-flex flex-wrap align-items-center">
									<span>Sort by :</span>
									<div className="select-item">
										<SkillSelect select={"all"} />
										<div className="select-icon">
											<i className="icofont-rounded-down"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
							{courseList.map((val, i) => (
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
						<Pagination />
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default CoursePage;
