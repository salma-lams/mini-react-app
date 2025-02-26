import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire"
        );
        setRequests(response.data); 
      } catch (err) {
        console.error("Erreur lors de la récupération des demandes:", err);
        setError("Une erreur s'est produite lors du chargement des données."); 
      } finally {
        setLoading(false); 
      }
    };
    fetchRequests();
  }, []);

  
  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.put(
        `https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`,
        { status }
      );
      
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, ...response.data } : request
        )
      );
    } catch (err) {
      console.error("Erreur lors de la mise à jour du statut:", err);
      alert("Une erreur s'est produite lors de la mise à jour du statut.");
    }
  };

  
  const styles = {
    page: {
      
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      padding: "20px",
    },
    container: {
      backgroundColor: "#fff",
      padding: "20px 30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "900px",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#4a90e2",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#4a90e2",
      color: "#fff",
      padding: "12px",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
      fontSize: "16px",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      fontSize: "14px",
      textAlign: "center",
    },
    actions: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    },
    buttonApprove: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#4caf50",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    buttonReject: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#f44336",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    error: {
      color: "#f44336",
      textAlign: "center",
      fontSize: "16px",
      marginBottom: "20px",
    },
  };

  
  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.title}>Chargement des données...</h2>
        </div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.error}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Liste des demandes</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Titre</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Statut</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests && requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id}>
                  <td style={styles.td}>{request.title || "Non défini"}</td>
                  <td style={styles.td}>{request.description || "Non défini"}</td>
                  <td style={styles.td}>{request.status || "Non défini"}</td>
                  <td style={styles.td}>
                    <div style={styles.actions}>
                      <button
                        style={styles.buttonApprove}
                        onClick={() => handleStatusChange(request.id, "Approuvée")}
                      >
                        Approuver
                      </button>
                      <button
                        style={styles.buttonReject}
                        onClick={() => handleStatusChange(request.id, "Rejetée")}
                      >
                        Rejeter
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  Aucune donnée disponible
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestsList;
