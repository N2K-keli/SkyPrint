function calculateCost ()
{
    let copies =document.getElementById("copies").value ;
    let printType = document.getElementById('print-type').value;
    let doubleSided = document.getElementById('double-sided').checked ;

    let costPerPage;
    if (printType === 'color') 
        {
            costPerPage = 100 ;
        }
    else 
    {
        costPerPage = 25 ;
    }

    let totalCost = copies * costPerPage ;
    document.getElementById('cost-display').textContent = totalCost + 'CFA' ;

}
function validateFiles()
{
        let maxSize = 10 *1024*1024 ;// this represents 10MB which is the maximum size for now.
}
document.addEventListener('DOMContentLoaded',
    function()
    {
        document.getElementById("copies").addEventListener('input',calculateCost);
        calculateCost();
        console.log(document.getElementById("copies"));
    }
);