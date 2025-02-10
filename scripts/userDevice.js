async function getUserDevice() {
    
    if (navigator.userAgentData) {
        const data = await navigator.userAgentData.getHighEntropyValues(["platform", "architecture", "model"]);

        console.log("Sistema:", data.platform);
        console.log("Arquitetura:", data.architecture);
        console.log("Modelo:", data.model);
        
    } else {
        console.log("User Agent:", navigator.userAgent);
    }
}

getUserDevice();

