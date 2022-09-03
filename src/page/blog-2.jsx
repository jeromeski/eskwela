import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Archive from "../component/sidebar/archive";
import Instagram from "../component/sidebar/instagram";
import Pagination from "../component/sidebar/pagination";
import PopularPost from "../component/sidebar/popular-post";
import PostCategory from "../component/sidebar/post-category";
import Search from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";

import blogImg01 from "assets/images/blog/01.jpg";
import blogImg02 from "assets/images/blog/02.jpg";
import blogImg03 from "assets/images/blog/03.jpg";
import blogImg04 from "assets/images/blog/04.jpg";
import blogImg05 from "assets/images/blog/05.jpg";
import blogImg06 from "assets/images/blog/06.jpg";
import blogImg07 from "assets/images/blog/07.jpg";
import blogImg08 from "assets/images/blog/08.jpg";

let blogList = [
	{
		imgUrl: blogImg01,
		imgAlt: "Blog Thumb",
		title: "Business Ueporting Rouncil Them Could Plan.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg02,
		imgAlt: "Blog Thumb",
		title: "Financial Reporting Qouncil What Could More.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg03,
		imgAlt: "Blog Thumb",
		title: "Consulting Reporting Qounc Arei Could More.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg04,
		imgAlt: "Blog Thumb",
		title: "Strategic Social Media and of visual design.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg05,
		imgAlt: "Blog Thumb",
		title: "Find the Right Path for your Group Course online.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg06,
		imgAlt: "Blog Thumb",
		title: "Learn by doing with Real World Projects other countries.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg07,
		imgAlt: "Blog Thumb",
		title: "The Importance Of Intrinsic for Students.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	},
	{
		imgUrl: blogImg08,
		imgAlt: "Blog Thumb",
		title: "A Better Alternative To Grading Student Writing.",
		desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
		commentCount: "3",
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Nix Lee"
			},
			{
				iconName: "icofont-calendar",
				text: "Jun 05,2022"
			}
		]
	}
];

const BlogPageTwo = () => {
	return (
		<Fragment>
			<Header />
			<PageHeader title={"Our Blog Classic Posts"} curPage={"Blog classic"} />
			<div className="blog-section padding-tb section-bg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-12">
							<article>
								<div className="section-wrapper">
									<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 justify-content-center g-4">
										{blogList.map((val, i) => (
											<div className="col" key={i}>
												<div className="post-item">
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
																	{val.metaList.map((val, i) => (
																		<li key={i}>
																			<i className={val.iconName}></i>
																			{val.text}
																		</li>
																	))}
																</ul>
															</div>
															<p>{val.desc}</p>
														</div>
														<div className="post-footer">
															<div className="pf-left">
																<Link to="/blog-single" className="lab-btn-text">
																	{val.btnText} <i className="icofont-external-link"></i>
																</Link>
															</div>
															<div className="pf-right">
																<i className="icofont-comment"></i>
																<span className="comment-count">{val.commentCount}</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<Pagination />
								</div>
							</article>
						</div>
						<div className="col-lg-4 col-12">
							<aside>
								<Search />
								<PostCategory />
								<PopularPost />
								<Archive />
								<Instagram />
								<Tags />
							</aside>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default BlogPageTwo;
