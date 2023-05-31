import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouletteButton from './components/RouletteButton';
import { useSelector } from 'react-redux';
import { selectCount } from '../stores/counterSlice';
import { selectResult } from '../stores/roulleterSlice';

function updateTweetURL(result: string, count: number) {
  const text1 = encodeURI(result + '\n');
  const text2 = encodeURI(
    '\n' + count + ' 回 あけおめルーレットをまわしました\n'
  );
  const hashtag = encodeURI('あけおめルーレット');
  const url = encodeURI('trimscash.github.io/akeome');
  const encodedURL =
    'https://twitter.com/intent/tweet?&text=' +
    text1 +
    '%20%23' +
    hashtag +
    '%20' +
    text2 +
    '&url=' +
    url;
  return encodedURL;
}

function App() {
  const value = useSelector(selectCount);
  const result = useSelector(selectResult);

  return (
    <div>
      <Header />
      <div id="main">
        <h2 id="counter">{value} 回目</h2>
        <h1 id="result">
          {result}
          <br />
        </h1>
        <div className="buttons">
          <RouletteButton />
          <a id="tweetButton" href={updateTweetURL(result, value)}>
            <img className="tweetButtonImage" src="./circleTweet.png" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
