function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + "-count")
    const productCount = parseInt(productInput.value)
    
    let newProductCount = productCount

    if(isIncrease == true){
        newProductCount  = productCount + 1
    }

    if(isIncrease == false && productCount > 1){
        newProductCount  = productCount - 1
    }

    productInput.value = newProductCount

    let productTotal
    
    if(product == "laptop"){
        productTotal = newProductCount * 1599
    }
    else {
        productTotal = newProductCount * 999
    }

    document.getElementById(product + "-total").innerText = productTotal

    handleCheckout()
}

function handleCheckout(){
    const laptopCount = parseInt(document.getElementById("laptop-count").value)
    const phoneCount = parseInt(document.getElementById("phone-count").value)

    const totalPrice = laptopCount * 1599 + phoneCount * 999
    document.getElementById("sub-total").innerText = totalPrice
    
    const tax = Math.round(totalPrice * 0.0635)
    document.getElementById("tax-amount").innerText = tax
    
    const grandTotal = totalPrice + tax
    document.getElementById("grand-total").innerText = grandTotal
}