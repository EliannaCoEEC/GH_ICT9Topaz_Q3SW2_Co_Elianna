//brand & discounts
function compute_discount() {
    let budget = Number(document.getElementById('budget').value);
    let discount = budget * 0.2

    document.getElementById('result').innerHTML = 'Recommended Brands'
     document.getElementById('result2').innerHTML = 'Acer' 
      document.getElementById('brandresult').innerHTML = 'Lenovo' 
       document.getElementById('brandresult2').innerHTML = 'Asus'
    document.getElementById('output').innerHTML = 'You are eligible for Php ' + discount
}