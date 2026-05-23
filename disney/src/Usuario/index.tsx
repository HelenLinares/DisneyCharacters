import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

import "./style.css";

function Usuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const [usuario, setUsuario] = useState<any>(null);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

 
  const registro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Usuario registrado");
    } catch (error: any) {
      alert(error.message);
    }
  };

  
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login correcto");
    } catch (error: any) {
      alert(error.message);
    }
  };

 
  const logout = async () => {
    await signOut(auth);

    alert("Sesión cerrada");
  };

  return (
    <div className="usuario">
      <div className="card-usuario">
        <h1>Disney User</h1>

        {usuario ? (
          <>
            <h3>🟢 Sesión iniciada</h3>

            <p>{usuario.email}</p>

            <button onClick={logout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <h3>🔴 No has iniciado sesión</h3>

            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={registro}>Registrarse</button>

            <button onClick={login}>Iniciar Sesión</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Usuario;