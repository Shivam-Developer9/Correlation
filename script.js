function calculator()
{alert("working");
    var x = document.getElementById("valueofx").value;
    var y = document.getElementById("valueofy").value;
    x = x.split(" ");
    y = y.split(" "); 
    var xSquare = [], ySquare = [],xy = [];
    var n = x.length;
    // [65,66,67,67,68,69,70,72], y = [67,68,65,68,72,72,69,71] 
    square(x,"x");
    square(y,"y");

    function square(ar,check)
    {
        var arr = [];
        for(var i=0;i<ar.length;i++)
        {
            arr[i] = ar[i]*ar[i];
            xy[i] = x[i]*y[i];
        }
        check == 'x' ? xSquare = arr : ySquare = arr;
    }

    /////////////////////////////////////////////Submission////////////////////////////////////////
    var xSub = Submission(x);
    var ySub = Submission(y);
    var xSquareSub = Submission(xSquare);
    var ySquareSub = Submission(ySquare);
    var xySub = Submission(xy);

    //console.log(xSub+" "+ySub+" "+xySub);

    function Submission(vr)
    {
        return vr.reduce((accumulator, currentNumber) => {
            return accumulator + currentNumber;
        })
        
    }

    /////////////////////////////Coveriance/////////////////////////////////////
    const cov = (xySub/n) - ((xSub)/n*(ySub)/n);

    //console.log(cov);

    /////////////////////////////////////////Sigma//////////////////////////////////
    var xSigma = Math.sqrt(xSquareSub/n - Math.pow(xSub/n, 2));
    xSigma = parseFloat(xSigma).toFixed(3);

    var ySigma = Math.sqrt(ySquareSub/n - Math.pow(ySub/n, 2));
    ySigma = parseFloat(ySigma).toFixed(3);

    //console.log(xSigma+" "+ySigma)

    ///////////////////////////////////Correlation/////////////////////////////
    const corr = (cov/(xSigma*ySigma)).toFixed(2);

    //////////////////////////////////Mean///////////////////////////////////////
    const xMean = Math.floor(xSub/n);
    const yMean = Math.floor(ySub/n);

    //console.log(xMean+" "+yMean);

    ////////////////////////////////////////Regression////////////////////////////////////

    var xB = (corr*(xSigma/ySigma)).toFixed(2);
    var xB2 = ((xB*yMean)).toFixed(2);
    xB2 = -xB2 + xMean;
    var xReg = "";

    Math.sign(xB2) == 1 ? xReg = "x = "+ xB+"y + "+xB2 : xReg = "x = "+ xB+"y "+xB2;

    var yB = (corr*(ySigma/xSigma)).toFixed(2);
    var yB2 = ((yB*xMean)).toFixed(2);
    yB2 = -yB2 + yMean;
    var yReg = "";

    Math.sign(yB2) == 1 ? yReg = "y = "+ yB+"x + "+yB2 : yReg = "y = "+ yB+"x "+yB2;
    console.log(xReg);

    document.getElementById("test").innerHTML = xReg;

}



