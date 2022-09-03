import aboutIcon01 from "assets/images/about/icon/01.jpg";
import aboutIcon02 from "assets/images/about/icon/02.jpg";
import aboutIcon03 from "assets/images/about/icon/03.jpg";
import aboutImg01 from "assets/images/about/01.jpg";

const subTitle = "About Our Eskwela";
const title = "Good Qualification Services And Better Skills";
const desc =
	"Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const aboutList = [
	{
		imgUrl: aboutIcon01,
		imgAlt: "about icon mydevtoolkit ",
		title: "Skilled Instructors",
		desc: "Talented people are everywhere, but opportunities can be harder to find. With Udemy, Mohammed — a Syrian refugee — was able to start a new career and a new life in Germany."
	},
	{
		imgUrl: aboutIcon02,
		imgAlt: "about icon mydevtoolkit ",
		title: "Get Certificate",
		desc: "Eskwela instructors are real people who are passionate about sharing what they know with students all over the world."
	},
	{
		imgUrl: aboutIcon03,
		imgAlt: "about icon mydevtoolkit ",
		title: "Online Classes",
		desc: "Whatever your learning style, we have a course that fits. Coming from instructors all over the world, our courses span over 65 languages and cover just about anything ."
	}
];

const About = () => {
	return (
		<div className="about-section">
			<div className="container">
				<div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
					<div className="col">
						<div className="about-right padding-tb">
							<div className="section-header">
								<span className="subtitle">{subTitle}</span>
								<h2 className="title">{title}</h2>
								<p>{desc}</p>
							</div>
							<div className="section-wrapper">
								<ul className="lab-ul">
									{aboutList.map((val, i) => (
										<li key={i}>
											<div className="sr-left">
												<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
											</div>
											<div className="sr-right">
												<h5>{val.title}</h5>
												<p>{val.desc}</p>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="about-left">
							<div className="about-thumb">
								<img src={aboutImg01} alt="about" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
