// Global
var calc = $('#calculate button')
var DISPLAY = document.querySelector('.item__display')

// Catch click event
calc.click(function (event) {
    // Get input value
    var display = $('#display').val();
    let value = event.target.innerText;
    // Declare error msg
    var errorMsg = 'Error Value';

    // Switch-case for values
    switch (value) {
        case 'AC':
            // Clear display
            $('#display').val('');
            break;

        case '=':
            if (value.match(/=/)) {
                try {
                    // Calculate by eval
                    var finalResult = eval(display);
                    // Send to display
                    $('#display').val(finalResult);
                    // If Case divide to 0
                    if (display.match(/Infinity|NaN|null/)) {
                        // Send error msg
                        $('#display').val(errorMsg);
                        // Send prev value after 1.5s
                        setTimeout(() => {
                            $('#display').val(display);
                        }, 1500)
                    }
                } catch {
                    // Send error msg
                    $('#display').val(errorMsg);
                    // Send prev value after 1.5s
                    setTimeout(() => {
                        $('#display').val(display);
                    }, 1500)
                }
            }
            break;

        case '+/-':
            // Adding a sign +/- for value
            if (display >= 0) {
                var addMinus = -Math.abs(display);
                $('#display').val(addMinus);
            } else {
                var addPlus = Math.abs(display);
                $('#display').val(addPlus);
            }
            break;

        default:
            // For ane other cases
            var resultCalc = display + value;
            $('#display').val(resultCalc);
    }



});

$("#display").keyup(function (event) {
    if (event.keyCode === 13) {
        var display = $('#display').val()
        var finalResult = eval(display);
        $('#display').val(finalResult);
    }
});

