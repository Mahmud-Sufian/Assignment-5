const getInputValue = (id) => {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);

    // reset input field
    // input.value = '';

    return inputValue;

    
}

// calculate button
document.getElementById('calculate').addEventListener('click', function(){
    const food = getInputValue('food-cost');
    const rent = getInputValue('rent-cost');
    const cloth = getInputValue('cloth-cost'); 
    const salary = getInputValue('salary');
    const percent = getInputValue('percent');


    // cost compare
    if(food > 0 && rent > 0 && cloth > 0 && percent > 0){

        const totalCostValue = food + rent + cloth; 
        document.getElementById('err').innerText = '';

        if(salary > totalCostValue){
            document.getElementById('total-cost').value = totalCostValue;
            const balance = salary - totalCostValue;
            const totalBalance = document.getElementById('balance').value = balance;


            // how much percent balance
            const save = salary / percent;
            document.getElementById('total-percent').value = save; 

            // left balance
            const leftBalance = salary - totalCostValue - save;
            document.getElementById('left-balance').value = leftBalance;

            document.getElementById('err').innerText = '';
        }
        else{
            // error and total balance reset
            document.getElementById('balance').value = '';
            document.getElementById('total-cost').value = '';
            document.getElementById('percent').value = '';
            document.getElementById('total-percent').value = '';
            document.getElementById('left-balance').value = '';
            document.getElementById('err').innerText = 'You Have No Enough Money';
        }
    }
    else{
        // error and total balance reset
        document.getElementById('err').innerText = 'Please Input a Positive Value';
        document.getElementById('total-cost').value = '';
        document.getElementById('balance').value = '';
        // document.getElementById('percent').value = '';
        document.getElementById('total-percent').value = '';
        document.getElementById('left-balance').value = '';
    }

    
    
    

})