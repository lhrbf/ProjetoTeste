function addressIp() {
    const ipApiUrl = 'https://ipwhois.app/json/';

    axios.get(ipApiUrl)
        .then(response => {
            const data = response.data;
            const latitude = data.latitude;
            const longitude = data.longitude;

            console.log(data);
            console.log("Latitude (IP):", latitude);
            console.log("Longitude (IP):", longitude);
    
            localStorage.setItem("latitude", latitude);
            localStorage.setItem("longitude", longitude);
        })
        .catch(error => {
            console.error("Erro ao buscar localização pelo IP:", error);
        });
}