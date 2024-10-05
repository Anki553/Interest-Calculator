function calculate(){
    let totalAmount=document.getElementById("total-amount")
    let principalInput=document.getElementById("principal")
    let interestInput=document.getElementById("interest")
    let yearInput=document.getElementById("year")

  let principal= Number(principalInput.value);
  let rate=Number(interestInput.value/100)
  let year=Number(yearInput.value)

  if(principal<0 ||isNaN(principal)){
    principal=0;
    principalInput.value=0;
  }
  if(rate<0 ||isNaN(rate)){
    rate=0;
    interestInput.value=0;
  }
  if(year<0 ||isNaN(year)){
    year=0;
    yearInput.value=0;
  }

  const result=principal*Math.pow((1+rate/100),1*year);
  totalAmount.textContent=result.toLocaleString(undefined,{style:"currency",
    currency:"USD"});
}
