import Header from "./Components/Header.jsx";
import Card from "./Components/Card.jsx";

import "./App.sass";

const App = () => {
  return (
    <main className="app">
      <Header />
      <div className="cards_section">
        <Card
          sala="Sala 1A"
          workerName="Wesley Souza"
          workerImage="https://picsum.photos/id/1011/25/25"
        />
        <Card
          sala="Sala 1B"
          workerName="Sidnei Dias"
          workerImage="https://picsum.photos/id/1012/25/25"
        />
        <Card sala="Sala 2A" />
        <Card sala="Sala 2B" />
        <Card sala="Sala 3" />
        <Card sala="Sala 4" />
        <Card sala="Sala 5A" />
        <Card sala="Sala 5B" />
        <Card sala="Sala 6A" />
        <Card sala="Sala 6B" />
        <Card sala="Sala 7" />
      </div>
    </main>
  );
};

export default App;
