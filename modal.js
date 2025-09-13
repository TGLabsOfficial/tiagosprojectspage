// Seleziona il link per aprire il popup
const link = document.getElementById("openModal");

link.onclick = function(e) {
  e.preventDefault(); // impedisce il comportamento del link

  // Crea il div del popup
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = "block";

  // Contenuto del popup
  const content = document.createElement("div");
  content.className = "modal-content";

  // Bottone chiudi
  const close = document.createElement("span");
  close.className = "close";
  close.innerHTML = "&times;";
  close.onclick = function() {
    document.body.removeChild(modal);
  }

  // Titolo
  const title = document.createElement("h2");
  title.textContent = "IBM 5150 Case";
  title.className = "titolo";

  // Div immagini
  const imagesDiv = document.createElement("div");
  imagesDiv.className = "modal-images";

  // Foto (sostituire con i tuoi file)
  const photos = [
    { src: "images/foto1.png", alt: "Front view" },
    { src: "images/foto2.png", alt: "Angle view" },
    { src: "images/foto3.png", alt: "Back view" },
    { src: "images/foto4.png", alt: "Top view" },
    { src: "images/foto5.png", alt: "Internal view 1" },
    { src: "images/foto6.png", alt: "Internal view 2" }
  ];
  
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.style.width = "30%";  // più piccolo per far entrare più immagini
    img.style.margin = "10px";
    imagesDiv.appendChild(img);
  });
  
  // Link download
  const downloadLink = document.createElement("a");
  downloadLink.href = "https://drive.google.com/file/d/1fKzRye_4fCo3m44-EEoyGSHXR-0ISalb/view?usp=drive_link"; // percorso reale del file
  downloadLink.textContent = "Download STL";
  downloadLink.className = "titolo";

  // Assembla tutto
  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(imagesDiv);
  content.appendChild(downloadLink);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Chiudi cliccando fuori dal popup
  modal.onclick = function(event) {
    if(event.target === modal) {
      document.body.removeChild(modal);
    }
  }
}
