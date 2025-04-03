import Nav from "./Components/Nav";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="main-container">
        <ProfileCard />
      </div>
    </>
  );
}

export default App;
