var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var i=document.querySelectorAll("img")[0];  //for selection of image1
var imagesource = "./images/dice"+randomNumber1+".png";  // for selection of random image
i.setAttribute("src",imagesource);//for setting random image as image 1


var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var image2 = document.querySelectorAll("img")[1]; //for selection of image2
randomimgae2source="./images/dice"+randomNumber2+".png";// for selection of random image
image2.setAttribute("src",randomimgae2source); // for setting image2 as random image


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 win";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player2 win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}