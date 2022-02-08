import React from 'react';
import Link from 'next/link';

class NavArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='py-10 bg-slate-500 flex   justify-center items-center'>
                <Link href='/'>
                    <a>
                        <h1 className='text-4xl'>程序员常见问题大典</h1>
                    </a>
                </Link>
            </div>
        )
    }
}

export default NavArea;