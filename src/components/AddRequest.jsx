import React, { useState } from "react";
import axios from "axios";

const AddRequest = ({ onRequestAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!title.trim() || !description.trim()) {
      setError("Veuillez remplir tous les champs.");
      setSuccessMessage("");
      return;
    }

    try {
      // MockAPI
      const response = await axios.post(
        "https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire",
        {
          title: title.trim(),
          description: description.trim(),
          status: "En attente",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
      console.log("Réponse du serveur:", response.data);
      setTitle("");
      setDescription("");
      setError("");
      setSuccessMessage("Demande ajoutée avec succès.");

      
      if (onRequestAdded) {
        onRequestAdded(response.data);
      }
    } catch (err) {
      console.error("Erreur complète:", err);

      if (err.response) {
        console.error("Détails de la réponse:", err.response.data);
        console.error("Statut de la réponse:", err.response.status);
        setError(
          `Erreur: ${
            err.response.data.message || "Une erreur s'est produite sur le serveur."
          }`
        );
      } else if (err.request) {
        console.error("Erreur de requête:", err.request);
        setError("Erreur: Pas de réponse du serveur.");
      } else {
        console.error("Erreur:", err.message);
        setError("Une erreur inconnue s'est produite.");
      }

      setSuccessMessage("");
    }
  };

  
  const styles = {
    page: {
      background: "linear-gradient(135deg, #4a90e2, #9013fe)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
    },
    container: {
      backgroundColor: "#fff",
      padding: "30px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      width: "400px",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#4a90e2",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      outline: "none",
      color: "#333",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#4a90e2",
    },
    textarea: {
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      outline: "none",
      color: "#333",
      height: "100px",
      resize: "none",
      transition: "border-color 0.3s",
    },
    button: {
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#4a90e2",
      color: "#fff",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#3b78d4",
    },
    error: {
      color: "#ff5f5f",
      marginTop: "10px",
      fontSize: "14px",
    },
    success: {
      color: "#4caf50",
      marginTop: "10px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ajouter une demande</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Ajouter la demande
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default AddRequest;
