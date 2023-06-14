const readline = require('readline');

// Création de l'interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
    console.log('--- MENU ---');
    console.log('1. Calculer la vitesse');
    console.log('2. Calculer la distance');
    console.log('3. Calculer le temps');
    console.log('4. Calculer la force');
    console.log('5. Calculer l\'énergie cinétique');
    console.log('6. Calculer la puissance');
    console.log('7. Calculer la fréquence');
    console.log('8. Calculer l\'indice de réfraction');
    console.log('9. Calculer la pression');
    console.log('10. Convertir Fahrenheit en Celsius');
    console.log('0. Quitter');
  
    rl.question('Choisissez une option : ', (choice) => {
      switch (choice) {
        case '1':
          calculerVitesse();
          break;
        case '2':
          calculerDistance();
          break;
        case '3':
          calculerTemps();
          break;
        case '4':
          calculerForce();
          break;
        case '5':
          calculerEnergieCinetique();
          break;
        case '6':
          calculerPuissance();
          break;
        case '7':
          calculerFrequence();
          break;
        case '8':
          calculerIndiceRefraction();
          break;
        case '9':
          calculerPression();
          break;
        case '10':
          convertirFahrenheitEnCelsius();
          break;
        case '0':
          rl.close();
          break;
        default:
          console.log('Option invalide. Veuillez choisir à nouveau.');
          displayMenu();
          break;
      }
    });
  }
  
  // Démarrage du programme
  displayMenu();
  

// Fonction pour calculer la vitesse en utilisant la formule v = d / t
function calculerVitesse() {
  rl.question("Entrez la distance (en mètres) : ", (distance) => {
    rl.question("Entrez le temps (en secondes) : ", (temps) => {
      distance = parseFloat(distance);
      temps = parseFloat(temps);

      if (!isNaN(distance) && !isNaN(temps) && temps !== 0) {
        const vitesse = distance / temps;
        console.log("La vitesse est de", vitesse.toFixed(2), "m/s");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides et un temps non nul.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer la distance en utilisant la formule d = v * t
function calculerDistance() {
  rl.question("Entrez la vitesse (en m/s) : ", (vitesse) => {
    rl.question("Entrez le temps (en secondes) : ", (temps) => {
      vitesse = parseFloat(vitesse);
      temps = parseFloat(temps);

      if (!isNaN(vitesse) && !isNaN(temps)) {
        const distance = vitesse * temps;
        console.log("La distance parcourue est de", distance.toFixed(2), "mètres");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer le temps en utilisant la formule t = d / v
function calculerTemps() {
  rl.question("Entrez la distance (en mètres) : ", (distance) => {
    rl.question("Entrez la vitesse (en m/s) : ", (vitesse) => {
      distance = parseFloat(distance);
      vitesse = parseFloat(vitesse);

      if (!isNaN(distance) && !isNaN(vitesse) && vitesse !== 0) {
        const temps = distance / vitesse;
        console.log("Le temps requis est de", temps.toFixed(2), "secondes");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides et une vitesse non nulle.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer la force en utilisant la formule F = m * a
function calculerForce() {
  rl.question("Entrez la masse (en kilogrammes) : ", (masse) => {
    rl.question("Entrez l'accélération (en m/s²) : ", (acceleration) => {
      masse = parseFloat(masse);
      acceleration = parseFloat(acceleration);

      if (!isNaN(masse) && !isNaN(acceleration)) {
        const force = masse * acceleration;
        console.log("La force est de", force.toFixed(2), "newtons");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer l'énergie cinétique en utilisant la formule E = 1/2 * m * v²
function calculerEnergieCinetique() {
  rl.question("Entrez la masse (en kilogrammes) : ", (masse) => {
    rl.question("Entrez la vitesse (en m/s) : ", (vitesse) => {
      masse = parseFloat(masse);
      vitesse = parseFloat(vitesse);

      if (!isNaN(masse) && !isNaN(vitesse)) {
        const energieCinetique = 0.5 * masse * Math.pow(vitesse, 2);
        console.log("L'énergie cinétique est de", energieCinetique.toFixed(2), "joules");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer la puissance en utilisant la formule P = E / t
function calculerPuissance() {
  rl.question("Entrez l'énergie (en joules) : ", (energie) => {
    rl.question("Entrez le temps (en secondes) : ", (temps) => {
      energie = parseFloat(energie);
      temps = parseFloat(temps);

      if (!isNaN(energie) && !isNaN(temps) && temps !== 0) {
        const puissance = energie / temps;
        console.log("La puissance est de", puissance.toFixed(2), "watts");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides et un temps non nul.");
      }

      rl.close();
    });
  });
}

// Fonction pour calculer la fréquence en utilisant la formule f = 1 / T
function calculerFrequence() {
  rl.question("Entrez la période (en secondes) : ", (periode) => {
    periode = parseFloat(periode);

    if (!isNaN(periode) && periode !== 0) {
      const frequence = 1 / periode;
      console.log("La fréquence est de", frequence.toFixed(2), "hertz");
    } else {
      console.log("Veuillez entrer une valeur numérique valide et une période non nulle.");
    }

    rl.close();
  });
}

// Fonction pour calculer l'indice de réfraction en utilisant la formule n = c / v
function calculerIndiceRefraction() {
  rl.question("Entrez la vitesse (en m/s) : ", (vitesse) => {
    const vitesseLumiere = 299792458; // m/s (valeur approximative)
    vitesse = parseFloat(vitesse);

    if (!isNaN(vitesse) && vitesse !== 0) {
      const indiceRefraction = vitesseLumiere / vitesse;
      console.log("L'indice de réfraction est de", indiceRefraction.toFixed(2));
    } else {
      console.log("Veuillez entrer une valeur numérique valide et une vitesse non nulle.");
    }

    rl.close();
  });
}

// Fonction pour calculer la pression en utilisant la formule P = F / A
function calculerPression() {
  rl.question("Entrez la force (en newtons) : ", (force) => {
    rl.question("Entrez la surface (en mètres carrés) : ", (surface) => {
      force = parseFloat(force);
      surface = parseFloat(surface);

      if (!isNaN(force) && !isNaN(surface) && surface !== 0) {
        const pression = force / surface;
        console.log("La pression est de", pression.toFixed(2), "pascals");
      } else {
        console.log("Veuillez entrer des valeurs numériques valides et une surface non nulle.");
      }

      rl.close();
    });
  });
}

// Fonction pour convertir une température en degrés Fahrenheit en degrés Celsius
function convertirFahrenheitEnCelsius() {
  rl.question("Entrez la température en degrés Fahrenheit : ", (fahrenheit) => {
    fahrenheit = parseFloat(fahrenheit);

    if (!isNaN(fahrenheit)) {
      const celsius = (fahrenheit - 32) / 1.8;
      console.log("La température en degrés Celsius est de", celsius.toFixed(2), "°C");
    } else {
      console.log("Veuillez entrer une valeur numérique valide.");
    }

    rl.close();
  });
}
// Physic finish