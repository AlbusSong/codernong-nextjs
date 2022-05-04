import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="h-20 w-full mt-2 flex flex-col items-center justify-center bg-gray-700 text-white">
                <p>Copyright © 2022 codernong.com</p>
                <p>Contact: <a style={{"textDecoration":"underline"}}>strawberryfortwitter@gmail.com</a> </p>
            </div>
        )
    }
}

export default Footer;