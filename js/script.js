const testBG = () => {
    document.body.style.backgroundColor = 'white';

    const todaysDate = new Date();


    document.getElementById('date').innerHTML = todaysDate;
    document.getElementById('clock').innerHTML = new Date();
    document.write(Date.prototype.getUTCDate());
}

testBG();





