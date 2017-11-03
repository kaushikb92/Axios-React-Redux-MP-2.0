import React from "react"
import { usersList } from '../constants'

export default function validateUser(data) {
    let i = 0
    let role = '';
    let len = usersList.length;

    while (i < len) {
        let id = usersList[i].logID;
        let pwd = usersList[i].pwd;
        let isAdmin = usersList[i].isAdmin;

        if (data.clientID === id && data.password === pwd) {
            if (isAdmin === true) {
                role = "Admin";
                return role;
            }
            else {
                role = "User";
                return role;
            }
        }
        else {
            role = "unidentified";
        }
        i++;

    }

    return role;
}