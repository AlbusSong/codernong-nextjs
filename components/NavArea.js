import React from 'react';

class NavArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='h-20 bg-slate-500 flex   justify-center items-center'>
                <h1 className='text-xl'>程序员常见问题大典</h1>
            </div>
        )
    }
}

export default NavArea;