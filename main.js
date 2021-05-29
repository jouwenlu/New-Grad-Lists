$("#subscribe-button").click(function() {
    $("#subscribe-button").addClass('button-clicked');
  });

$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});

function makeTable() {
    // Columns: Companies, Status, Type 
    // TODO: change companies to links
    var col1 = [
        "Allen & Company","Baird","Bank of America", "Barclays", "BMO Capital Markets",
        "BNP Paribas", "BNY Mellon", "Cantor Fitzgerald", "Centerview Partners", 
        "Citi", "Cowen", "Credit Suisse", "DC Advisory", 
        "Deutsche", "Evercore", "Goldman Sachs", "Greenhill", "Guggenheim",
        /*"Harris Williams",*/ "Houlihan Lokey", /*"HSBC",*/ "J.P. Morgan", "Jefferies",
        "Lazard", "Lincoln", "LionTree Advisors", "Macquarie",
        "Moelis", "Morgan Stanley", "MUFG", "Nomura", "Oppenheimer",
        "Perella Weinberg Partners", "Piper Sandler", "PJ Solomon", "PJT Partners", 
        "Qatalyst", "Raine Group", "Raymond James", "RBC", "Rothschild",
        "Santander", "Scotiabank", "Societe Generale", 
        "Stifel", "TD Securities", "Tudor, Pickering, Holt & Co.", "UBS",
        "Union Square Advisors", "Wells Fargo", "William Blair"
    ]; 
    var col2 = [
        "N/A", "Closed", "Open", "N/A", "Closed",
        "N/A", "N/A", "N/A", "Open",
        "Open", "Open", "Open", "Open",
        "Open", "Closed", "N/A", "Open", "Open",
        /*"N/A",*/ "N/A", /*"N/A",*/ "Open", "Open",
        "Open", "Open", "Open", "Closed",
        "Closed", "Open", "Open", "Open", "Open", 
        "Closed", "Closed", "Open", "Open",
        "Open", "Closed", "Open", "Closed", "N/A",
        "Open", "Open", "Open",
        "Open", "Open", "Open", "Open",
        "Open", "Open", "Closed"
    ]; 
    var col3 = [
        "EB", "MM", "BB", "BB", "MM",
        "MM", "MM", "MM", "EB",
        "BB", "MM", "BB", "MM",
        "BB", "EB", "BB", "EB", "EB",
        /*"MM",*/ "MM", /*"MM",*/ "BB", "MM",
        "EB", "MM", "EB", "MM",
        "EB", "BB", "MM", "MM", "MM",
        "EB", "MM", "MM", "EB", 
        "EB", "EB", "MM", "MM", "MM",
        "MM", "MM", "MM",
        "MM", "MM", "EB", "BB",
        "MM", "MM", "MM"
    ]; 

    //var table = document.createElement('table');
    //var header = document.createElement('head');
    var body = document.createElement('tbody');

    //header.innerHTML = "<tr> <th>Company</th> <th>Status</th> <th>Class Size</th> <th>Type</th> </tr>";
    
    for (var i = 0; i < col1.length; i++) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        cell2.setAttribute("status"+i, "td" + i); 
        var cell3 = document.createElement('td');

        var text1 = document.createTextNode(col1[i]);
        cell1.appendChild(text1);
        cell2.innerHTML = col2[i];
        cell3.innerHTML = col3[i];

      

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        body.appendChild(row);
    }
    document.getElementById('job-table').appendChild(body);
}

$(document).ready(function(){
    for (var i = 0; i < col1.length; i++) {
        if ($("#status"+i).text === "Open") {
            $("#status"+i).css("color", "#505F98");
        }
    }
});

// This will generate the text file content based on the form data
/*
function buildData(){
    var txtData = $("#email-box").val();
    return txtData;
}
 // This will be executed when the document is ready
 $(function(){
    // This will act when the submit BUTTON is clicked
    $("#email-to-save").submit(function(event){
        event.preventDefault();
        var txtData = buildData();
        window.location.href="data:application/octet-stream;base64,"+Base64.encode(txtData);
    });
}); */