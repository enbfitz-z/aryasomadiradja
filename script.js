document.addEventListener("mousemove", function(e){

    let x = e.clientX;
    let y = e.clientY;

    document.body.style.backgroundPosition =
    x/50 + "px " + y/50 + "px";

    function planetInfo(planet){

const data = {

merkurius:
"Merkurius adalah planet terdekat dengan Matahari. Suhu siang hari bisa mencapai 430°C.",

venus:
"Venus adalah planet terpanas di Tata Surya dengan suhu sekitar 475°C.",

bumi:
"Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan.",

mars:
"Mars dikenal sebagai Planet Merah karena permukaannya mengandung banyak besi oksida.",

jupiter:
"Jupiter adalah planet terbesar di Tata Surya dan memiliki Bintik Merah Besar.",

saturnus:
"Saturnus terkenal karena cincin indah yang mengelilinginya.",

uranus:
"Uranus berputar miring hampir 98 derajat sehingga tampak seperti berguling saat mengorbit Matahari.",

neptunus:
"Neptunus adalah planet terjauh dari Matahari dan memiliki angin tercepat di Tata Surya."

};

alert(data[planet]);

        window.addEventListener("load", () =>{
    document.getElementById("loader").style.display="none";
});
