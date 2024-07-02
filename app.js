var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

var tablinks = document.getElementsByClassName("tab-links");
                var tabcontents = document.getElementsByClassName("tab-contents");
                function opentab(tabname) {
                    for (tablink of tablinks) {
                        tablink.classList.remove("active-link");
                    }
                    for (tabcontent of tabcontents) {
                        tabcontent.classList.remove("active-tab");
                    }
                    event.currentTarget.classList.add("active-link");
                    document.getElementById(tabname).classList.add("active-tab");
                }


				var sidmenu = document.getElementById("sidmenu");
                function openmenu() {
                    sidmenu.style.right = "0";
                }
                function closemenu() {
                    sidmenu.style.right = "-200px";
                }

				
