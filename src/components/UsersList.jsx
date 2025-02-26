import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 
  const [editedData, setEditedData] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire"
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des utilisateurs:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`
      );
      setUsers(users.filter((user) => user.id !== id));
      alert("Utilisateur supprimé avec succès");
    } catch (err) {
      console.error("Erreur lors de la suppression de l’utilisateur:", err);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedData(user); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${editingUser}`,
        editedData
      );
      setUsers(
        users.map((user) =>
          user.id === editingUser ? { ...user, ...editedData } : user
        )
      );
      setEditingUser(null); 
      alert("Utilisateur modifié avec succès");
    } catch (err) {
      console.error("Erreur lors de la modification de l’utilisateur:", err);
    }
  };

  const styles = {
    page: {
     
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "95%",
      maxWidth: "1000px",
      padding: "20px",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#4a90e2",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#4a90e2",
      color: "#fff",
      textAlign: "left",
      padding: "12px",
      fontSize: "14px",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #f0f0f0",
      textAlign: "left",
      fontSize: "14px",
      color: "#333",
    },
    actionsCell: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-start",
    },
    button: {
      padding: "8px 12px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    deleteButton: {
      backgroundColor: "#ff5f5f",
      color: "#fff",
    },
    editButton: {
      backgroundColor: "#4a90e2",
      color: "#fff",
    },
    input: {
      padding: "10px",
      marginBottom: "10px",
      width: "100%",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Liste des utilisateurs</h2>
        {editingUser ? (
          <div>
            <h3>Modifier Utilisateur</h3>
            <input
              style={styles.input}
              type="text"
              name="nom"
              value={editedData.nom}
              onChange={handleInputChange}
              placeholder="Nom"
            />
            <input
              style={styles.input}
              type="text"
              name="prenom"
              value={editedData.prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
            />
            <input
              style={styles.input}
              type="text"
              name="pseudo"
              value={editedData.pseudo}
              onChange={handleInputChange}
              placeholder="Pseudo"
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <button style={{ ...styles.button, ...styles.editButton }} onClick={handleSave}>
              Enregistrer
            </button>
          </div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Nom</th>
                <th style={styles.th}>Prénom</th>
                <th style={styles.th}>Pseudo</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={styles.td}>{user.nom}</td>
                  <td style={styles.td}>{user.prenom}</td>
                  <td style={styles.td}>{user.pseudo}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={{ ...styles.td, ...styles.actionsCell }}>
                    <button
                      style={{ ...styles.button, ...styles.deleteButton }}
                      onClick={() => handleDelete(user.id)}
                    >
                      SUPPRIMER
                    </button>
                    <button
                      style={{ ...styles.button, ...styles.editButton }}
                      onClick={() => handleEdit(user)}
                    >
                      MODIFIER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UsersList;
