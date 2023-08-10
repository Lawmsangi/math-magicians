import { useEffect, useState } from 'react';
import '../css/Quotes.css';

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'OfLmd6NHu3M738oZgj/jBg==h1MlJGB2TSBaKuQo' },
        contentType: 'application/json',
      };
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?catergory=inspirational', options);
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Something is wrong with your API!</div>;

  if (isLoading) return <div>Loading...wait for a few seconds😉</div>;

  return (
    <div className="quotes">
      {quote.map((item) => (
        <h3 key={item.author}>
          {item.category}
          -
          {' '}
          <span>{item.quote}</span>
        </h3>
      ))}
    </div>
  );
}
