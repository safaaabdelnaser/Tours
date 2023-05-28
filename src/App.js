import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Componentent/Loading";
import Tours from "./Componentent/Tours";

function App() {
  const Api = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await fetch(Api);
      const tour = await response.json();
      console.log(tour);
      setTours(tour);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };
  const removeTour=(id)=>{
    const newData=tours.filter((tour)=>tour.id !== id)
    setTours(newData);
  }
useEffect(()=>{
  getTours();
},[]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0) {
return(
  <main>
    <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={getTours}>
          Refresh
        </button>
    </div>
  </main>
)
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
