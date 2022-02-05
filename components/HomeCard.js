import React from 'react';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.index = this.props.index;
    }

    randomRange(a, b) {
        return Math.round(Math.random() * (b - a)) + a;
    }

    render() {
        const randomH = this.randomRange(200, 500);
        return (
            <div className='w-full break-inside-avoid-column overflow-y-hidden bg-red-200' style={{ "height": `${randomH}px` }}>
                索引：{this.index}
            </div>
        );
    }
}

export default HomeCard;