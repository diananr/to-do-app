window.addEventListener("load", function(){
	var areaTexto = document.getElementById("textArea");
	var btnAgregar = document.getElementById("btn");
	var cajaTareas = document.getElementById("listaTarea");

	areaTexto.addEventListener("keyup", function(){
		if(areaTexto.value.trim().length === 0 || areaTexto.value.trim() === ""){
			btnAgregar.disabled = true;
		}
		else
			btnAgregar.disabled = false;
	});

	btnAgregar.addEventListener("click", function(){
		agregarTarea();
		areaTexto.value = "";
		btnAgregar.disabled = true;
	});

	function agregarTarea(){
		var tarea = document.createElement("div");
		tarea.innerText = areaTexto.value.trim();
		tarea.classList.add("cadaTarea");
		cajaTareas.insertBefore(tarea, cajaTareas.childNodes[0]);

		var check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.classList.add("checki");
		tarea.insertBefore(check,tarea.childNodes[0]);

		check.addEventListener("click", function(){
			if(this.checked){
				this.parentElement.classList.add("tachado");
			}
			else
				this.parentElement.classList.remove("tachado");
		});

		var cuadrado = document.createElement("button");
		cuadrado.type = "button";
		cuadrado.innerText = "X";
		cuadrado.classList.add("tacho");
		tarea.insertBefore(cuadrado,tarea.childNodes[3]);
		// tarea.appendChild(cuadrado);

		cuadrado.addEventListener("click", function(){
			this.parentElement.style.display = "none";
		});
	}
});