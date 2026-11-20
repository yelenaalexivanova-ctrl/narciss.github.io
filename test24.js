console.log("Работа Пыхтеевой Елены!");

var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
console.log("Stations: "+stations);
console.dir(stations);
console.log("Length: "+stations.length);

function getRadio() {
    //result_id.textContent = "Выбрана радиостанция: "+stations[selected_index].value;


    let indexsSelect = 0;
    for (let i=0; i<3; i++) {
        console.log("["+i+"]: "+stations[i].value);
        console.log("Checked: "+stations[i].checked)

        stations[i].addEventListener('change', getRadio);

        if (stations[i].checked) {
            indexsSelect = i;
        }
    }
    resultId.textContent = "Выбрана радиостанция: "+stations[indexsSelect].value
}

getRadio(resultId, 0);
//resultId.textContent = "Выброная радиостанция: "+stations[indexsSelect] .value;
/*
for (let i=0; i<stations.length; i++) {
    console.log("["+i+"]: "+stations[i]);
}
*/
