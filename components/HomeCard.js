import React from 'react';
import { white } from '../zothers/GlobalTool';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.index = this.props.index;
        this.itemData = this.props.itemData;
    }

    render() {
        console.log("this.itemData:", this.itemData);
        const hrefPath = "/a/" + this.itemData.articleId;
        return (
            <div className='w-full px-2 py-2 break-inside-avoid-column' style={{  backgroundColor: `${white()}` }}>
                <div className='w-full h-full px-3 py-3 rounded-md border-2 border-dashed shadow-md text-ellipsis overflow-hidden border-slate-200 bg-slate-50'>                    
                    <h2 className='text-black-200 text-3xl font-medium break-words'>
                        {this.itemData.zhTitle}
                    </h2>
                    <a href= {hrefPath}>
                    <h5 className='mt-3 text-lg text-gray-700 text-ellipsis break-words leading-relaxed'>
                    {this.itemData.zhDesc}
                    </h5>
                    </a>                    
                </div>
            </div>
        );
    }
}

export default HomeCard;