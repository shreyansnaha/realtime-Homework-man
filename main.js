
difference = 0;
righrWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    
  
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - righrWristX);
    console.log(
      "leftWristX=" +
        leftWristX +
        "rightWristX=" +
        rightWristX +
        "difference=" +
        difference
    );
  }
}

function draw() {
  background("#FF0000");
 
    textSize(difference)
  fill("#F90093");
  stroke("#F90093");
  text("Shreyans Nahar",50 , 400)
}
