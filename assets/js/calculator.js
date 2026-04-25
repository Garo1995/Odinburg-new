document.addEventListener("DOMContentLoaded", () => {
    const priceRange = document.getElementById("price-range");
    const termRange = document.getElementById("term-range");
    const depositRange = document.getElementById("deposit-range");
    const loanRange = document.getElementById("loan-price-range");

    const priceInput = document.getElementById("price-input");
    const termInput = document.getElementById("term-input");
    const depositInput = document.getElementById("deposit-input");
    const loanInput = document.getElementById("loan-amount");

    const depositPercent = document.getElementById("deposit-percent");
    const percentBtns = document.querySelectorAll("#preset-percent li");

    function onlyNum(str) {
        const v = parseInt(String(str).replace(/\D/g, ""), 10);
        return isNaN(v) ? 0 : v;
    }

    function formatNum(num) {
        return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function paintRange(range) {
        const min = +range.min;
        const max = +range.max;
        const val = +range.value;
        const p = max === min ? 0 : ((val - min) * 100) / (max - min);

        range.style.background = `linear-gradient(
            to right,
            rgba(11, 58, 42, 0.8) 0%,
            rgba(11, 58, 42, 0.8) ${p}%,
            rgba(203, 184, 169, 0.4) ${p}%,
            rgba(203, 184, 169, 0.4) 100%
        )`;
    }

    function updatePercentButtons(percent) {
        percentBtns.forEach(btn => {
            btn.classList.toggle("calc-percent-act", +btn.dataset.percent === Math.round(percent));
        });
    }

    function updateLoanFromDeposit() {
        const price = +priceRange.value || 0;
        const deposit = +depositRange.value || 0;

        let loan = Math.round(price * (100 - deposit) / 100);
        if (loan < 0) loan = 0;
        if (loan > price) loan = price;

        loanRange.max = price;
        loanRange.value = loan;
        loanInput.value = formatNum(loan);

        depositInput.value = deposit;
        depositPercent.textContent = deposit + "%";

        updatePercentButtons(deposit);
    }

    function updateDepositFromLoan() {
        const price = +priceRange.value || 0;
        const loan = +loanRange.value || 0;

        let deposit = price > 0 ? Math.round((price - loan) / price * 100) : 0;

        if (deposit < 0) deposit = 0;
        if (deposit > 100) deposit = 100;

        depositRange.value = deposit;
        depositInput.value = deposit;
        depositPercent.textContent = deposit + "%";

        loanInput.value = formatNum(loan);

        updatePercentButtons(deposit);
    }

    function updatePrice() {
        const price = +priceRange.value || 0;
        priceInput.value = formatNum(price);
        loanRange.max = price;
    }

    function updateTerm() {
        termInput.value = termRange.value;
    }

    function repaintAll() {
        paintRange(priceRange);
        paintRange(termRange);
        paintRange(depositRange);
        paintRange(loanRange);
    }

    // PRICE
    priceRange.addEventListener("input", () => {
        updatePrice();
        updateLoanFromDeposit();
        repaintAll();
    });

    priceInput.addEventListener("input", () => {
        let v = onlyNum(priceInput.value);
        priceInput.value = v ? formatNum(v) : "";
    });

    priceInput.addEventListener("blur", () => {
        let v = onlyNum(priceInput.value);
        const min = +priceRange.min;
        const max = +priceRange.max;

        if (v < min) v = min;
        if (v > max) v = max;

        priceRange.value = v;
        updatePrice();
        updateLoanFromDeposit();
        repaintAll();
    });

    // TERM
    termRange.addEventListener("input", () => {
        updateTerm();
        paintRange(termRange);
    });

    termInput.addEventListener("input", () => {
        termInput.value = onlyNum(termInput.value);
    });

    termInput.addEventListener("blur", () => {
        let v = onlyNum(termInput.value);
        const min = +termRange.min;
        const max = +termRange.max;

        if (v < min) v = min;
        if (v > max) v = max;

        termRange.value = v;
        updateTerm();
        paintRange(termRange);
    });

    // DEPOSIT
    depositRange.addEventListener("input", () => {
        updateLoanFromDeposit();
        repaintAll();
    });

    depositInput.addEventListener("input", () => {
        depositInput.value = onlyNum(depositInput.value);
    });

    depositInput.addEventListener("blur", () => {
        let v = onlyNum(depositInput.value);
        const min = +depositRange.min;
        const max = +depositRange.max;

        if (v < min) v = min;
        if (v > max) v = max;

        depositRange.value = v;
        updateLoanFromDeposit();
        repaintAll();
    });

    percentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            depositRange.value = btn.dataset.percent;
            updateLoanFromDeposit();
            repaintAll();
        });
    });

    // LOAN
    loanRange.addEventListener("input", () => {
        const price = +priceRange.value || 0;
        let loan = +loanRange.value || 0;

        if (loan < 0) loan = 0;
        if (loan > price) loan = price;

        loanRange.value = loan;
        updateDepositFromLoan();
        repaintAll();
    });

    loanInput.addEventListener("input", () => {
        let v = onlyNum(loanInput.value);
        loanInput.value = v ? formatNum(v) : "";
    });

    loanInput.addEventListener("blur", () => {
        const price = +priceRange.value || 0;
        let loan = onlyNum(loanInput.value);

        if (loan < 0) loan = 0;
        if (loan > price) loan = price;

        loanRange.value = loan;
        updateDepositFromLoan();
        repaintAll();
    });

    // INIT
    updatePrice();
    updateTerm();
    updateLoanFromDeposit();
    repaintAll();
});








$('.icon-circle-help').on('click', function () {
    $('.subsidy-mobs').addClass('touchstart-open');
    $('body').addClass('body-fon');
})