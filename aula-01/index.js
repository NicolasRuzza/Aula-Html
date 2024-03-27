
function showPopUp () {
    Swal.fire({
        title: "AQUI ESTÁ O MACACO",
        imageUrl: "./img/selfie.jpg",
        confirmButtonText: "Ver Mais Macacos",
    })
    .then((result) => {
        window.open("https://pt.wikipedia.org/wiki/Macaco", "_blank");
    });
}