noseX=0;
noseY=0;

function preload() {
         clown_nose = 
         loadImage('https://i.postimg.cc/cL6WW55j/bigotes-de-gato.png')
}        

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  PoseNet = ml5.poseNet(video,modelLoaded);
  PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log('PoseNet está inicializando');
}

function gotPoses(results)
{
   if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x-74;
    noseY = results[0].pose.nose.y-68;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
   }
  
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  //circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 150, 150);
}

function take_snapshot(){    
save('myFilterImage.png');
}
