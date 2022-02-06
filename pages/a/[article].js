import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import NavArea from '../../components/NavArea';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.articleDetail = props.articleDetail;
    }

    componentDidMount() {
        console.log("aaaaaaa:", this.articleDetail.zhTitle);
    }

    render() {
        const zhAnswerBodyHtmlList = this.articleDetail.zhAnswerBodyHtmlList;
        return (
            <div className="container mx-auto">
                <NavArea />
                <div className='px-2 py-2 bg-slate-200' id="articleArea">
                    <h1 className='text-3xl'>
                        {this.articleDetail.zhTitle}
                    </h1>
                    <div className='my-4 bg-gray-100' id="questionArea">
                        <div dangerouslySetInnerHTML={{ __html: this.articleDetail.zhQuestionBodyHtml }} />
                    </div>
                    <div className='my-4 bg-gray-100' id="answersArea">
                        {zhAnswerBodyHtmlList.map((itemHtml, idx) => {
                            return (
                                <div className='my-4 bg-gray-100' id={"answer-" + idx}>
                                    <div dangerouslySetInnerHTML={{ __html: itemHtml }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
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
    // console.log("articleDetail:", articleDetail);

    // const category = params.category;
    // const itemdetail = params.itemdetail;
    // let path = "/" + category + "/" + itemdetail;
    // const requestMenuData = await fetch(("http://127.0.0.1:9000/menulist?webpath=" + encodeURIComponent(category)));
    // const menuData = await requestMenuData.json();

    // const requestSeoData = await fetch(("http://127.0.0.1:9000/seo?uri=" + encodeURIComponent(path)));
    // const seoData = await requestSeoData.json();

    // const requestArticleData = await fetch(("http://127.0.0.1:9000/articlepath?articlepath=" + encodeURIComponent(path)));
    // const articleData = await requestArticleData.text();
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