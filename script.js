document.addEventListener("mousemove", function(e){

    let x = e.clientX;
    let y = e.clientY;

    document.body.style.backgroundPosition =
    x/50 + "px " + y/50 + "px";

function planetInfo(planet) {

    const data = {
        merkurius: "Merkurius adalah planet terdekat dengan Matahari.",
        venus: "Venus adalah planet terpanas.",
        bumi: "Bumi adalah tempat tinggal manusia.",
        mars: "Mars dikenal sebagai Planet Merah.",
        jupiter: "Jupiter adalah planet terbesar.",
        saturnus: "Saturnus memiliki cincin yang indah.",
        uranus: "Uranus berputar miring.",
        neptunus: "Neptunus adalah planet terjauh."
    };

    alert(data[planet]);
}

        window.addEventListener("load", () =>{
    document.getElementById("loader").style.display="none";
});
