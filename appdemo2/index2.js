function creearListado() {
  let list = document.querySelector("#listadoChipi");
  var fragmento = new DocumentFragment();
  var li = document.createElement("li");
  li.innerHTML = "programar es muy chapotero";
  fragmento.appendChild(li);

  list.appendChild(fragmento);
}

//creearParrafo();
