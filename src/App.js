import React from 'react';
import './App.css';
import Name from "./Profile/Profile component/Name";
import anonyme from "./Assets/anonyme.png"
function App() {
  let profile = {
    fullName: "Maher Abderrahmen",
    bio: "Tunisian",
    profession: "Fullstack web developer",
  };

  const handelChange = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <Name
        fullName={profile.fullName}
        bio={profile.bio}
        profession={profile.profession}
        handelChanggit
        inite={handelChange}
      >
        <img src={anonyme} alt="anonyme" style={{ width: "250px" }} />
      </Name>

      <br></br>
    </div>
  );
}

export default App;
