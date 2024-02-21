// Seat Selection 

const allSeats = document.getElementsByClassName('seat');


for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        const SeatName = event.target.innerText;
      
        const seatPrice = 550;

        const seatCount = getConvertedValue('seat-count');
        if(seatCount + 1 > 4)
        {
            alert("One Person Can Select Maximum 4 Tickets");
            return;
        }  

        event.target.style.backgroundColor = "chartreuse";
        event.target.style.color= "white";
        event.target.setAttribute('disabled',false);

        const seatsContainer = document.getElementById('selected-seats-container');

        const div = document.createElement('div');
        div.classList.add("selected-seats");

        const seatNameTitle = document.createElement('p');
        const seatClass = document.createElement('p');
        const price = document.createElement('p');

        seatNameTitle.innerText = SeatName;
        seatClass.innerText = "Economy";
        price.innerText = seatPrice;

        div.appendChild(seatNameTitle);
        div.appendChild(seatClass);
        div.appendChild(price);

        seatsContainer.appendChild(div);
        const seatIncrease = getConvertedValue('seat-count');
        document.getElementById('seat-count').innerText = seatIncrease + 1;
  
         const seatDecrease = getConvertedValue('seat-left');
         document.getElementById('seat-left').innerText = seatDecrease - 1;

        updateTotalCost(seatPrice);
        updateGrandTotal();

    }); 
   
      
    //Calculate Grand Total 
     
    function updateGrandTotal(status) {
        const totalCost = getConvertedValue('total-cost');
        if (status == undefined) {
        
        
            document.getElementById('grand-total').innerText = totalCost;
        } 

        else {
             const couponCode = document.getElementById('coupon-code').value;

             if(couponCode =="New15")
             {
                const discountedPrice = totalCost * 0.15;
                document.getElementById('grand-total').innerText = totalCost - discountedPrice;
                
                const discountSection = document.getElementById('discount-price');
                const discount = document.createElement('p')
                const discountAmount = document.createElement('p')
                discount.innerText = "discounted Price";
                discountAmount.innerText ="BDT :" + discountedPrice;
                discountSection.appendChild(discount);
                discountSection.appendChild(discountAmount);
                
                const applyButton = document.getElementById('apply-button');
                const couponDiv = document.getElementById('coupon-div');
                couponDiv.classList.add('hidden');
            

             }  

             else if (couponCode == "Couple 20")
             {
                const discountedPrice = totalCost * 0.2;
                document.getElementById('grand-total').innerText = totalCost - discountedPrice;
                
                const discountSection = document.getElementById('discount-price');
                const discount = document.createElement('p');
                const discountAmount = document.createElement('p')
                discount.innerText = "discounted Price";
                discountAmount.innerText ="BDT :" + discountedPrice;
                discountSection.appendChild(discount);
                discountSection.appendChild(discountAmount);
             }

             else
             {
                alert("Please Enter a valid Coupon Code");
             }
             
        }

    } 

    //count TotalCost

    function updateTotalCost(seatPrice) {
        const totalCostElement = document.getElementById('total-cost');
        const totalCost = getConvertedValue('total-cost');
        const total = totalCost + seatPrice;
        totalCostElement.innerText = total;
    }
}

//  converted value 

function getConvertedValue(elementId) {
    const element = document.getElementById(elementId).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}





