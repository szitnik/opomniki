window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var dodajOpomnik = function(event) {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		var previous  = document.getElementById('opomniki');
		document.getElementById('opomniki').innerHTML = previous.innerHTML + 
			"<div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div></div>";
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";
		
	};
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	var izvediPrijavo = function(event) {
		var ime = document.querySelector("#uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = ime;
		document.querySelector(".pokrivalo").style.display = "none";
	};	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
});