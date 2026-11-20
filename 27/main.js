console.log("Работа пыхтеевой Елены")

let glazovGipuLatitude = 58.138480;
let glazovGipuLongitude = 52.674803;
ymaps.ready(init)
/*
if (ymaps.ready()) {
    console.log("Загружено! API Яндекс Карты.");
}
*/

function init() {
    console.log("Инициализация состоялась!");
    var locateRequest = ymaps.panorama.locate([glazovGipuLatitude, glazovGipuLongitude]);
    console.log("Locate Request: "+locateRequest);

    locateRequest.then(requestOK, requestError);
    function requestOK(panoramas) {
        console.log("Запрос OK!");
        console.log("Panoramas: "+panoramas);
		console.log("Length: "+panoramas.length);
        if (panoramas.length) {
            console.log("Ура! Нашлась панорама: "+panoramas[0]);
            console.dir(panoramas[0]);

            let player = new ymaps.panorama.Player("map", panoramas[0],
                            {direction: [240, 5]});
        }
    }
}

function requestError() {
    console.log("Ошибка запроса...");
}
