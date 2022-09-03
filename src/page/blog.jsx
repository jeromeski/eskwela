import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";

import { blogListTwo } from "data/blog-data";

const blogList = blogListTwo;

const BlogPage = () => {
	return (
		<Fragment>
			<Header />
			<PageHeader title={"Our Blog Posts"} curPage={"Blog"} />
			<div className="blog-section padding-tb section-bg">
				<div className="container">
					<div className="section-wrapper">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
							{blogList.slice(0, 6).map((val, i) => (
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
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default BlogPage;
