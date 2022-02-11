import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

class NavArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bg-slate-400'>
                <Link href='/'>
                    <a>
                        <div className='flex justify-center items-center'>
                            <Image
                                src="/codernongTransparent.png"
                                alt="codernong.com logo"
                                width={110}
                                height={110}
                                layout='fixed'
                            />
                            <h1 className='text-3xl md:text-4xl font-normal text-stone-800'>程序员常见问题大典</h1>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
}

export default NavArea;