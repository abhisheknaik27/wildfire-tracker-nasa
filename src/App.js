import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from './components/Loader';
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await response.json();

      setEventData(events);
      setLoading(false);
    }
    
    fetchEvent()
    
  }, []);

  return (
    <div>
      <Header/>
      { !loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
