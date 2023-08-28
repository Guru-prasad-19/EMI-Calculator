function calculateEMI(){
    const principal = document.querySelector('#pa');
    const rate =  document.querySelector('#rate');
    const year = document.querySelector('#year');
    document.querySelector('.pa').textContent = principal.value;
    document.querySelector('.rate').textContent = rate.value;
    document.querySelector('.year').textContent = year.value;
    const r = (rate.value/1200);
    const x = Math.pow((1+r),(year.value * 12));
    const EMI = principal.value * (r) * (x) /(x-1);
    const total = EMI * 12 * year.value;
    const total_int = total - principal.value;
    document.querySelector('.em').textContent=EMI.toFixed(2);
    document.querySelector('.pay').textContent=total.toFixed(2);
    document.querySelector('.due').textContent=total_int.toFixed(2);
    document.querySelector('.result').style.opacity=1;
    principal.value='';
    rate.value='';
    year.value='';
}
new Promise()