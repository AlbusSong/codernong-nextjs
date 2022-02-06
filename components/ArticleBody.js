import React from 'react';

class ArticleBody extends React.Component {
    constructor(props) {
        super(props);
        this.articleDetail = props.articleDetail;
    }

    render() {
        const zhAnswerBodyHtmlList = this.articleDetail.zhAnswerBodyHtmlList;
        return (
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
        )
    }
}

export default ArticleBody;