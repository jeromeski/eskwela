import { Link } from "react-router-dom";
import categoryImg01 from "assets/images/category/icon/01.jpg";
import categoryImg02 from "assets/images/category/icon/02.jpg";
import categoryImg03 from "assets/images/category/icon/03.jpg";
import categoryImg04 from "assets/images/category/icon/04.jpg";
import categoryImg05 from "assets/images/category/icon/05.jpg";
import categoryImg06 from "assets/images/category/icon/06.jpg";

const subTitle = "Popular Category";
const title = "Popular Categories To Learn";
const btnText = "Browse All Categories";

const categoryList = [
	{
		imgUrl: categoryImg01,
		imgAlt: "category mydevtoolkit ",
		title: "Computer Science",
		count: "24 Course"
	},
	{
		imgUrl: categoryImg02,
		imgAlt: "category mydevtoolkit ",
		title: "Civil Engineering",
		count: "04 Course"
	},
	{
		imgUrl: categoryImg03,
		imgAlt: "category mydevtoolkit ",
		title: "Business Analysis",
		count: "27 Course"
	},
	{
		imgUrl: categoryImg04,
		imgAlt: "category mydevtoolkit ",
		title: "Data Science Analytics",
		count: "28 Course"
	},
	{
		imgUrl: categoryImg05,
		imgAlt: "category mydevtoolkit ",
		title: "Learning Management",
		count: "78 Course"
	},
	{
		imgUrl: categoryImg06,
		imgAlt: "category mydevtoolkit ",
		title: "Computer Engineering",
		count: "38 Course"
	}
];

const Category = () => {
	return (
		<div className="category-section padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
						{categoryList.map((val, i) => (
							<div className="col" key={i}>
								<div className="category-item text-center">
									<div className="category-inner">
										<div className="category-thumb">
											<img src={`${val.imgUrl}`} alt={val.imgAlt} />
										</div>
										<div className="category-content">
											<Link to="/course">
												<h6>{val.title}</h6>
											</Link>
											<span>{val.count}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center mt-5">
						<Link to="/course" className="lab-btn">
							<span>{btnText}</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
