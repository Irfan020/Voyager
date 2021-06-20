let table_sort_elements = document.querySelectorAll('.table_sort');
if(table_sort_elements)
{
    table_sort_elements = Array.isArray(table_sort_elements) ? table_sort_elements : Object.values(table_sort_elements);
    table_sort_elements.forEach(table_sort_element=>{
        let thead_cells = table_sort_element.querySelectorAll('thead>tr>*');
        if(thead_cells)
        {
            thead_cells = Array.from(thead_cells);

            thead_cells.forEach((thead_cell, index)=>{
                thead_cell.addEventListener('click', function(){
                    this.classList.toggle('asc');
                    sortTableByColumn(table_sort_element, index, !this.classList.contains('asc'));
                });
            });
        }
    });
}


function sortTableByColumn(table, column, desc=false) 
{
    let tbody = table.querySelector('tbody'),
        rows  = tbody.querySelectorAll('tr');

    rows  = rows.isArray ? rows : Object.values(rows);

    function compare(a, b) {
        // console.log(a.children[column], b.children[column]);
        let aText = a.children[column].innerText.trim(),
            bText = b.children[column].innerText.trim();
        
        return (aText < bText) ? -1 : 1;
    }

    rows.sort(compare);

    if(desc) rows.reverse();

    tbody.innerHTML = '';

    let i = 0;
    while (i<rows.length) {
        tbody.appendChild(rows[i]);
        i++;
    }
}




function filter_table(This, table_id)
{
    let recordLists = document.querySelectorAll(`#${table_id}>*`);
    if(recordLists)
    {
        hide_tr(recordLists);
        recordLists.forEach(recordList=>{
            let str   = recordList.innerText.toLowerCase(),
                value = This.value.toLowerCase();

            if(str.indexOf(value)>=0)
            {
                recordList.style.display = '';
            }
        });
    }
}


function hide_tr(recordLists) {
    recordLists.forEach(recordList=>{
        recordList.style.display = 'none';
    });
}
