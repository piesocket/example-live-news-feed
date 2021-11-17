import './App.css';
import React, { Component } from 'react';
import PieSocket from 'piesocket-js';
import { useEffect, useState } from 'react';

var piesocket = new PieSocket({
  clusterId: 'free3',
  apiKey: 'BtHma4899Ddilx70w1U8oDdGR09GMCSbzy67titD'
});

var channel = piesocket.subscribe("live-news"); 

channel.on('open', function(event){
  console.log("PieSocket connected!");
});

function App() {

  const [news, setNews] = useState([]);
  
  useEffect(() => {
    channel.listen('tech-news', data => {
      // console.log(data.articles[0]);
      data.articles.map(e => 
        setNews(currentData => [ ...currentData, e])
        )
      
    });
  }, []);

  console.log(news);
  return (
    <div className="App">
            <h1 className="heading">Live Technology Feed</h1>
            <hr></hr><hr></hr>
            <ul className="list-news"> {news.map((n,i) => <li key={1 + Math.random() * (1000 - 1)}><a href={n.url}>{n.title}</a></li>)}</ul>
    </div>
  );
}


export default App;
