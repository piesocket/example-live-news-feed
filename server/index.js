const NewsAPI = require('newsapi');
const PieSocket = require("piesocket-nodejs");

var piesocket = new PieSocket({
    clusterId: 'free3',
    apiKey: 'BtHma4899Ddilx70w1U8oDdGR09GMCSbzy67titD',
    secret: 'NgUUUiZWAQubdCpx5CDePona8AeWLCIR'
});

const newsapi = new NewsAPI('b291a4a3c3144988905dc1932e8824cb');

var counter = 1;
setInterval(() => {
   
    newsapi.v2.everything({
        q: 'technology',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
        page: counter,
        pageSize : 6
      }).then(response => {
        console.log(response);
        piesocket.publish("live-news", "tech-news" , {
            articles : response.articles
        }
        );
        counter += 1;
      });

}, 5000);




