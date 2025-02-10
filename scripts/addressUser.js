window.onload = function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                localStorage.setItem("latitude", latitude);
                localStorage.setItem("longitude", longitude);
                
                console.log(`Latitude (GPS): ${latitude}, Longitude (GPS): ${longitude}`);
            },
            (error) => {
                console.error("Erro ao obter localização: ", error.message);
                addressIp();
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    } else {
        console.error("Geolocalização não é suportada neste navegador.");
        addressIp();
    }
};