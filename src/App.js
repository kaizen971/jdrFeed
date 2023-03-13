import React, { useState } from 'react';
import './App.css';

function App() {
  const [numPeople, setNumPeople] = useState(6);
  const [numDays, setNumDays] = useState(0);
  const [rationPerPerson, setRationPerPerson] = useState(2);
  const [totalRation, setTotalRation] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = numPeople * numDays * rationPerPerson;
    setTotalRation(total);
  };



  return (
    <div className="form-container">
      <img src={"https://logo-marque.com/wp-content/uploads/2022/01/Dungeons-Dragons-Logo.png"} alt="D&D logo" className="logo" />
      <h2>Calculateur de ration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de personnes :
          <input type="number" value={numPeople} onChange={(e) => setNumPeople(e.target.value)} />
        </label>
        <label>
          Nombre de jours :
          <input type="number" value={numDays} onChange={(e) => setNumDays(e.target.value)} />
        </label>
        <label>
          Ration par personne par jour :
          <input type="number"  value={rationPerPerson} onChange={(e) => setRationPerPerson(e.target.value)} />
        </label>
        <div style={{justifyContent:"center",display:"flex"}}>
        <button type="submit">Calculer</button>
        </div>
      </form>
      {totalRation > 0 && (
        <p className="result">
          Ration totale nécessaire : {totalRation} unités et {totalRation * 5} pièces d'argent
        </p>
      )}
    </div>
  );
}

export default App;
