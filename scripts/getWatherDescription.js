function getWeatherDescription(weatherCode) {
    switch (weatherCode) {
        case 0:
            return {description: "Céu claro",
                icon: "☀️",
                   /* Image: */
            };
        case 1:
        case 2:
        case 3:
            return {description: "Parcialmente nublado",
                icon: "⛅",
                /* Image: */
         };
        case 45:
        case 48:
            return {description: "Nevoeiro", 
                icon: "🌫️",
                /*image*/};
        case 51:
        case 53:
        case 55:
            return {description: "Chuva leve",
                icon: "🌧️",
                 /*image*/};
        case 56:
        case 57:
            return {description: "Chuva congelante",
                icon: "⛈️",
                 /*image*/};
        case 61:
        case 63:
        case 65:
            return {description: "Chuva moderada",
                icon: "🌧️",
                 /*image*/};
        case 66:
        case 67:
            return {description: "Chuva congelante forte",
                    icon: "⛈️",
                 /*image*/};
        case 71:
        case 73:
        case 75:
            return {description: "Neve",
                    icon: "☀️", 
                     /*image*/};
        case 77:
            return {description: "Neve irregular",
                    icon: "☀️",
                     /*image*/};
        case 80:
        case 81:
        case 82:
            return {description: "Chuva forte",
                    icon: "⛈️",
                 /*image*/};
        case 85:
        case 86:
            return {description: "Neve forte",
                    icon: "☀️",
                 /*image*/};
        case 95:
        case 96:
        case 99:
            return {description: "Tempestade com trovoada",
                    icon: "⚡",
                 /*image*/};
        default:
            return {description: "Condição climática desconhecida"};
    }
}
