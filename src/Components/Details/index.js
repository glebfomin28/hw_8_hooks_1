import React, {useEffect, useState} from 'react';

export const Details = ({info}) => {

    const [isLoaderTwo, setIsLoaderTwo] = useState(false);
    const [cardUser, setCardUser] = useState([])
    const [loadID, setLoadID] = useState([]);
    const [indexAva, setIndexAva] = useState(0);

    const serachIndexAva = (id) => {
            const ind = loadID.findIndex(el => el === id);
            if (ind === -1) {
                setIndexAva(cardUser.length)
            } else {
                setIndexAva(ind)
            }
    }

    const refresh = () => {
        setIsLoaderTwo(true)
        if (!loadID.includes(info.id)) {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
                .then((response) => response.json())
                .then((json) => {
                    setCardUser([...cardUser, json])
                    setIsLoaderTwo(false)
                    serachIndexAva(json.id)
                });
            if (loadID.length !== 0) setLoadID(p => [...p, info.id])
            else setLoadID([info.id])
        } else serachIndexAva(info.id)
    }

    useEffect(() => {
        refresh()
    }, [info.id]);
    return (
        <>
            {cardUser.length !== 0 ?
                <div className="detailsBody">
                    <img className="avatar" src={`${cardUser[indexAva].avatar}?${cardUser[indexAva].id}`}  alt="avatar"/>
                    <div className="userName">{cardUser[indexAva].name}</div>
                    <div className="userInfo">{cardUser[indexAva].details.city}</div>
                    <div className="userInfo">{cardUser[indexAva].details.company}</div>
                    <div className="userInfo">{cardUser[indexAva].details.position}</div>
                </div> : null
            }
        </>

    );
}

