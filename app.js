
// Fonction pour générer un mot de passe simple
function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").innerText = password;
}

// Fonction pro pour connecter Trust Wallet
async function connectWallet() {
    const walletBtn = document.querySelector(".wallet-btn");
    
    // Vérifier si un portefeuille (comme Trust Wallet) est injecté
    if (window.ethereum) {
        try {
            walletBtn.innerText = "Connexion...";
            
            // Demander l'accès au compte
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            // Afficher les 6 premiers et 4 derniers caractères de l'adresse
            const shortAddress = account.substring(0, 6) + "..." + account.substring(account.length - 4);
            
            walletBtn.innerText = "Connecté : " + shortAddress;
            walletBtn.style.backgroundColor = "#28a745"; // Vert succès
            
            alert("Succès ! Connecté à : " + account);
        } catch (error) {
            console.error(error);
            walletBtn.innerText = "Erreur de connexion";
            alert("L'utilisateur a refusé la connexion.");
        }
    } else {
        alert("Veuillez ouvrir ce site à l'intérieur du navigateur Trust Wallet !");
    }
}
