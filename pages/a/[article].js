import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import NavArea from '../../components/NavArea';
import ArticleBody from '../../components/ArticleBody';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.articleDetail = props.articleDetail;
    }

    componentDidMount() {
        console.log("aaaaaaa:", this.articleDetail.zhTitle);
    }

    render() {
        return (
            <div className="container mx-auto">
                <NavArea />
                <ArticleBody articleDetail={this.articleDetail} />
                <Footer />
            </div>
        );
    }
}

export default ArticleDetail;

export async function getStaticProps(context) {
    let params = context.params;
    console.log("params:", params);
    const articleId = params.article;
    const articleDetailData = await fetch("http://127.0.0.1:9002/articleDetail?articleId=" + encodeURIComponent(articleId));
    const articleDetailJson = await articleDetailData.json();
    const articleDetail = articleDetailJson["data"];

    return {
        props: {
            articleDetail
        }
    }
}

export async function getStaticPaths(context) {
    const articleIdListData = await fetch("http://127.0.0.1:9002/articleIdList");
    const articleIdListDataJson = await articleIdListData.json();
    const articleIdList = articleIdListDataJson["data"];

    let paths = [];
    articleIdList.forEach(e => {
        const p = "/a/" + e;
        paths.push(p);
    });

    return {
        paths: paths,
        fallback: false,
    }
}