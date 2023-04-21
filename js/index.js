
const verVideoMiguel = () => {
    let url = document.getElementById("videoMiguel").value
    window.open(url)
}

const verVideoIsabela = () => {
    let url = document.getElementById("videoIsabela").value
    window.open(url)
}

document.getElementById("botonMiguel").addEventListener("click", verVideoMiguel)

document.getElementById("botonIsabela").addEventListener("click", verVideoIsabela)

