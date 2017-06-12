function ToogleHeading()
{
    var HeadingElement = document.getElementById("Heading");

    if (HeadingElement.style.visibility == "hidden")
    {
        HeadingElement.style.visibility = "visible";
    }
    else {
        HeadingElement.style.visibility = "hidden";
    }
};

function AddEntry()
{
    var ArticleArea = document.getElementById("ArticleDisplay");
    var ArticleHeader = document.getElementById("ArticleHeading").value;
    var ArticleText = document.getElementById("ArticleContent").innerText;

    ArticleArea.innerHTML += "<div class='AddedArticle'><article><header><h1>" + ArticleHeader + "</h1></header><p>" + ArticleText + "</article></div>";

    LogEvent("ITEM ADDED: " + ArticleHeader + ": " + ArticleText);
}

function RemoveLastEntry()
{
    var ArticleArea = document.getElementById("ArticleDisplay");
    var Articles = ArticleArea.getElementsByClassName("AddedArticle");
    ArticleArea.removeChild(Articles[Articles.length - 1]);

    LogEvent("Last Item Removed");
}

function DeleteAllEntries()
{
    var ArticleArea = document.getElementById("ArticleDisplay");
    var Articles = ArticleArea.getElementsByClassName("AddedArticle");

    while (Articles.length != 0)
    {
        ArticleArea.removeChild(Articles[0]);
    }

    LogEvent("All Items deleted");
}

function LogEvent(LogText)
{
    var LogList = document.getElementById("LogOfTransactions");

    var LogItem = document.createElement("li");
    LogItem.textContent = LogText;

    LogList.appendChild(LogItem);
}

function CreateSquare()
{
    var CanvasElement = document.getElementById("CanvasForSquare")
    var Canvasctx = CanvasElement.getContext('2d');
    Canvasctx.fillStyle = "red";
    Canvasctx.fillRect(50, 50, 200, 200);
}

function CreateGradientSquare() {
    var CanvasElement = document.getElementById("CanvasForGradientSquare")
    var Canvasctx = CanvasElement.getContext('2d');

    var Gradient = Canvasctx.createLinearGradient(0, 0, 300, 300);
    Gradient.addColorStop("0", "red");
    Gradient.addColorStop("1", "blue");
    Canvasctx.fillStyle = Gradient;
    Canvasctx.fillRect(0, 0, 300, 300);
}

function CreateThickLinedSquare() {
    var CanvasElement = document.getElementById("CreateThickLinedSquare")
    var Canvasctx = CanvasElement.getContext('2d');

    Canvasctx.lineWidth = 10;
    Canvasctx.lineJoin = 'bevel';

    var Gradient = Canvasctx.createLinearGradient(0, 0, 300, 300);
    Gradient.addColorStop("0", "red");
    Gradient.addColorStop("1", "blue");
    Canvasctx.strokeStyle = Gradient;
    Canvasctx.strokeRect(50, 50, 200, 200);
}

function CreateDrawing() {
    var CanvasElement = document.getElementById("CreateDrawing")
    var Canvasctx = CanvasElement.getContext('2d');

    Canvasctx.lineWidth = 10;
    Canvasctx.lineJoin = 'bevel';

    var Gradient = Canvasctx.createLinearGradient(0, 0, 300, 300);
    Gradient.addColorStop("0", "red");
    Gradient.addColorStop("1", "blue");

    Canvasctx.strokeStyle = Gradient;
    Canvasctx.fillStyle = "purple";
    Canvasctx.beginPath();
    Canvasctx.moveTo(5, 200);
    Canvasctx.lineTo(200, 205);
    Canvasctx.arcTo(10, 20, 50, 5, 300);
    Canvasctx.stroke();

    Canvasctx.font = "19pt ComicStripSans";
    Canvasctx.strokeStyle = "black";
    Canvasctx.strokeText("CHRISTIAN BROWN", 10, 190);
    Canvasctx.fillStyle = "purple";
    Canvasctx.fillText("CHRISTIAN BROWN", 10, 190);
}