import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationbar";
import Banner from "./components/Banner";
import Oshinoko from "./images/ai.jpg";
import Chainsawman from "./images/chn.jpeg";
import DemonSlayer from "./images/dmn.jpeg";
import OnePiece from "./images/wampis.jpg";
import JJK from "./images/jjk.jpg";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Banner></Banner>
    
    <div className="bg-dark p-5">
      <div className="container">
      <h1 className="text-primary">Top 5 Animes of the Week:</h1>
        <div className="row g-4 justify-content-center">
          <GridItems name="Oshi No Ko" image={Oshinoko} desc="Dr. Goro is reborn as the son of the young starlet Ai Hoshino after her delusional stalker murders him. Now, he wants to help his new mother rise to the top, but what can a child do about the dark underbelly of the entertainment industry?"></GridItems>
          <GridItems name="Jujutsu Kaisen" image={JJK} desc="Yuuji Itadori searches for the rest of the cursed talisman in order to exorcise himself."></GridItems>
          <GridItems name="One Piece" image={OnePiece} desc="Monkey D. Luffy wants to become the King of all pirates. Along his quest he meets: a skilled swordsman named Roronoa Zolo; Nami, Usopp, Sanji, and Robin. The gang sets sail to unknown seas in Grand Line to find the treasure of One Piece."></GridItems>
          <GridItems name="Demon Slayer" image={DemonSlayer} desc="A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon."></GridItems>
          <GridItems name="Chainsaw Man" image={Chainsawman} desc="Betrayed and killed, a teenager named Denji gets revived as Chainsaw Man, a soul with a devil's heart."></GridItems>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
