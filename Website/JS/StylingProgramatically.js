function MoveElephant(direction)
{
    var ElephantPic = document.getElementById("ElephantPic");

    if (direction == "Left")
    {
        ElephantPic.style.marginLeft = '0px';
    }
    else if (direction == "Right")
    {
        ElephantPic.style.marginLeft = '100px';
    }
};

function ToogleElephantDisplay(){

    var Image = document.getElementById('ElephantPicDisplay');

    if (Image.style.display == 'none')
        Image.style.display = 'block';
    else Image.style.display = 'none';
};

function ToogleElephantVisibility(){

    var Image = document.getElementById('ElephantPicVisibility')

    if (Image.style.visibility == 'hidden')
        Image.style.visibility = 'visible';
    else Image.style.visibility = 'hidden';
}