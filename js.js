function loadData() {
    var url = "https://thesmartq.firebaseio.com/menu.json";
    fetch(url)
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
        var table = document.createElement("table");            
        table.setAttribute('align', 'center');
        table.setAttribute('class', 'table table-sm');
        table.setAttribute('id', 'tableId');
        var row = document.createElement("tr");
        var clm = document.createElement("th"); clm.innerHTML = "S.No."; row.appendChild(clm);        
        var clm = document.createElement("th"); clm.innerHTML = "name"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "price"; row.appendChild(clm);//var clm = document.createElement("th"); clm.innerHTML = "description "; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "category"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "vegflag"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "availabletime"; row.appendChild(clm);
        table.appendChild(row);
        for(var i=0; i<myJson.length; i++) {
            var row = document.createElement("tr");
            var clm = document.createElement("td"); clm.innerHTML = i+1 ; row.appendChild(clm);
            
            var clm = document.createElement("td"); 
            var btn = document.createElement("button");
            btn.setAttribute("onclick", "descrptn('pp"+i+"')");
            btn.setAttribute("class", "btnaclk");
            btn.innerHTML = myJson[i].name;
            clm.appendChild(btn);
            row.appendChild(clm);
    
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].price; row.appendChild(clm);//var clm = document.createElement("td"); clm.innerHTML = myJson[i].description; row.appendChild(clm);
            var para = document.createElement("p");
            para.setAttribute("id", "pp"+i);
            para.setAttribute("style", "display: none; background-color: yellow; text-overflow: ellipsis;");
            
            if(myJson[i].description == "") para.innerHTML = "No Description";
            else para.innerHTML = myJson[i].description;
                
           
            
            var pp = document.getElementById("description"); pp.appendChild(para);
                        
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].category; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].vegflag; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].availabletime; row.appendChild(clm);
            table.appendChild(row);
        }
        var ele = document.getElementById("content");
        ele.appendChild(table);
    });
}

function descrptn(id) {
    var contactsSheetsDiv = document.getElementById('description'); 
    if (contactsSheetsDiv.hasChildNodes()) {
        var children = contactsSheetsDiv.childNodes;   
        for(var c=0; c < children.length; c++) {
        if(children[c].style) {
        children[c].style.display = 'none';
        }
    }    
    var ele = document.getElementById(id);
    ele.style.display = "block";


}}

function sortout(category) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableId");
    switching = true; 
    while (switching) { 
      switching = false;
      rows = table.getElementsByTagName("tr"); 
      for (i = 1; i < (rows.length - 1); i++) { 
        shouldSwitch = false; 
        x = rows[i].getElementsByTagName("td")[3];
        y = rows[i + 1].getElementsByTagName("td")[3]; 
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { 
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) { 
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }