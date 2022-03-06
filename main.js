song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
}



function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 600, 400);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results) {
    if (results.leagth > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX=" + leftWristX + "leftWristY = " + leftWristY)
        console.log("rightWristX=" + rightWristX + "rightWristY = " + rightWristY)
    }
}
