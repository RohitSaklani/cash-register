var billAmount = document.getElementById("billamount");
var checkButton = document.getElementById("checkbutton");
var cashAmount = document.getElementById("cashamount");
var message = document.getElementById("message");
var change = document.getElementById("change-notes");

var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];




checkButton.addEventListener('click', function() {


    if (cashAmount.value == '') {
        console.log('!!!!Enter the cashamount!!!!');
        message.innerHTML = '!!!! Enter the cashamount !!!!';
    } else if (billAmount.value == '') {
        console.log('Enter the billamount');
        message.innerHTML = '!!!! Enter the billamount !!!!';
    } else {
        if (billamount.value > cashAmount.value) {
            console.log('cash is less tham billamount');
            message.innerHTML = '!!!!cash is less tham billamount!!!!';
        } else {
            calculate();
        }

    }


});

function calculate() {
    var notesnumber = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log('inside calculate ');
    var balanceamount = cashAmount.value - billAmount.value;

    for (i = 0; i < notes.length; ++i) {
        if (notes[i] <= balanceamount) {

            balanceamount = balanceamount - notes[i];
            notesnumber[i] = notesnumber[i] + 1;
            --i;

            console.log("balance : " + balanceamount);
        }
    }
    console.log("end of calculte ");
    displaynotes(notesnumber);
}

function displaynotes(notesnumber) {

    console.log('inside display ');
    for (i = 0; i < notes.length; ++i) {

        console.log(notes[i] + '  ' + notesnumber[i]);

    }

    var change_rows = change.getElementsByTagName("td");
    console.log("change_rows.length : " + change_rows.length);

    // for (i = 0; i < change_rows.length; ++i) {
    //     console.log("change_rows : " + change_rows[i].nodeName + "node value  : " + change_rows[i].innerHTML);

    // }

    for (i = 0; i < notes.length; ++i) {
        console.log("change_rows : " + change_rows[i].nodeName);
        change_rows[i + 1].innerHTML = notesnumber[i];
    }

}