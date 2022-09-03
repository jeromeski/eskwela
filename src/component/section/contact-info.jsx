import contactIcon01 from "assets/images/contact/icon/01.png";
import contactIcon02 from "assets/images/contact/icon/02.png";

const title = (
	<h2 className="title">
		Need Any <span>Help?</span>
	</h2>
);
const desc =
	"You can contact with us for anykinds of informations and help. We are ready to help you.";

const contactInfoList = [
	{
		imgUrl: contactIcon01,
		imgAlt: "contactinfo mydevtoolkit ",
		subTitle: "Make a Call:",
		title: "+880 1234 567890"
	},
	{
		imgUrl: contactIcon02,
		imgAlt: "contactinfo mydevtoolkit ",
		subTitle: "Send Us Messege at:",
		title: "contact@eskwela.com"
	}
];

const ContactInfo = () => {
	return (
		<div className="contact-info-section padding-tb">
			<div className="container">
				<div className="section-header text-center">
					{title}
					<p>{desc}</p>
				</div>
				<div className="section-wrapper">
					<div className="cinfo-or">
						<span>Or</span>
					</div>
					{contactInfoList.map((val, i) => (
						<div className="cinfo-item" key={i}>
							<div className="cinfo-inner">
								<div className="cinfo-thumb">
									<img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
								</div>
								<div className="cinfo-content">
									<h6>{val.subTitle}</h6>
									<h4>{val.title}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
