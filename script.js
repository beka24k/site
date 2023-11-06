
// Get a NodeList of all <li> elements in the document
var myNodeList = document.getElementsByTagName('li');
var i;
// Loop through each <li> element in the NodeList
for (i=0;i<myNodeList.length;i++){
  var span = document.createElement("span");
  var txt =document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  // Append the <span> element to the current <li> element
  myNodeList[i].appendChild(span);
}
// Get all elements with a class of 'close'
var close = document.getElementsByClassName("close");
var i;
// Loop through the 'close' elements
for (i=0; i<close.length;i++){
  // When a 'close' element is clicked
  close[i].onclick = function(){
    // Get the parent <li> element of the clicked 'close' element
    var div = this.parentElement;
    // Set the style of the parent <li> element to 'display: none', hiding it
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
},false);

function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === ''){
    alert("Write down the city you want to visit or have already visited")
  }else{
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i=0; i<close.length;i++) {
    // When a 'close' element is clicked
    close[i].onclick = function () {
      // Get the parent <li> element of the clicked 'close' element
      var div = this.parentElement;
      // Set the style of the parent <li> element to 'display: none', hiding it
      div.style.display = "none";
    }
  }
}

