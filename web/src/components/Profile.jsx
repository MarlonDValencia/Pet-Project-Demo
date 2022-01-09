import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/UserAction";
import { fetchNewUser } from "../actions/UserAction";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";

const Profile = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const persona = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    firstName:"",
    lastName:""
  });

  useEffect(() => {
    dispatch(fetchUser("marlondvalencia@email.net"));
  }, [state]);

  const completeEdit = (e) => {
    e.preventDefault();
    const email = user.email
    const name = state.firstName
    const lastname = state.lastName
    const json = {"email":email,"firstName":name,"lastName":lastname}
    console.log((json))
    dispatch(fetchNewUser(json));
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form action={completeEdit}>
        <div className="mt-5 container">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={user.email}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Nombre
            </label>
            <div class="col-sm-10">
              <input
                name="firstName"
                type="text"
                placeholder="Nombre"
                class="form-control"
                id="inputPassword"
                onChange={onChange}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Nombre
            </label>
            <div class="col-sm-10">
              <input
                name="lastName"
                type="text"
                class="form-control"
                placeholder="Apellido"
                id="inputPassword"
                onChange={onChange}
              />
            </div>
          </div>
          <button onClick={completeEdit} className="button">
            Editar
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;