import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/UserAction";
import { fetchNewUser } from "../actions/UserAction";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { getTemplateInstallPackage } from "create-react-app/createReactApp";

const Profile = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const persona = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    info: {},
  });

  useEffect(() => {
    dispatch(fetchUser("marlondvalencia@email.net"));
  }, [state]);

  const completeEdit = (e) => {
    e.preventDefault();
    const email = "pruebapost@gmail.com "
    const name = "David"
    const lastname = "Pandales"
    json = {"email":email,"firstName": name, "lastName":lastname}
    dispatch(fetchNewUser(json));
  };

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
                type="text"
                placeholder="Nombre"
                class="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Nombre
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Apellido"
                id="inputPassword"
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
