
function convertCurrency() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let xmlhttp = new XMLHttpRequest();
    let url = "http://data.fixer.io/api/symbolsc9f541f6a23fc930b2c967b6f9c3457a" + from + " , " + to;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onload=function(){
        if(xmlhttp.status==200) {
            let result = xmlhttp.responseText;
            let jsResult = (result.toString());
            alert(jsResult);

            let oneUnit = jsResult.rates[to]/jsResult.rates[from];
            let amt = document.getElementById("fromAmount").value;
            document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);

        }
    }
};

/* not working?? */