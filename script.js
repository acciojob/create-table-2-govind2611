function createTable() {
    //Write your code here
	var row=prompt("Input number of rows");
	var col=prompt('Input number of columns');
	var table=document.getElementById('myTable');
	for(let i=0;i<row;i++){
		var r=document.createElement('tr');
		for(let j=0;j<col;j++){
			var c=document.createElement('td');
			c.innerText=`Row-${i} Column-${j}`;
			r.appendChild(c);
		}
		table.appendChild(r);
	}
  
}
