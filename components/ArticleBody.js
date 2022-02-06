import React from 'react';

class ArticleBody extends React.Component {
    constructor(props) {
        super(props);
        this.articleDetail = props.articleDetail;
    }

    render() {
        const zhAnswerBodyHtmlList = this.articleDetail.zhAnswerBodyHtmlList;
        return (
            <div className='px-4 py-2 bg-slate-50' id="articleArea">                    
                    <div className='mt-2 mb-10 px-2 py-2 rounded-md shadow-md bg-slate-300' id="questionArea">
                    <h1 className='my-5 text-4xl font-semibold'>
                        {this.articleDetail.zhTitle}
                    </h1>
                        <div className='swArea' dangerouslySetInnerHTML={{ __html: this.articleDetail.zhQuestionBodyHtml }} />
                    </div>
                    <div className='my-5' id="answersArea">
                        {zhAnswerBodyHtmlList.map((itemHtml, idx) => {
                            return (
                                <div className={`swArea my-4 px-2 py-2 rounded-md shadow-md ring-2 ring-blue-500 ring-offset-0 ${idx % 2 == 0 ? "bg-slate-200" : "bg-blue-50"}`} id={"answer-" + idx}>
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