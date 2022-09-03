import blogImg01 from "assets/images/blog/01.jpg";
import blogImg02 from "assets/images/blog/02.jpg";
import blogImg03 from "assets/images/blog/03.jpg";
import blogImg04 from "assets/images/blog/04.jpg";
import blogImg05 from "assets/images/blog/05.jpg";
import blogImg06 from "assets/images/blog/06.jpg";
import blogImg07 from "assets/images/blog/07.jpg";
import blogImg08 from "assets/images/blog/08.jpg";
import blogImg09 from "assets/images/blog/09.jpg";

const title = "Gallery Photos";

const instagramList = [
	{
		imgUrl: blogImg01,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg02,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg03,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg04,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg05,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg06,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg07,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg08,
		imgAlt: "product"
	},
	{
		imgUrl: blogImg09,
		imgAlt: "product"
	}
];

const Instagram = () => {
	return (
		<div className="widget widget-instagram">
			<div className="widget-header">
				<h5 className="title">{title}</h5>
			</div>
			<ul className="widget-wrapper d-flex flex-wrap justify-content-center">
				{instagramList.map((val, i) => (
					<li key={i}>
						<a href={`${val.imgUrl}`} target="_blank">
							<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Instagram;
