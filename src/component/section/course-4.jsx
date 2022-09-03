import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import courseImg16 from "assets/images/course/16.jpg";
import courseImg17 from "assets/images/course/17.jpg";
import courseImg18 from "assets/images/course/18.jpg";
import courseImg19 from "assets/images/course/19.jpg";
import courseImg20 from "assets/images/course/20.jpg";
import courseImg21 from "assets/images/course/21.jpg";
import courseImg22 from "assets/images/course/22.jpg";
import courseImg23 from "assets/images/course/23.jpg";

import courseAuthorImg01 from "assets/images/course/author/01.jpg";
import courseAuthorImg02 from "assets/images/course/author/02.jpg";
import courseAuthorImg03 from "assets/images/course/author/03.jpg";
import courseAuthorImg04 from "assets/images/course/author/04.jpg";
import courseAuthorImg05 from "assets/images/course/author/05.jpg";
import courseAuthorImg06 from "assets/images/course/author/06.jpg";

const title = "Our Courses";

const CourseData = [
	{
		imgUrl: courseImg16,
		imgAlt: "course mydevtoolkit ",
		cate: "English",
		title: "Basic English Spoken and Writing",
		author: courseAuthorImg01,
		authorName: "William Smith",
		price: "$199.00",
		id: 1
	},
	{
		imgUrl: courseImg17,
		imgAlt: "course mydevtoolkit ",
		cate: "Software",
		title: "Learn Advance with PHP Language",
		author: courseAuthorImg02,
		authorName: "Angel Mili",
		price: "$199.00",
		id: 2
	},
	{
		imgUrl: courseImg18,
		imgAlt: "course mydevtoolkit ",
		cate: "Design",
		title: "Logo Design in Adobe Illustrator",
		author: courseAuthorImg03,
		authorName: "Sajahan Sagor",
		price: "$199.00",
		id: 3
	},
	{
		imgUrl: courseImg19,
		imgAlt: "course mydevtoolkit ",
		cate: "Photography",
		title: "Digital Photography for Beginner",
		author: courseAuthorImg04,
		authorName: "Ummi Nishat",
		price: "$199.00",
		id: 4
	},
	{
		imgUrl: courseImg20,
		imgAlt: "course mydevtoolkit ",
		cate: "Marketing",
		title: "Advance Social Media Marketing",
		author: courseAuthorImg05,
		authorName: "Rassel Hossin",
		price: "$199.00",
		id: 5
	},
	{
		imgUrl: courseImg21,
		imgAlt: "course mydevtoolkit ",
		cate: "Music",
		title: "Guidelines Complete Guitar System",
		author: courseAuthorImg06,
		authorName: "Zinat Zaara",
		price: "$199.00",
		id: 6
	},
	{
		imgUrl: courseImg22,
		imgAlt: "course mydevtoolkit ",
		cate: "Design",
		title: "Learn Piano Guidelines System A to Z",
		author: courseAuthorImg01,
		authorName: "William Smith",
		price: "$199.00",
		id: 7
	},
	{
		imgUrl: courseImg23,
		imgAlt: "course mydevtoolkit ",
		cate: "Software",
		title: "Advance Professional Graphic Design",
		author: courseAuthorImg02,
		authorName: "Angel Mili",
		price: "$199.00",
		id: 8
	}
];

const CourseFour = () => {
	const [items, setItems] = useState(CourseData);
	const filterItem = (categItem) => {
		const updateItems = CourseData.filter((curElem) => {
			return curElem.cate === categItem;
		});
		setItems(updateItems);
	};

	return (
		<div className="course-section style-3 padding-tb">
			<div className="course-shape one">
				<img src="assets/images/shape-img/icon/01.png" alt="education" />
			</div>
			<div className="course-shape two">
				<img src="assets/images/shape-img/icon/02.png" alt="education" />
			</div>
			<div className="container">
				<div className="section-header">
					<h2 className="title">{title}</h2>
					<div className="course-filter-group">
						<ul className="lab-ul">
							<li onClick={() => setItems(CourseData)}>All</li>
							<li onClick={() => filterItem("English")}>English</li>
							<li onClick={() => filterItem("Software")}>Software</li>
							<li onClick={() => filterItem("Design")}>Design</li>
							<li onClick={() => filterItem("Photography")}>Photography</li>
							<li onClick={() => filterItem("Music")}>Music</li>
							<li onClick={() => filterItem("Marketing")}>Marketing</li>
						</ul>
					</div>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
						{items.map((elem) => {
							const { id, imgUrl, imgAlt, cate, title, author, authorName, price } = elem;
							return (
								<div className="col" key={id}>
									<div className="course-item style-4">
										<div className="course-inner">
											<div className="course-thumb">
												<img src={imgUrl} alt={imgAlt} />
												<div className="course-category">
													<div className="course-cate">
														<a href="#">{cate}</a>
													</div>
													<div className="course-reiew">
														<Rating />
													</div>
												</div>
											</div>
											<div className="course-content">
												<Link to="/course-single">
													<h5>{title}</h5>
												</Link>
												<div className="course-footer">
													<div className="course-author">
														<img src={author} alt={imgAlt} />
														<Link to="/team-single" className="ca-name">
															{authorName}
														</Link>
													</div>
													<div className="course-price">{price}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseFour;
