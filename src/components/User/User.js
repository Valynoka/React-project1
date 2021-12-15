import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './User.js.css'


function User() {
    const {userId} = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users?id=${userId}`).then((response) => {
            const currentUser = response.data.data;
            setUser(currentUser);
        });
    }, []);

    if (!user) {
        return (
            <div className={'user__loading'}>Loading...</div>
        )
    }


    function UserId() {
        return (
            <h3 className={'user__title'}>Пользователь: {userId} </h3>
        )
    }

    function UserInfo() {
        const {avatar, email, first_name, last_name} = user
        return (
            <>
                <img className={'user__photo'} src={avatar} alt="avatar" />
                <p className={'user__text'}>email: {email}</p>
                <p className={'user__text'}> Name: {first_name}</p>
                <p className={'user__text'}> Lastname: {last_name}</p>
            </>
        )
    }

    return (
        <>
            <UserId/>
            <UserInfo/>
        </>
    )
}


export default User;
