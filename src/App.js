import React, {useEffect, useState} from 'react';
import './App.css';
import {List} from "./Components/List";
import {Details} from "./Components/Details";

function App() {

  const [dataUsers, setDataUsers] = useState()
  const [isLoader, setIsLoader] = useState(false)
  const [infoUser, setInfoUser] = useState({id: null, name:null})

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then((response) => response.json())
        .then((json) => {
          setIsLoader(true)
          setDataUsers(json)
        });
  }, []);

  const getInfoUser = (id, name) => {
      setInfoUser({id: id, name: name})
  }

  return (
    <div className="App">
      {isLoader?
          <List
              dataUsers={dataUsers}
              getInfoUser={getInfoUser}
          />
          : <p>Загрузка...</p>}

        {infoUser.id !== null? <Details dataUsers={dataUsers} info={infoUser}/> : null}

    </div>
  );
}

export default App;
