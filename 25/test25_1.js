console.log("Работа Пыхтеевой Елены!");

var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
let ImageId = document.getElementById("radio_image")
console.log("Stations: "+stations);
console.dir(stations);
console.log("Length: "+stations.length);
arrayImages = ["deep.png", "lofi.png", "64.png"]

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
    ImageId.src = arrayImages[indexsSelect];
}

getRadio(resultId, 0);

for (let i=0; i<arrayImages.length; i++) {
    console.log(i+1+") "+arrayImages[i]);
}
//resultId.textContent = "Выброная радиостанция: "+stations[indexsSelect] .value;
/*
for (let i=0; i<stations.length; i++) {
    console.log("["+i+"]: "+stations[i]);
}
*/