import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import NewsCard from './components/newCard/NewsCard.jsx';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await 
  
        axios.get(
          'https://newsapi.org/v2/everything?q=tesla&from=2024-11-1&sortBy=publishedAt&pageSize=12&apiKey=478f6f782df94f85ae8504f796503aad'
        );
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchArticles();
  }, []);

  if (error) return alert("ERORR")

  return (
    <>
    <div className="App">
    <Nav/>
      <div className='newsDiv'>
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
        <Footer/>
    </>
  );
}

export default App;
