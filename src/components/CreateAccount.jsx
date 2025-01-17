import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        pseudo: '',
        MotDePasse: '',
        confirmPassword: '',
        couleur: '',
        email: '',
    });
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = [];
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!formData.nom) newErrors.push('Le nom est obligatoire.');
        if (!formData.prenom) newErrors.push('Le prénom est obligatoire.');
        if (!formData.pseudo) newErrors.push('Le pseudo est obligatoire.');
        if (!formData.email) newErrors.push('L’email est obligatoire.');
        if (!formData.age || isNaN(formData.age)) newErrors.push('L’âge doit être un nombre.');
        if (!passwordRegex.test(formData.MotDePasse)) {
            newErrors.push(
                'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'
            );
        }
        if (formData.MotDePasse !== formData.confirmPassword) {
            newErrors.push('Les mots de passe ne correspondent pas.');
        }

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', formData);
                navigate('/login');
            } catch (error) {
                setErrors(['Erreur lors de l’enregistrement.']);
            }
        }
    };

    return (
        <div className="create-account-container">
            <div className="create-account-form">
                <h2>Créer un Compte</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Âge"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="pseudo"
                        placeholder="Pseudo"
                        value={formData.pseudo}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="MotDePasse"
                        placeholder="Mot de passe"
                        value={formData.MotDePasse}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmer le mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <select name="couleur" value={formData.couleur} onChange={handleChange}>
                        <option value="">Choisissez une couleur</option>
                        <option value="red">Rouge</option>
                        <option value="blue">Bleu</option>
                        <option value="green">Vert</option>
                    </select>
                    <button type="submit">Créer un compte</button>
                </form>
                {errors.length > 0 && (
                    <ul className="error-list">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CreateAccount;
