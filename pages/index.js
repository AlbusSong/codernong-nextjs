import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Footer from '../components/Footer.js';
import NavArea from '../components/NavArea';
import HomeCard from '../components/HomeCard';
import { URL_PREFIX } from '../zothers/GlobalVar';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.page = 1;
    this.tryToLoadMore = this.tryToLoadMore.bind(this);
    this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this);
    this.state = { itemList: props.initialArticleList, isLoading : false }
  }

  componentDidMount() {
    this.loadArticlesFromServer();
  }

  tryToLoadMore() {
    console.log("tryToLoadMore");

    this.setState({
      isLoading: true
    });

    this.page++;
    this.loadArticlesFromServer();
  }

  generateExceptionIds() {
    let idList = [];
    for (let i = 0; i < this.state.itemList.length; i++) {
      const item = this.state.itemList[i];
      idList.push(item.id);
    }
    return idList.join(",");
  }

  async loadArticlesFromServer() {
    const idListStr = this.generateExceptionIds();
    // const theUrl = "https://codernong.com:9002/articles?page=" + this.page;
    const theUrl = URL_PREFIX + "articles?page=" + this.page + "&exceptionIds=" + encodeURIComponent(idListStr);
    const articlesData = await fetch(theUrl);
    const articlesJson = await articlesData.json();
    const articleList = articlesJson["data"];

    var newestArticles = this.state.itemList;

    Array.prototype.push.apply(newestArticles, articleList);

    this.setState({ itemList: newestArticles, isLoading: false });
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className="container mx-auto">
        <Head>
          <title>程序员常见问题大典</title>
          <meta name="description" content="这里汇集了绝大部分程序员开发过程中会遇到的技术问题, 涉及到各个技术分支, 如Python,git,javascript,html/css,移动端开发等等。" />
          <link rel="icon" href="/codernongLogo.png" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>

        <NavArea />

        <div className='px-2 py-2 columns-2xs ' id='groundarea'>
          {this.state.itemList.map((item, idx) => {
            return <HomeCard key={idx} index={idx} itemData={item} />
          })}
        </div>

        <div className='px-4' id="buttonLoadMore">
          <button className={`w-full h-12 mt-3 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ${isLoading ? "invisible" : "visible"}`} onClick={ this.tryToLoadMore }>
            加载更多
          </button>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;

export async function getStaticProps(context) {
  // const theUrl = "http://127.0.0.1:9002/articles?page=0";
  const theUrl = URL_PREFIX + "articles?page=0&exceptionIds=" + encodeURIComponent("0");
  const articlesData = await fetch(theUrl);
  const articlesJson = await articlesData.json();
  const initialArticleList = articlesJson["data"];

  return {
      props: {
        initialArticleList
      }
  }
}



/*
瀑布流布局：
https://juejin.cn/post/6844904051310592014
*/