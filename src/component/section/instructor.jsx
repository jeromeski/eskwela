import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

import instructorImg01 from "assets/images/instructor/01.jpg";
import instructorImg02 from "assets/images/instructor/02.jpg";
import instructorImg03 from "assets/images/instructor/03.jpg";
import instructorImg04 from "assets/images/instructor/04.jpg";

const subTitle = "World-class Instructors";
const title = "Classes Taught By Real Creators";

const instructorList = [
	{
		id: 1,
		name: "Malynda Badwick",
		email: "mbadwick0@netvibes.com",
		gender: "Female",
		imgUrl: instructorImg01,
		courseCount: 7,
		imgAlt: "instructor aliquam",
		studentAnroll: 194,
		degi: "Occupational Therapist"
	},
	{
		id: 2,
		name: "Hayden Millyard",
		email: "hmillyard1@mysql.com",
		gender: "Male",
		imgUrl: instructorImg02,
		courseCount: 10,
		imgAlt: "instructor non",
		studentAnroll: 190,
		degi: "Director of Sales"
	},
	{
		id: 3,
		name: "Hendrik Campos",
		email: "hcampos2@cyberchimps.com",
		gender: "Male",
		imgUrl: instructorImg03,
		courseCount: 5,
		imgAlt: "instructor id sapien",
		studentAnroll: 181,
		degi: "Payment Adjustment Coordinator"
	},
	{
		id: 4,
		name: "Dale Munroe",
		email: "dmunroe3@omniture.com",
		gender: "Polygender",
		imgUrl: instructorImg04,
		courseCount: 6,
		imgAlt: "instructor sit",
		studentAnroll: 62,
		degi: "Information Systems Manager"
	}
];

const Instructor = () => {
	return (
		<div className="instructor-section padding-tb section-bg">
			<div className="container">
				<div className="section-header text-center">
					<span className="subtitle">{subTitle}</span>
					<h2 className="title">{title}</h2>
				</div>
				<div className="section-wrapper">
					<div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
						{instructorList.map((val, i) => (
							<div className="col" key={i}>
								<div className="instructor-item">
									<div className="instructor-inner">
										<div className="instructor-thumb">
											<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
										</div>
										<div className="instructor-content">
											<Link to="/team-single">
												<h4>{val.name}</h4>
											</Link>
											<p>{val.degi}</p>
											<Rating />
										</div>
									</div>
									<div className="instructor-footer">
										<ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
											<li>
												<i className="icofont-book-alt"></i> {val.courseCount}
											</li>
											<li>
												<i className="icofont-users-alt-3"></i> {val.studentAnroll}
											</li>
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center footer-btn">
						<p>
							Want to help people learn, grow and achieve more in life?
							<Link to="/team">Become an instructor</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Instructor;
