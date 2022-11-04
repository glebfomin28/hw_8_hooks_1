import React from 'react';
import {ListItem} from "./ListItem";

export const List = ({dataUsers, getInfoUser}) => {

    const printUser = dataUsers.map(el =>
        <ListItem key={el.id} id={el.id} name={el.name} getInfoUser={getInfoUser}/>
    )
    return (
        <div className="listBody">
            {printUser}
        </div>
    );
}

