// Biblioteca simples de QR Code (via CDN)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js";
document.body.appendChild(script);

script.onload = () => {
    const canvas = document.getElementById("qrcode");

    // Link para onde o QR Code vai direcionar
    const link = "loginbeforeqrcode.html";

    QRCode.toCanvas(canvas, link, {
        width: 200,
        color: {
            dark: "#000000",
            light: "#ffffff"
        }
    }, function (error) {
        if (error) console.error(error);
        console.log("QR Code gerado!");
    });
};