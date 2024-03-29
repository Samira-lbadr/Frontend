import Route from "./Route.js";  
//Définir ici vos routes 
export const allRoutes = [  
    new Route("/", "Accueil", "pages/home.html"), 
    new Route("/galerie", "La galerie", "pages/galerie.html"),
    new Route("/signin", "Connexion", "pages/auth/signin.html"),
    new Route("/signup", "Inscription", "pages/auth/signup.html"),
    new Route("/account", "Mon compte", "pages/auth/account.html"),
    new Route("/EditPassword", "Changement de mot de passe", "pages/auth/EditPassword.html"),
];   
 
//Le titre s'affiche comme ceci : Route.titre - websitename 
export const websiteName = "Tables Amazighs";

