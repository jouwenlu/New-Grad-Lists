function makeTable() {
    // Columns: Companies, Status, Class Size, Type 
    // TODO: change companies to links
    var col1 = ["Goldman Sachs","Morgan Stanley","c"]; 
    var col2 = ["Open", "Closed", "Open"]; 
    var col3 = ["100+", "200+", "300+"]; 
    var col4 = ["BB", "BB", "BB"]; 

    //var table = document.createElement('table');
    //var header = document.createElement('head');
    var body = document.createElement('tbody');

    //header.innerHTML = "<tr> <th>Company</th> <th>Status</th> <th>Class Size</th> <th>Type</th> </tr>";
    
    for (var i = 0; i < col1.length; i++) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        var cell4 = document.createElement('td');

        var text1 = document.createTextNode(col1[i]);
        cell1.appendChild(text1);
        cell2.innerHTML = col2[i];
        cell3.innerHTML = col3[i];
        cell4.innerHTML = col4[i];

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        body.appendChild(row);
    }
    //table.appendChild(header);
    //table.appendChild(body);
    document.getElementById('job-table').appendChild(body);
}