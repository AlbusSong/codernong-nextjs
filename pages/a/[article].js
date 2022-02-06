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
                    <div className='my-4 px-2 py-2 rounded-md shadow-md bg-gray-100' id="questionArea">
                        <div dangerouslySetInnerHTML={{ __html: this.articleDetail.zhQuestionBodyHtml }} />
                    </div>
                    <div className='my-5 bg-gray-100' id="answersArea">
                        {zhAnswerBodyHtmlList.map((itemHtml, idx) => {
                            return (
                                <div className={`my-4 px-2 py-2 rounded-md shadow-md ${idx % 2 == 0 ? "bg-gray-50" : "bg-blue-50"}`} id={"answer-" + idx}>
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