import type { LucideIcon } from "lucide-react";
// import type * as React from 'react';

export type TLink = {
	label: string;
	href: string;
	Icon?: LucideIcon | React.ComponentType<React.HTMLAttributes<SVGElement>>;
	external?: boolean;
};

export type Author = {
	name: string;
	url: string;
};
export type Trobots = "noindex, nofollow" | "index, follow";
export type TImage = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};
// nav data
export type TnavData = {
	logo?: TImage;
	showTitle: boolean;
	title: string;
	links: TLink[];
	iconButtons: TLink[];
};
type TSimpleFooterText = {
	pretext: string;
	label: string;
	url: string;
};
export type TSimpleFooterData = {
	texts: TSimpleFooterText[];
	socialLinks: TLink[];
};

export type MetadataColor = {
	light: string;
	dark: string;
};
// site data types
export type TSiteData = {
	favicon: string;
	name: string;
	shortName: string;
	publisher: string;
	baseUrl: string;
	description: string;
	ogImage: TImage;
	metadata_color: MetadataColor;
	author: Author;
	keywords: string[];
	robotsDefault: Trobots;
};

export type TtwitterMetaData = {
	card: "summary_large_image";
	title: string;
	description: string;
	image: string;
	creator: string;
};
export type TMetadataIcons = {
	icon: string;
	shortcut: string;
	apple: string;
};

export type MetadataProps = {
	url?: string | URL;
	title?: string;
	description?: string;
	robots?: Trobots;
	ogTitle?: string;
	ogImage?: TImage;
	keywords?: string[];
	author?: Author;
	metadataColor?: MetadataColor;
	metadataIcons?: TMetadataIcons;
};
