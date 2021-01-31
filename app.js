$('document').ready(function () {
    const loanOutput = $('#loan')
    const loanInput = $('#loanInput')
    const interestOutput = $('#interest')
    const interestInput = $('#interestInput')
    const loanPeriodOutput = $('#loanPeriod')
    const loanPeriodInput = $('#monthsInput')
    const loanTotal = $('#loanTotal')
    const monthlyPayment = $('#monthlyPayment')
    const submit = $('#submit')
    
    //CALCULATE MONTHLY PAYMENT
    const calcMonthlyPayments = (loanAmt, interest, months) => {
        const interestPerPymt = (interest.val()/100) / 12
        const monthlyPymt = (loanAmt.val() * interestPerPymt) / (1 - (1 + interestPerPymt) ** (-months.val()))
        monthlyPayment.text("$" + monthlyPymt.toFixed(2))
    }

    //CHANGE DISPLAY BASED ON INPUT INFO
    const updateDisplay = (input, output) => {
        input.change(function () {
            output.text(input.val())
        })
    }

    updateDisplay(loanInput, loanOutput)
    updateDisplay(interestInput, interestOutput)
    updateDisplay(loanPeriodInput, loanPeriodOutput)

    submit.on('mouseenter', () => submit.animate({ fontSize: '1.1rem' }, 400))
    submit.on('mouseleave', () => submit.animate({ fontSize: '1rem' }, 'fast'))
    submit.on('click', () => calcMonthlyPayments(loanInput, interestInput, loanPeriodInput))

    

})