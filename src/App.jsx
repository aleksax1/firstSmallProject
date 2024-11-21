import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { IoIosArrowDropupCircle } from "react-icons/io";
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
          'https://newsapi.org/v2/everything?q=tesla&from=2024-11-1&sortBy=publishedAt&pageSize=15&apiKey=478f6f782df94f85ae8504f796503aad'
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
    <div className='arrowUp'
        style={{
          position: "fixed",
          bottom: 40,
          right: 12,
          height: 60,
          width: "10vw",
          backgroundColor: "gray",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:"40px"
        }}
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
        <h5 
        style={{
          paddingRight:"5px"
        }}>GO TO TOP</h5>
         <IoIosArrowDropupCircle size={35} />
      </div>
        <Footer/>
    </>
  );
}

export default App;
