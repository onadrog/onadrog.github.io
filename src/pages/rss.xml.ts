import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { site as siteData } from "../data/site";

export async function get({ site }: { site: string }) {
    const proj = await getCollection("projets");
    return rss({
        title: siteData.rssTitle,
        description: siteData.description,
        site: site,
        items: [
            ...proj.map((post) => ({
                categories: post.data.tags,
                link: `/${post.collection}/${post.slug}`,
                title: post.data.title,
                description: post.data.description,
                pubDate: post.data.pubDate,
            })),
        ],
    });
}
