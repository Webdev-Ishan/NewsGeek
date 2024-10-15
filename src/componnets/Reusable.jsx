import React, { useEffect } from 'react'
import Newsitem from './Newsitem';

function Reusable({category}) {
  
  const [articles,setarticles]=React.useState([]);

  useEffect(()=>{

const url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d94697b3ab7640a691e25fdeab8a7bd6`
fetch(url)
.then((response)=>response.json())
.then(data=>{
  console.log(data);
  setarticles(data.articles)})

  },[])

  return (
<div className='bg-secondary' style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOucjFNwv1D6E7u81igkC0HKzdvnSyHxsq3A&s')"}}>
      
        {articles.map((news, index) => {
          return (
            <Newsitem
              key={index} // Use news.id if it exists, otherwise use index
              title={news.title}
              description={news.description}
              url={news.url}
              src={news.urlToImage}
            />
          );
        }
        )
      }
    </div>
  );
}

export default Reusable;
