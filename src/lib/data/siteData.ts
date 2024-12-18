import type { TSiteData, TtwitterMetaData, TMetadataIcons } from "@/types";

// edit the webmanifest file in /public to change the name, short_name, and icons in android
// in webmanifest, theme_color is the color of the app icon's background and
export const siteData: TSiteData = {
    favicon: "/favicon.svg", // .svg / .ico / .png
    name: "Bunestro - Astro v5 Bun Starter",
    shortName: "BUNEXT",
    publisher: "bunextt.vercel.app",
    baseUrl: "bunextt.vercel.app",
    description:
        "BUNEXT is a Next.js 15 Bun Starter with Shadcn UI, Tailwind CSS, TypeScript, Zod, React Hook Form, React Email, Resend, and React Hot Toast.",
    ogImage: { src: "/ogImage.webp", alt: "Bunestro", width: 1200, height: 630 },
    metadata_color: {
        light: "#1acfff",
        dark: "#1acfff",
    },
    author: {
        name: "darkidop",
        url: "https://zeneticesports.com/darkid",
    },
    keywords: [
        "Astro.build",
        "React",
        "Tailwind CSS",
        "Bun",
        "Shadcn UI",
        "TypeScript",
        "Zod",
        "React Hook Form",
    ],

    robotsDefault: "index, follow", // { index: false, follow: false }
};



// these are defaults may get overwrited in specific routes
export const twitterMetaData: TtwitterMetaData = {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.description,
    image: siteData.ogImage.src,
    creator: "@darkidop", //twitter username of author
};

// By default, it uses the favicon mentioned at the top
export const icons: TMetadataIcons = {
    icon: siteData.favicon, // "/favicon.svg",
    shortcut: siteData.favicon, // "/favicon-16x16.png",
    apple: siteData.favicon, // "/apple-touch-icon.png",
};
