import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Footer from '../components/Footer.js';
import NavArea from '../components/NavArea';
import HomeCard from '../components/HomeCard';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.itemList = this.genItemList();
    this.tryToLoadMore.bind(this);
  }

  genItemList() {
    let result = [];
    for (let i = 0; i < 20; i++) {
      let hc = <HomeCard index={i} />
      result.push(hc);
    }
    return result;
  }

  tryToLoadMore() {
    console.log("tryToLoadMore");
  }

  render() {
    return (
      <div className="container mx-auto">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavArea />

        <div className='px-2 py-2 gap-8 columns-2xs space-y-2  bg-blue-100' id='groundarea'>
          {this.itemList}
        </div>

        <button className="w-full mt-3 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={this.tryToLoadMore}>
          加载更多
        </button>

        <Footer />
      </div>
    )
  }
}

export default Home;
