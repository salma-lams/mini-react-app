import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../store/userSlice";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (attempts >= 3) {
      setError("Vous avez atteint le maximum de tentatives.");
      return;
    }

    try {
      const response = await axios.get(
        "https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire"
      );

      const user = response.data.find(
        (u) => u.pseudo === username && u.MotDePasse === password
      );

      if (user) {
        const userData = {
          prenom: user.prenom,
          nom: user.nom,
          age: user.age,
          email: user.email,
          Pays: user.Pays,
          couleur: user.couleur,
          pseudo: user.pseudo,
          avatar: user.avatar,
          admin: user.admin, // التأكد من وجود الحقل admin
        };

        dispatch(login(userData)); // تخزين بيانات المستخدم في Redux
        setError("");
        alert("Connexion réussie!");
        navigate("/profile"); // الانتقال إلى صفحة Profile
      } else {
        setAttempts(attempts + 1);
        setError("Nom utilisateur ou mot de passe incorrect.");
      }
    } catch (err) {
      setError("Erreur lors de la connexion au serveur.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={attempts >= 3}>
          LOGIN
        </button>
        {error && <div className="error-message">{error}</div>}
        <div className="create-account-link">
          <p>
            Vous n'avez pas de compte ?{" "}
            <Link to="/create-account">Créer un compte</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
