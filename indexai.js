const jarakTouring = document.getElementById("jarakTouring");
const konsumsi = document.getElementById("konsumsi");
const pengeluaranLainlain = document.getElementById("pengeluaranLainlain");
const totalBiaya = document.getElementById("totalBiaya");

const FUEL_PRICE = 15000;
const FUEL_EFFICIENCY = 10;

function validasi_input_jarak(distance) {
    if (distance < 50) {
        window.alert("Jarak harus lebih dari 50");
        return false; // Kembalikan false jika tidak valid
    }
    return true; // Kembalikan true jika valid
}

function calculate_fuel_cost(jarak) {
    let fuel_needed = jarak / FUEL_EFFICIENCY;
    return fuel_needed * FUEL_PRICE;
}

function calculate_total_cost(jarak, mbadok_cost, laine_cost) {
    let fuel_cost = calculate_fuel_cost(jarak);
    let total_cost = fuel_cost + mbadok_cost + laine_cost;
    return total_cost;
}

function main() {
    let jarak = Number(jarakTouring.value); // Ambil nilai terbaru dari input
    let mbadok_cost = Number(konsumsi.value); // Ambil nilai konsumsi
    let laine_cost = Number(pengeluaranLainlain.value); // Ambil nilai pengeluaran lain-lain

    console.log("Jarak:", jarak); // Debugging untuk melihat nilai input

    if (validasi_input_jarak(jarak)) {
        totalBiaya.textContent = calculate_total_cost(jarak, mbadok_cost, laine_cost);
    } else {
        totalBiaya.textContent = ""; // Kosongkan total biaya jika input tidak valid
    }
}
