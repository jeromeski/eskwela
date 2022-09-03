import blogImg01 from "assets/images/blog/01.jpg";
import blogImg02 from "assets/images/blog/02.jpg";
import blogImg03 from "assets/images/blog/03.jpg";
import blogImg04 from "assets/images/blog/04.jpg";
import blogImg05 from "assets/images/blog/05.jpg";
import blogImg06 from "assets/images/blog/06.jpg";
import blogImg07 from "assets/images/blog/07.jpg";
import blogImg08 from "assets/images/blog/08.jpg";
import blogImg09 from "assets/images/blog/09.jpg";
import blogImg10 from "assets/images/blog/10.jpg";
import blogImg11 from "assets/images/blog/11.jpg";
import blogImg12 from "assets/images/blog/12.jpg";

const blogListOne = [
	{
		id: 1,
		imgUrl: blogImg01,
		randomAlt: "Cross-platform",
		imgAlt: "mydevtoolkit, Cross-platform",
		title: "Team-oriented local forecast",
		author: "Dru Biskupiak",
		date: "05-Jun-2022",
		desc: "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
		btnText: " Read more",
		commentCount: 25
	},
	{
		id: 2,
		imgUrl: blogImg02,
		randomAlt: "Right-sized",
		imgAlt: "mydevtoolkit, Right-sized",
		title: "Ameliorated global system engine",
		author: "Emilia Birtwisle",
		date: "03-May-2022",
		desc: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
		btnText: " Read more",
		commentCount: 40
	},
	{
		id: 3,
		imgUrl: blogImg03,
		randomAlt: "Polarised",
		imgAlt: "mydevtoolkit, Polarised",
		title: "Sharable real-time parallelism",
		author: "Chantalle Daile",
		date: "11-Mar-2022",
		desc: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
		btnText: " Read more",
		commentCount: 17
	},
	{
		id: 4,
		imgUrl: blogImg04,
		randomAlt: "Enterprise-wide",
		imgAlt: "mydevtoolkit, Enterprise-wide",
		title: "Quality-focused static info-mediaries",
		author: "Jessee Courage",
		date: "24-Mar-2022",
		desc: "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
		btnText: " Read more",
		commentCount: 94
	},
	{
		id: 5,
		imgUrl: blogImg05,
		randomAlt: "Cross-group",
		imgAlt: "mydevtoolkit, Cross-group",
		title: "Advanced next generation artificial intelligence",
		author: "Lurlene Janc",
		date: "20-Feb-2022",
		desc: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
		btnText: " Read more",
		commentCount: 73
	},
	{
		id: 6,
		imgUrl: blogImg06,
		randomAlt: "software",
		imgAlt: "mydevtoolkit, software",
		title: "Decentralized foreground initiative",
		author: "Shanie Jeffree",
		date: "13-Jan-2022",
		desc: "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
		btnText: " Read more",
		commentCount: 81
	},
	{
		id: 7,
		imgUrl: blogImg07,
		randomAlt: "solution-oriented",
		imgAlt: "mydevtoolkit, solution-oriented",
		title: "Streamlined neutral challenge",
		author: "Kevin Wyant",
		date: "25-Jul-2022",
		desc: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
		btnText: " Read more",
		commentCount: 91
	},
	{
		id: 8,
		imgUrl: blogImg08,
		randomAlt: "mobile",
		imgAlt: "mydevtoolkit, mobile",
		title: "Diverse composite contingency",
		author: "Randie Lambole",
		date: "22-Aug-2022",
		desc: "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
		btnText: " Read more",
		commentCount: 67
	},
	{
		id: 9,
		imgUrl: blogImg09,
		randomAlt: "definition",
		imgAlt: "mydevtoolkit, definition",
		title: "Up-sized optimizing hierarchy",
		author: "Gilberte Vanacci",
		date: "16-Dec-2021",
		desc: "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		btnText: " Read more",
		commentCount: 46
	},
	{
		id: 10,
		imgUrl: blogImg10,
		randomAlt: "holistic",
		imgAlt: "mydevtoolkit, holistic",
		title: "Quality-focused 4th generation toolset",
		author: "Dennison Syratt",
		date: "20-May-2022",
		desc: "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
		btnText: " Read more",
		commentCount: 66
	},
	{
		id: 11,
		imgUrl: blogImg11,
		randomAlt: "open system",
		imgAlt: "mydevtoolkit, open system",
		title: "User-centric local protocol",
		author: "Auroora Salway",
		date: "13-Jul-2022",
		desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
		btnText: " Read more",
		commentCount: 99
	},
	{
		id: 12,
		imgUrl: blogImg12,
		randomAlt: "hub",
		imgAlt: "mydevtoolkit, hub",
		title: "Public-key responsive toolset",
		author: "Clary Warby",
		date: "19-Feb-2022",
		desc: "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
		btnText: " Read more",
		commentCount: 71
	},
	{
		id: 13,
		imgUrl: "https://robohash.org/ideosut.png?size=50x50&set=set1",
		randomAlt: "focus group",
		imgAlt: "mydevtoolkit, focus group",
		title: "Focused content-based encoding",
		author: "Meg Rosingdall",
		date: "09-Mar-2022",
		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
		btnText: " Read more",
		commentCount: 63
	},
	{
		id: 14,
		imgUrl: "https://robohash.org/similiquequamcorrupti.png?size=50x50&set=set1",
		randomAlt: "benchmark",
		imgAlt: "mydevtoolkit, benchmark",
		title: "Realigned next generation frame",
		author: "Emmy Ipplett",
		date: "10-Jun-2022",
		desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
		btnText: " Read more",
		commentCount: 66
	},
	{
		id: 15,
		imgUrl: "https://robohash.org/quamquicommodi.png?size=50x50&set=set1",
		randomAlt: "Phased",
		imgAlt: "mydevtoolkit, Phased",
		title: "Robust static utilisation",
		author: "Juieta Chung",
		date: "07-Dec-2021",
		desc: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
		btnText: " Read more",
		commentCount: 77
	},
	{
		id: 16,
		imgUrl: "https://robohash.org/solutaoptiovoluptatem.png?size=50x50&set=set1",
		randomAlt: "application",
		imgAlt: "mydevtoolkit, application",
		title: "Customer-focused client-server focus group",
		author: "Ruttger O'Beirne",
		date: "05-Sep-2021",
		desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
		btnText: " Read more",
		commentCount: 31
	},
	{
		id: 17,
		imgUrl: "https://robohash.org/maioresutunde.png?size=50x50&set=set1",
		randomAlt: "Implemented",
		imgAlt: "mydevtoolkit, Implemented",
		title: "Managed systemic data-warehouse",
		author: "Tucker Stonestreet",
		date: "31-Aug-2022",
		desc: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
		btnText: " Read more",
		commentCount: 81
	},
	{
		id: 18,
		imgUrl: "https://robohash.org/culpaeiusdoloremque.png?size=50x50&set=set1",
		randomAlt: "middleware",
		imgAlt: "mydevtoolkit, middleware",
		title: "Front-line mission-critical infrastructure",
		author: "Reid Markwell",
		date: "04-May-2022",
		desc: "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
		btnText: " Read more",
		commentCount: 23
	},
	{
		id: 19,
		imgUrl: "https://robohash.org/consequatursuscipitqui.png?size=50x50&set=set1",
		randomAlt: "Expanded",
		imgAlt: "mydevtoolkit, Expanded",
		title: "Monitored methodical local area network",
		author: "Jannelle Camelli",
		date: "08-Jan-2022",
		desc: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
		btnText: " Read more",
		commentCount: 54
	},
	{
		id: 20,
		imgUrl: "https://robohash.org/aututrerum.png?size=50x50&set=set1",
		randomAlt: "Synchronised",
		imgAlt: "mydevtoolkit, Synchronised",
		title: "Reverse-engineered contextually-based definition",
		author: "Jeanna Duthie",
		date: "24-Jul-2022",
		desc: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
		btnText: " Read more",
		commentCount: 86
	}
];

