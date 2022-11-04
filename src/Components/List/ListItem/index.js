import React from 'react';

export const ListItem = ({id, name, getInfoUser}) => {

    const onGetInfoUsers = () => {
        getInfoUser(id, name)
    }

    return (
        <div className="listUnit" onClick={onGetInfoUsers}>{name}</div>
    );
}

