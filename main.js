video="";
status="";
object=[];
function preload(){
    video= createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        for(i=0; i<object.lenght;i++){
            document.getElementById("status").innerHTML="Status: Objects Detected ";
            document.getElementById("number_of_object").innerHTML="number of object detected are:"+object.lenght;
            fill("#FF5349");
            precent=floor(object[i].confidence*100);
            text(object[i].label+""+precent+"%",object[i].x+15, object[i].y+15);
            nofill();
            stroke("#FF5349");
            rect(object[i].x,object[i].y,object[i].width,object[i].height,);
        }
    }
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modalLoaded(){
    console.log("Modal loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
