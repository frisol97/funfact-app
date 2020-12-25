import React, { useState } from "react";

const API = "https://5fe66c64f22d9900174b5d84.mockapi.io/data";

interface Props{
    navn: string;
    sporsmal: string;
    svar: string;

}


export function Form() {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          toAddUser: {
            name: "",
            city: ""
          },
          userToUpdate: {
            something: ""
          },
          loading: true
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.onChangeAddUser = this.onChangeAddUser.bind(this);
      }
      componentDidMount() {
        this.getUsers();
      }
  return <form></form>;
}
