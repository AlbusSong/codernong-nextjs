import { getServerSideSitemap } from 'next-sitemap';
import { URL_PREFIX } from '../zothers/GlobalVar';

const sitemap = () => {}

export default sitemap;

export async function getStaticProps(context) {
    const articleIdListData = await fetch(URL_PREFIX + "/articleIdList");
    const articleIdListDataJson = await articleIdListData.json();
    const articleIdList = articleIdListDataJson["data"];    
    let fields = [
        {
        loc: 'https://codernong.com', // Absolute url
        lastmod: new Date().toISOString(),
        priority: 1.0,
      },
    ]
    
    articleIdList.forEach(element => {
        const dynamicField = {
            loc: "https://codernong.com/a/" + element,
            lastmod: new Date().toISOString(),
            priority: 0.8,
        };
        fields.push(dynamicField);
    });
    
    return getServerSideSitemap(context, fields);
}