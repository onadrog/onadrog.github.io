import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";
// @ts-ignore
import image from "../assets/social.png";
// @ts-ignore
import pic from "../assets/ascii.png";

export interface Author {
	firstname: string;
	bio: string;
	profilePic: ImageMetadata;
	os?: string;
	shell?: string;
	lastname: string;
	socials: Socials[];
}

export interface Socials {
	name: string;
	link: string;
}

export interface Site {
	lang: string;
	rssTitle: string;
	siteName: string;
	title: string;
	description: string;
	image: ImageMetadata;
	twitterCreator: string;
	author: Author;
}

export const site: Site = {
	lang: "fr",
	rssTitle: "Onadrog's site",
	siteName: "Cmd_Theme",
	title: "Onadrog site perso.",
	description:
		"Site perso où je poste mes bouts de codes, mes projets en tout genre. Mon Portfolio.",
	image: image,
	twitterCreator: "",
	author: {
		os: "Linux",
		profilePic: pic,
		shell: "Bash",
		bio: "Développeur web, qui aime aussi bricoler du code mais aussi IRL. Ce site est un mélange de portfolio, blog et bouts de code.",
		firstname: "Sébastien",
		lastname: "Gordano",
		socials: [
			{
				name: "github",
				link: "https://github.com/onadrog",
			},
			{ name: "Exercism", link: "https://exercism.org/profiles/onadrog" },
			{
				name: "FrontEndMentor",
				link: "https://www.frontendmentor.io/profile/onadrog",
			},
		],
	},
};
