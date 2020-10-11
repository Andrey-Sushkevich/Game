import React from 'react';
import '../App.css';

export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='game'>
                {Game}
            </div>
        )
    }
}

class GameInterface {

  getUserDataFromInputs() {
        const players = document.getElementById("user_form").elements;
        const userData = {
            "first_name": players.first_name.value,
            "last_name":players.last_name.value,
            "email": players.email.value
        }
        return userData;
    }

  saveLastLoginData(userData, name_localStorage) {
        localStorage.setItem(name_localStorage, JSON.stringify(userData));
    }
/*сохранение в Local storage*/

  saveUserData(userData, name_localStorage) {
        let dataBase = null;
        if (!localStorage.getItem(name_localStorage)) {
            dataBase = [];
        }
        else {
            dataBase = JSON.parse(localStorage.getItem(name_localStorage));
        }
        if (GameInterface.isUnique(userData, dataBase)) {
            dataBase.push(userData);
            localStorage.setItem(name_localStorage, JSON.stringify(dataBase));
        }
    }

isUnique(obj, arrOfObjs) {
        for (let i = 0; i < arrOfObjs.length; i++) {
            if (JSON.stringify(obj) === JSON.stringify(arrOfObjs[i])) {
                return false;
            }
        }
        return true;
    }
/*получение из  Local storage*/
loadLastUserData() {
        if (localStorage.getItem("lastLoginUserData")) {
            const lastUserData = JSON.parse(localStorage.getItem("lastLoginUserData"));
            const players = document.getElementById("user_form").elements;
            players.first_name.value = lastUserData.first_name;
            players.last_name.value = lastUserData.last_name;
            players.email.value = lastUserData.email;
        }
    }
}
