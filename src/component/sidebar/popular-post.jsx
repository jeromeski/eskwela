import { Link } from "react-router-dom";

import blogImg01 from "assets/images/blog/01.jpg";
import blogImg02 from "assets/images/blog/02.jpg";
import blogImg03 from "assets/images/blog/03.jpg";
import blogImg04 from "assets/images/blog/04.jpg";

const title = "Most Popular Post";

const postList = [
	{
		imgUrl: blogImg01,
		imgAlt: "mydevtoolkit",
		title: "Poor People’s Campaign Our Resources",
		date: "Jun 05,2022"
	},
	{
		imgUrl: blogImg02,
		imgAlt: "mydevtoolkit",
		title: "Poor People’s Campaign Our Resources",
		date: "Jun 05,2022"
	},
	{
		imgUrl: blogImg03,
		imgAlt: "mydevtoolkit",
		title: "Poor People’s Campaign Our Resources",
		date: "Jun 05,2022"
	},
	{
		imgUrl: blogImg04,
		imgAlt: "mydevtoolkit",
		title: "Poor People’s Campaign Our Resources",
		date: "Jun 05,2022"
	}
];

const PopularPost = () => {
	return (
		<div className="widget widget-post">
			<div className="widget-header">
				<h5 className="title">{title}</h5>
			</div>
			<ul className="widget-wrapper">
				{postList.map((val, i) => (
					<li className="d-flex flex-wrap justify-content-between" key={i}>
						<div className="post-thumb">
							<Link to="/blog-single">
								<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
							</Link>
						</div>
						<div className="post-content">
							<Link to="/blog-single">
								<h6>{val.title}</h6>
							</Link>
							<p>{val.date}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularPost;
