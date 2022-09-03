import { Link } from "react-router-dom";
import skillIcon01 from "assets/images/skill/icon/01.jpg";
import skillIcon02 from "assets/images/skill/icon/02.jpg";
import skillIcon03 from "assets/images/skill/icon/03.jpg";
import skillIcon04 from "assets/images/skill/icon/04.jpg";

const title = "Build Your Project Management Skills Online Anytime";
const btnText = "Sign Up Now";

const skillList = [
	{
		imgUrl: skillIcon01,
		imgAlt: "skill mydevtoolkit ",
		title: "Skilled Instructors",
		desc: "You pick the schedule."
	},
	{
		imgUrl: skillIcon02,
		imgAlt: "skill mydevtoolkit ",
		title: "Get Certificate",
		desc: "You pick the schedule."
	},
	{
		imgUrl: skillIcon03,
		imgAlt: "skill mydevtoolkit ",
		title: "Online Classes",
		desc: "You pick the schedule."
	},
	{
		imgUrl: skillIcon04,
		imgAlt: "skill mydevtoolkit ",
		title: "Educator Helps",
		desc: "You pick the schedule."
	}
];

const Skill = () => {
	return (
		<div className="skill-section padding-tb">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-5 col-12">
						<div className="section-header">
							<h2 className="title">{title}</h2>
							<Link to="/signup" className="lab-btn">
								<span>{btnText}</span>
							</Link>
						</div>
					</div>
					<div className="col-lg-7 col-12">
						<div className="section-wrpper">
							<div className="row g-4 justify-content-center row-cols-sm-2 row-cols-1">
								{skillList.map((val, i) => (
									<div className="col" key={i}>
										<div className="skill-item">
											<div className="skill-inner">
												<div className="skill-thumb">
													<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
												</div>
												<div className="skill-content">
													<h5>{val.title}</h5>
													<p>{val.desc}</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
