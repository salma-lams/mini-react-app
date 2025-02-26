import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        pseudo: '',
        email: '',
        age: '',
        admin: false,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        if (!formData.nom || !formData.prenom || !formData.pseudo || !formData.email || !formData.age) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Veuillez entrer une adresse email valide.');
            return;
        }

        if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
            setError('L\'âge doit être un nombre valide supérieur à zéro.');
            return;
        }

        try {
            await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', formData);
            alert('Utilisateur ajouté avec succès');
            setFormData({ nom: '', prenom: '', pseudo: '', email: '', age: '', admin: false });
            setError('');
        } catch (err) {
            setError("Erreur lors de l'ajout de l'utilisateur. Veuillez réessayer.");
        }
    };

    const styles = {
        page: {
            
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        container: {
            backgroundColor: '#fff',
            padding: '30px 40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            width: '400px',
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },
        input: {
            padding: '12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
        },
        button: {
            padding: '12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#2575fc',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
        },
        checkboxLabel: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
        },
        error: {
            color: '#e74c3c',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.title}>Ajouter un utilisateur</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="pseudo"
                        placeholder="Pseudo"
                        value={formData.pseudo}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Âge"
                        value={formData.age}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <label style={styles.checkboxLabel}>
                        <span>Admin:</span>
                        <input
                            type="checkbox"
                            name="admin"
                            checked={formData.admin}
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        style={styles.button}
                    >
                        Ajouter un utilisateur
                    </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

export default AddUser;