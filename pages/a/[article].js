import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import NavArea from '../../components/NavArea';
import ArticleBody from '../../components/ArticleBody';
import { URL_PREFIX } from '../../zothers/GlobalVar';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.articleDetail = props.articleDetail;
    }

    componentDidMount() {
        // console.log("aaaaaaa:", this.articleDetail.zhTitle);
    }

    render() {
        const metaTitle = this.articleDetail.zhTitle;
        const metaKeywords = this.articleDetail.tagList;
        const metaDescription = this.articleDetail.zhDesc;
        return (
            <div className="container mx-auto">
                <Head>
                    <title>{metaTitle}</title>
                    <meta name="description" content={metaDescription} />
                    <meta name="keywords" content={"码农家园,IT工具网,程序员,开发,问题,编程,github,stackoverflow," + metaKeywords} />
                    <meta name="author" content="codernong.com" />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                </Head>
                <NavArea />
                <ArticleBody articleDetail={this.articleDetail} />
                <Footer />
            </div>
        );
    }
}

export default ArticleDetail;

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {
    let params = context.params;
    console.log("params:", params);
    const articleId = params.article;
    const articleDetailData = await fetch(URL_PREFIX + "articleDetail?articleId=" + encodeURIComponent(articleId));
    const articleDetailJson = await articleDetailData.json();
    const articleDetail = articleDetailJson["data"];
    // console.log("articleDetail:", articleDetail["zhDesc"]);
    return {
        props: {
            articleDetail
        }
    }
}

// export async function getStaticPaths(context) {
//     const articleIdListData = await fetch(URL_PREFIX + "/articleIdList");
//     const articleIdListDataJson = await articleIdListData.json();
//     const articleIdList = articleIdListDataJson["data"];

//     let paths = [];
//     articleIdList.forEach(e => {
//         const p = "/a/" + e;
//         paths.push(p);
//     });

//     return {
//         paths: paths,
//         fallback: false,
//     }
// }