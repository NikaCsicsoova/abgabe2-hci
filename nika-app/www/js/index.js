/* Diese Funktion fragt die Währungen ab */
function getRates(){
	var fixerRequest=null;
	fixerRequest=new XMLHttpRequest();
	fixerRequest.open("GET", "http://api.fixer.io/latest", false);
	fixerRequest.send(null);
	var rates=JSON.parse(fixerRequest.responseText);
	return rates;
}
/* ------------------------------------- */
			

/* Diese Funktion macht die eigentliche Umrechnung und zeigt das Resultat in Endbildschirm */
function callResult(){
	var euro=document.getElementById("euro").value;
	var valuta_value=document.getElementById("valuta").value;
	var sum=euro*valuta_value;
	var select=document.getElementById("valuta");
	var valuta_name=select.options[select.selectedIndex].text;
				
	var result="<div id='result_div'>";
	result+="1 EUR = "+valuta_value+" "+valuta_name+"<br>";
	result+=euro+" Euro ist "+sum+" "+valuta_name+"!";
	result+="</div>";
	var returnHome="<a href='index.html'><img src='img/return.jpg'></a>";
	document.getElementById("result").innerHTML=result;
	document.getElementById("return").innerHTML=returnHome;
	document.getElementById("form").innerHTML=" ";
}
/* --------------------------------------------------------------------------------------- */
			

/* Die Währungen werden in Felder gespeichert */
var fixer=getRates();
var rates_array=new Array();
var names_array=new Array();
			
rates_array.push(fixer.rates.AUD, fixer.rates.BGN, fixer.rates.BRL, fixer.rates.CAD, fixer.rates.CHF, fixer.rates.CNY, fixer.rates.CZK, fixer.rates.DKK, fixer.rates.GBP, fixer.rates.HKD, fixer.rates.HRK, fixer.rates.HUF, fixer.rates.IDR, fixer.rates.ILS, fixer.rates.INR, fixer.rates.JPY, fixer.rates.KRW, fixer.rates.MXN, fixer.rates.MYR, fixer.rates.NOK, fixer.rates.NZD, fixer.rates.PHP, fixer.rates.PLN, fixer.rates.RON, fixer.rates.RUB, fixer.rates.SEK, fixer.rates.SGD, fixer.rates.THB, fixer.rates.TRY, fixer.rates.USD, fixer.rates.ZAR);

names_array.push("AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR");
/* ------------------------------------------ */


/* Die Währungen werden in Html-Select-Tag dargestellt */
var form_element="<select id='valuta'>";
for(var i=0;i<31;i++){
	form_element+="<option value='"+rates_array[i]+"'>"+names_array[i]+"</option>";
}
form_element+="</select>";
/* --------------------------------------------------- */