import { Link } from "react-router-dom";

import blogImg10 from "assets/images/blog/10.jpg";
import blogImg11 from "assets/images/blog/11.jpg";
import blogImg12 from "assets/images/blog/12.jpg";

const subTitle = "Don’t Miss the Day";
const title = "Scheduled Events ";

const blogList = [
	{
		imgUrl: blogImg10,
		imgAlt: "blog thumb mydevtoolkit ",
		title: "Learn Basic Web Design with HTML and CSS",
		author: "Ummi Nishat",
		date: "April 23,2022",
		desc: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
		btnText: "Read More"
	},
	{
		imgUrl: blogImg11,
		imgAlt: "blog thumb mydevtoolkit ",
		title: "Scottish Creatives To Receive Funded Business.",
		author: "Begrass Tyson",
		date: "April 23,2022",
		desc: "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
		btnText: "Read More"
	},
	{
		imgUrl: blogImg12,
		imgAlt: "blog thumb mydevtoolkit ",
		title: "Learn Basic Web Design with PHP and Laravel",
		author: "Dave Wong",
		date: "April 23,2022",
		desc: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
		btnText: "Read More"
	}
];

const BlogTwo = () => {
	return (
		<div className="blog-section padding-tb">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
						{blogList.map((val, i) => (
							<div className="col" key={i}>
								<div className="post-item style-3">
									<div className="post-inner">
										<div className="post-thumb">
											<Link to="/blog-single">
												<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
											</Link>
										</div>
										<div className="post-content">
											<Link to="/blog-single">
												<h4>{val.title}</h4>
											</Link>
											<div className="meta-post">
												<ul className="lab-ul">
													<li>
														<i className="icofont-ui-user"></i>
														{val.author}
													</li>
													<li>
														<i className="icofont-calendar"></i>
														{val.date}
													</li>
												</ul>
											</div>
											<p>{val.desc}</p>
											<Link to="/blog-single" className="lab-btn">
												<span>{val.btnText}</span>
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

export default BlogTwo;
