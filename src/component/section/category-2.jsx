import { Link } from "react-router-dom";
import categoryIcon01 from "assets/images/category/icon/01.jpg";
import categoryIcon02 from "assets/images/category/icon/02.jpg";
import categoryIcon03 from "assets/images/category/icon/03.jpg";
import categoryIcon04 from "assets/images/category/icon/04.jpg";
import categoryIcon05 from "assets/images/category/icon/05.jpg";
import categoryIcon06 from "assets/images/category/icon/06.jpg";
import categoryIcon07 from "assets/images/category/icon/07.jpg";
import categoryIcon08 from "assets/images/category/icon/08.jpg";
import categoryIcon09 from "assets/images/category/icon/09.jpg";
import categoryIcon10 from "assets/images/category/icon/10.jpg";
import categoryIcon11 from "assets/images/category/icon/11.jpg";
import categoryIcon12 from "assets/images/category/icon/12.jpg";
import categoryIcon13 from "assets/images/category/icon/13.jpg";
import categoryIcon14 from "assets/images/category/icon/14.jpg";

const subTitle = "Popular Category";
const title = "Popular Categories To Learn";

const categoryList = [
	{
		imgUrl: categoryIcon07,
		imgAlt: "category mydevtoolkit ",
		title: "Computer Science",
		desc: "24 Course"
	},
	{
		imgUrl: categoryIcon08,
		imgAlt: "category mydevtoolkit ",
		title: "Civil Engineering",
		desc: "63 Course"
	},
	{
		imgUrl: categoryIcon09,
		imgAlt: "category mydevtoolkit ",
		title: "Business Analysis",
		desc: "43 Course"
	},
	{
		imgUrl: categoryIcon10,
		imgAlt: "category mydevtoolkit ",
		title: "Data Science Analytics",
		desc: "50 Course"
	},
	{
		imgUrl: categoryIcon11,
		imgAlt: "category mydevtoolkit ",
		title: "Learning Management",
		desc: "27 Course"
	},
	{
		imgUrl: categoryIcon12,
		imgAlt: "category mydevtoolkit ",
		title: "Computer Engineering",
		desc: "87 Course"
	},
	{
		imgUrl: categoryIcon13,
		imgAlt: "category mydevtoolkit ",
		title: "Design Architect",
		desc: "15 Course"
	},
	{
		imgUrl: categoryIcon14,
		imgAlt: "category mydevtoolkit ",
		title: "Foreign Language",
		desc: "58 Course"
	}
];

const CategoryTwo = () => {
	return (
		<div className="category-section padding-tb section-bg style-2">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
						{categoryList.map((val, i) => (
							<div className="col" key={i}>
								<div className="category-item text-center">
									<div className="category-inner">
										<div className="category-thumb">
											<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
										</div>
										<div className="category-content">
											<Link to="/course">
												<h6>{val.title}</h6>
											</Link>
											<span>{val.desc}</span>
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

export default CategoryTwo;
