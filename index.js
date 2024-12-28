const jarakTouring = document.getElementById("jarakTouring");
const konsumsi = document.getElementById("konsumsi");
const pengeluaranLainlain = document.getElementById("pengeluaranLainlain");
const totalBiaya = document.getElementById("totalBiaya");

const FUEL_PRICE = 15000;
const FUEL_EFFICIENCY = 10;



function validasi_input_jarak(distance){
    if (distance < 50){
        window.alert("Jarak harus lebih dari 50");
        return false
    }
    else{
        return true
    }
}
function calculate_fuel_cost(jarak){
    let fuel_needed = jarak / FUEL_EFFICIENCY;
    return fuel_needed * FUEL_PRICE;
}
function calculate_total_cost(mbadok_cost,laine_cost,jarak){
    let fuel_cost = calculate_fuel_cost(jarak);
    let total_cost = fuel_cost + mbadok_cost + laine_cost;
    return total_cost;
}
function main(){
    let jarak = Number(jarakTouring.value);
    let mbadok_cost = Number(konsumsi.value);
    let laine_cost = Number(pengeluaranLainlain.value);

    if(validasi_input_jarak(jarak)){
        let total = calculate_total_cost(mbadok_cost,laine_cost,jarak);
        nfObject = new Intl.NumberFormat('en-US');
        total = nfObject.format(total);
        totalBiaya.textContent = "Rp." + total
    }
    else{
        totalBiaya.textContent = " "
    }
}