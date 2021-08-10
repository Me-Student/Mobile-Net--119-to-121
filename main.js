function setup() 
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded()
{
  console.log('Model is loaded!');
}

function draw()// my fav one!!
{
  image(video, 0,0, 300, 300);
  classifier.classify(video, gotResult);
}

function gotResult(error,results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(resutls);
    document.getElementById('object_name').innerHTML= results[0].label;
    document.getElementById('object_accuracy').innerHTML= results[0].confidence.toFixed(3);
  }
}