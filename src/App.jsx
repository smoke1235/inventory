
import './App.css'

import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;


function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}


function App() {

  return (
    <div>
      <div className='productList grid'>
      <Link to="/detail/1">
        <div className='product'>
          <div className='name'>Naam</div>
          <div className='stock'>Op voorraad: 5</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        </Link>
        <div className='product'>
          <div className='name'>Naam 2</div>
          <div className='stock'>Op voorraad: 1</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam 3</div>
          <div className='stock'>Op voorraad: 3</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam</div>
          <div className='stock'>Op voorraad: 5</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam 2</div>
          <div className='stock'>Op voorraad: 1</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam 3</div>
          <div className='stock'>Op voorraad: 3</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam</div>
          <div className='stock'>Op voorraad: 5</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam 2</div>
          <div className='stock'>Op voorraad: 1</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>
        <div className='product'>
          <div className='name'>Naam 3</div>
          <div className='stock'>Op voorraad: 3</div>
          <div className='lastupdated'>Laast bijgewerkt: 12-12-2024 11:30</div>
        </div>

      </div>


    <h2>My first Apollo app 🚀</h2>
    <br/>
    <DisplayLocations />
    <DisplayLocations />
  </div>
  )
}

export default App
