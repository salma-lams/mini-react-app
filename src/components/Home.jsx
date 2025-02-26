import React from 'react';

const Home = () => {
    const userName = "John Doe"; // Example username
    const welcomeMessage = "Welcome to Our Application! We're here to assist you 😊";

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
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "90%",
            maxWidth: "800px",
            textAlign: "center",
        },
        title: {
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1976d2",
            marginBottom: "10px",
        },
       
        userBox: {
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "20px",
            fontSize: "18px",
            color: "#333",
            fontWeight: "bold",
        },
        button: {
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#0d47a1",
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>{welcomeMessage}</h1>
                <div style={styles.userBox}>
                     Bienvenue sur votre espace personnel
                </div>
                
            </div>
        </div>
    );
};

export default Home;
