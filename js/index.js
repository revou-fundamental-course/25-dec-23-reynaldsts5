document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan section keliling saat halaman dimuat
  document.getElementById("keliling").style.display = "none";
});

function showSection(sectionId) {
  if (sectionId === "luas") {
    document.getElementById("luas").style.display = "block";
    document.getElementById("keliling").style.display = "none";
    document.getElementById("luasBtn").classList.add("active");
    document.getElementById("kelilingBtn").classList.remove("active");
  } else if (sectionId === "keliling") {
    document.getElementById("keliling").style.display = "block";
    document.getElementById("luas").style.display = "none";
    document.getElementById("kelilingBtn").classList.add("active");
    document.getElementById("luasBtn").classList.remove("active");
  }
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!isNaN(alas) && !isNaN(tinggi)) {
    const luas = 0.5 * alas * tinggi;
    document.getElementById("luasResult").innerText = `Luas segitiga: ${luas}`;
  } else {
    document.getElementById("luasResult").innerText = "Masukkan angka yang valid untuk alas dan tinggi.";
  }
}

function hitungKeliling() {
  const sisi1 = parseFloat(document.getElementById("sisi1").value);
  const sisi2 = parseFloat(document.getElementById("sisi2").value);
  const sisi3 = parseFloat(document.getElementById("sisi3").value);

  if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("kelilingResult").innerText = `Keliling segitiga: ${keliling}`;
  } else {
    document.getElementById("kelilingResult").innerText = "Masukkan angka yang valid untuk semua sisi.";
  }
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("luasResult").innerText = "";
}

function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("kelilingResult").innerText = "";
}
