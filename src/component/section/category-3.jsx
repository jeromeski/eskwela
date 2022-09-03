import { Link } from "react-router-dom";
import categoryImg01 from "assets/images/category/01.jpg";
import categoryImg02 from "assets/images/category/02.jpg";
import categoryImg03 from "assets/images/category/03.jpg";
import categoryImg04 from "assets/images/category/04.jpg";
import categoryImg05 from "assets/images/category/05.jpg";
import categoryImg06 from "assets/images/category/06.jpg";
import { categoryBgImg06 } from "assets/images";

const subTitle = "Choose Any One Course";
const title = "Learn At Your Own Pace";
const btnText = "Get Started Now";

const categoryList = [
	{
		imgUrl: categoryImg01,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Software"
	},
	{
		imgUrl: categoryImg02,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Design & Art"
	},
	{
		imgUrl: categoryImg03,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Photography"
	},
	{
		imgUrl: categoryImg04,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Language"
	},
	{
		imgUrl: categoryImg05,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Marketing"
	},
	{
		imgUrl: categoryImg06,
		imgAlt: "category mydevtoolkit ",
		iconName: "icofont-brand-windows",
		title: "Music"
	}
];

const CategoryThree = () => {
	return (
		<div className="category-section style-4 padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
						{categoryList.map((val, i) => (
							<div className="col" key={i}>
								<div className="category-item">
									<div className="category-inner">
										<div className="category-thumb">
											<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
										</div>
										<div className="category-content">
											<div className="cate-icon">
												<i className={`${val.iconName}`}></i>
											</div>
											<Link to="/course">
												<h6>{val.title}</h6>
											</Link>
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

export default CategoryThree;
