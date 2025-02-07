document.addEventListener("DOMContentLoaded", function () {

    const urlAddress = "http://ipwho.is/";

    axios.get(urlAddress)
        .then(response => {
            const data = response.data;
            console.log("Dados do IP:", data);
            document.getElementById("ipData").innerHTML = 
                `IP: ${data.ip} | País: ${data.country} | Cidade: ${data.city} | CEP: ${data.postal}`;
        })
        .catch(error => {
            console.error("Erro ao buscar dados do IP:", error);
            document.getElementById("ipData").textContent = "Erro ao carregar dados do IP.";
        });
});
