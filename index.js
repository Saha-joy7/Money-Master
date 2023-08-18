function getInputById (inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    // inputField.value = '';
    return inputValue;
}

function set (setId, setInner){
    const whereToSet = document.getElementById(setId);
    whereToSet.innerText = setInner;
}

function totalExpenses(){
    const income = getInputById('income-input');
    const foodExpenses = getInputById('food-input');
    const RentExpenses =  getInputById('rent-input');
    const ClothesExpenses =  getInputById('Clothes-input');

    const totalExpenses = (foodExpenses + RentExpenses + ClothesExpenses);
    set('total-expenses', totalExpenses);

    const balance = (income - totalExpenses)
    set('now-balance', balance);
    return balance;
    
}

function saving(){
    const income = getInputById('income-input');
    const parcent = getInputById('save')

    const savingAmount = (income / 100) * parcent; 
    set('saving', savingAmount)

    const balance = totalExpenses()

    const remainingBalance = (balance - savingAmount);
    set('remaining', remainingBalance);
}



