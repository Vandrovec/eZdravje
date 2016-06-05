
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

var tabelaPacientov = {};


/**
 * Prijava v sistem z privzetim uporabnikom za predmet OIS in pridobitev
 * enolične ID številke za dostop do funkcionalnosti
 * @return enolični identifikator seje za dostop do funkcionalnosti
 */
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
 
function catchForm(){
    generirajPodatke()
}
function generirajPodatke(stPacienta) {
    ehrId = "";
    switch (stPacienta) {
        case 1: var novPacient;
            novPacient.ime = "Karl";
            novPacient.priimek = "Popper";
            tabelaPacientov[1] = novPacient;
            break;
        case 2: var novPacient; 
            novPacient.ime = "Ha-Joon";
            novPacient.priimek = "Chang";
            tabelaPacientov[2] = novPacient;
            break;
        case 3: var novPacient;
            novPacient.ime = "John"
            novPacient.priimek = "Coltrane";
            tabelaPacientov[3] = novPacient;
            break;
        default:
        ;
    }
  // TODO: Potrebno implementirati

  return ehrId;
}


// TODO: Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija
