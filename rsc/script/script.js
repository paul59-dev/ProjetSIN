function Main() {

    let hour = 0;
    let minute = 0;
    let day = 1;
    let gramme = 300;
    let ph = 7;

    const btnStock = document.getElementById('stock');

    document.getElementById('eat').innerHTML = gramme + 'g';
    document.getElementById('ph').innerHTML = ph;
    document.getElementById('alertPh').innerHTML = 'Eau pur...';
    document.getElementById('alertStock').innerHTML = 'Stock plein...'; 
    
    const intervalHour = setInterval(() => {

        if (minute < 10) {
            document.getElementById('minute').innerHTML = '0' + minute;
        } else {
            document.getElementById('minute').innerHTML = minute;
        }

        if (hour < 10) {
            document.getElementById('heure').innerHTML = '0' + hour;
        } else {
            document.getElementById('heure').innerHTML = hour;
        }

        document.getElementById('day').innerHTML = day;

        minute++;

        if (minute >= 60) {
            minute = 0;
            hour++;
        }

        if (hour > 23) {
            hour = 0;
            day++;
        }

        if (gramme === 0) {
            document.getElementById('alertStock').innerHTML = "Il n'y a plus de stock";
            if (confirm('Voulez-vous remetre du Stock ?')) {
                gramme = 300;
                document.getElementById('eat').innerHTML = gramme + 'g';
            }
        }

        if (hour === 10 && minute === 0 || hour === 20 && minute === 0) {
            if (gramme === 0) {
                gramme = 0;
            } else {
                gramme = gramme - 25;
                document.getElementById('eat').innerHTML = gramme + 'g';
                if (gramme < 100) {
                    document.getElementById('alertStock').innerHTML = 'Vous pouvez réaprovisioner le stock...';
                }
            }
        }

        if (day%2 == 0 && hour === 0 && minute === 0) {
            ph--;
            document.getElementById('ph').innerHTML = ph;           
            if (ph === 0) {
                ph = 0;
                document.getElementById('ph').innerHTML = ph;
            } else if (ph === 5) {
                document.getElementById('alertPh').innerHTML = 'PH trop bas, le nettoyage peut être mise en place...';
                document.getElementById('nettoyage').addEventListener('click', () => {
                    document.getElementById('alertNettoyage').innerHTML = 'Nettoyage en cour...';
                    setTimeout(() => {
                        document.getElementById('alertNettoyage').innerHTML = 'Aquarium nettoyer';
                        ph = 7;
                        document.getElementById('ph').innerHTML = ph;
                        setTimeout(() => {
                            document.getElementById('alertPh').innerHTML = 'Eau pur...';
                            document.getElementById('alertNettoyage').innerHTML = '';
                        }, 4000);
                    }, 3000);
                });
            } 
        }

    }, 5);

    function Degres() {

        let degres = 23;

        document.getElementById('degres').innerHTML = degres + '°C';

        const intervalDegres = setInterval(() => {

            if (degres === 24) {
                degres--;
                document.getElementById('degres').innerHTML = degres + '°C';
            } else {
                degres++;
                document.getElementById('degres').innerHTML = degres + '°C';
            }

        }, 5000);

    }

    Degres();

    function ReStock() {

        btnStock.addEventListener('click', () => {

            playSongClick();

            if (gramme > 100) {
                document.getElementById('alertStock').innerHTML = 'Il y a encore assez de nourriture dans la boîte...';
                setTimeout(() => {
                    document.getElementById('alertStock').innerHTML = 'Stock plein ...';
                }, 4000);
            } else {
                document.getElementById('alertStock').innerHTML = 'La notification à bien été envoyer...';
                setTimeout(() => {
                    document.getElementById('alertStock').innerHTML = 'Stock mis !';
                    gramme = 300;
                    document.getElementById('eat').innerHTML = gramme + 'g';
                    setTimeout(() => {
                        document.getElementById('alertStock').innerHTML = 'Stock plein ...';
                    }, 2500);
                }, 4000);
            }

        });

    }

    ReStock();

    function Cleaning() {

        const btnCleaning = document.getElementById('nettoyage');

        btnCleaning.addEventListener('click', () => {
            playSongClick();
        });
    }

    Cleaning();

    function playSongClick() {
        document.querySelector('.clickBtn').play();
    }

}

Main();
