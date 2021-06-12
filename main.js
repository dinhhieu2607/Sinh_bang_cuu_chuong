let html = "";
for(let h = 1;h <= 9; h++) {
    html += "<tr>";
    for(let c = 2;c <= 9;c++){
        tich = c*h;
        html += "<td>" + c + "x" + h + "="+ tich +"</td>";
    }
    html += "</tr>";
}
document.getElementById("Bang_cuu_chuong").innerHTML = html;