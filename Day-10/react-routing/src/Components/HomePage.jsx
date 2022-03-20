import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 35%)',
          justifyContent: 'space-evenly',
          margin: 'auto',
          paddingTop: '10px',
        }}
      >
        {/* Iterate over products and show links */}
        {data.map((el) => {
          return (
            <Link
              to={`/products/${el.id}`}
              style={{ border: '1px solid red', marginBottom: '10px' }}
            >
              {el.name}
              <img src={el.image} alt='' width='50px' />
            </Link>
          );
        })}
      </div>
    </>
  );
};