const blogListTwo = [
	{
		imgUrl: blogImg01,
		imgAlt: "mydevtoolkit",
		title: "De-engineered web-enabled product",
		desc: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
		commentCount: 94,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Godiva Everington"
			},
			{
				iconName: "icofont-calendar",
				text: "31-Aug-2022"
			}
		]
	},
	{
		imgUrl: blogImg02,
		imgAlt: "mydevtoolkit",
		title: "Innovative multimedia extranet",
		desc: "Aliquam erat volutpat. In congue. Etiam justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		commentCount: 77,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Rusty Marginson"
			},
			{
				iconName: "icofont-calendar",
				text: "20-Sep-2021"
			}
		]
	},
	{
		imgUrl: blogImg03,
		imgAlt: "mydevtoolkit",
		title: "Automated fault-tolerant website",
		desc: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci.",
		commentCount: 53,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Donnie Bowshire"
			},
			{
				iconName: "icofont-calendar",
				text: "07-Feb-2022"
			}
		]
	},
	{
		imgUrl: blogImg04,
		imgAlt: "mydevtoolkit",
		title: "Optimized systemic Graphical User Interface",
		desc: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nullam sit amet turpis elementum ligula vehicula consequat.",
		commentCount: 89,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Dorree Blindmann"
			},
			{
				iconName: "icofont-calendar",
				text: "28-Apr-2022"
			}
		]
	},
	{
		imgUrl: blogImg05,
		imgAlt: "mydevtoolkit",
		title: "Reverse-engineered empowering utilisation",
		desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. ",
		commentCount: 95,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Sascha Ferson"
			},
			{
				iconName: "icofont-calendar",
				text: "13-Mar-2022"
			}
		]
	},
	{
		imgUrl: blogImg06,
		imgAlt: "mydevtoolkit",
		title: "Monitored 24/7 service-desk",
		desc: "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
		commentCount: 51,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Scarlet Kindle"
			},
			{
				iconName: "icofont-calendar",
				text: "18-Jun-2022"
			}
		]
	},
	{
		imgUrl: blogImg07,
		imgAlt: "mydevtoolkit",
		title: "Implemented radical task-force",
		desc: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus;",
		commentCount: 93,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Kahaleel Sans"
			},
			{
				iconName: "icofont-calendar",
				text: "02-May-2022"
			}
		]
	},
	{
		imgUrl: blogImg08,
		imgAlt: "mydevtoolkit",
		title: "Reactive content-based data-warehouse",
		desc: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
		commentCount: 53,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Billie Cocke"
			},
			{
				iconName: "icofont-calendar",
				text: "26-Aug-2022"
			}
		]
	},
	{
		imgUrl: blogImg09,
		imgAlt: "mydevtoolkit",
		title: "Fully-configurable transitional installation",
		desc: "In congue. Etiam justo. Etiam pretium iaculis justo.",
		commentCount: 91,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Irina McLaggan"
			},
			{
				iconName: "icofont-calendar",
				text: "29-Nov-2021"
			}
		]
	},
	{
		imgUrl: blogImg10,
		imgAlt: "mydevtoolkit",
		title: "Organic next generation alliance",
		desc: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
		commentCount: 64,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Darcey Zanioletti"
			},
			{
				iconName: "icofont-calendar",
				text: "09-Sep-2021"
			}
		]
	},
	{
		imgUrl: blogImg11,
		imgAlt: "mydevtoolkit",
		title: "Decentralized interactive core",
		desc: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
		commentCount: 93,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Sherye Kem"
			},
			{
				iconName: "icofont-calendar",
				text: "10-Aug-2022"
			}
		]
	},
	{
		imgUrl: blogImg12,
		imgAlt: "mydevtoolkit",
		title: "Virtual upward-trending alliance",
		desc: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
		commentCount: 89,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Chelsea Basezzi"
			},
			{
				iconName: "icofont-calendar",
				text: "11-Jun-2022"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/explicaboperspiciatisfugiat.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "De-engineered stable model",
		desc: "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
		commentCount: 96,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Kermie Badsworth"
			},
			{
				iconName: "icofont-calendar",
				text: "06-Apr-2022"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/corporisnihilfugiat.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "De-engineered even-keeled circuit",
		desc: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. ",
		commentCount: 53,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Kacy Meehan"
			},
			{
				iconName: "icofont-calendar",
				text: "09-Aug-2022"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/accusamusetut.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Reduced optimizing migration",
		desc: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
		commentCount: 68,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Emmalynne Sloam"
			},
			{
				iconName: "icofont-calendar",
				text: "10-Aug-2022"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/velitveroporro.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Adaptive high-level core",
		desc: "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
		commentCount: 62,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Doralynne Ollet"
			},
			{
				iconName: "icofont-calendar",
				text: "03-Oct-2021"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/utipsadelectus.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Devolved full-range knowledge user",
		desc: "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. ",
		commentCount: 76,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Muire Tuxsell"
			},
			{
				iconName: "icofont-calendar",
				text: "06-Dec-2021"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/eiusdelectusmolestias.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Inverse demand-driven task-force",
		desc: "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
		commentCount: 95,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Timmy Ferrillio"
			},
			{
				iconName: "icofont-calendar",
				text: "23-Jul-2022"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/nesciuntestconsequatur.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Inverse incremental attitude",
		desc: "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
		commentCount: 100,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Cletus Dingivan"
			},
			{
				iconName: "icofont-calendar",
				text: "22-Sep-2021"
			}
		]
	},
	{
		imgUrl: "https://robohash.org/doloresnatusut.png?size=50x50&set=set1",
		imgAlt: "mydevtoolkit",
		title: "Advanced attitude-oriented moderator",
		desc: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
		commentCount: 58,
		btnText: "Read More",
		metaList: [
			{
				iconName: "icofont-ui-user",
				text: "Odelle Pearde"
			},
			{
				iconName: "icofont-calendar",
				text: "28-Feb-2022"
			}
		]
	}
];

export { blogListOne, blogListTwo };
