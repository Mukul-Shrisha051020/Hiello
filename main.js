Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 15000
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function Capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NnhzkDmwh/model.json', model)

function model() {
    console.log("Model Loaded!");
}

console.log("ml5 version", ml5.version);


function Check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, get_result);
}

function get_result(error, result) {
    if (error) {
        console.error(error);

    } else {
        console.log(result);
        percent = Math.floor(result[0].confidence * 100);
        document.getElementById("result_obect_name").innerHTML = result[0].label;
        document.getElementById("result_obect_accuracy").innerHTML = percent + "%";

    }
}