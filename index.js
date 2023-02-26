const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

// Bài 1

function bai1() {
  var soNgayLam = document.getElementById("songaylam-bai1").value;
  var luong = soNgayLam * 100000;
  document.getElementById("result-bai1").innerHTML = `
  <h4>Lương nhận được là: ${VND.format(luong)}</h4>
  `;
}
// Bài 2
function bai2() {
  var soThuc1 = document.getElementById("sothuc1-bai2").value;
  var soThuc2 = document.getElementById("sothuc2-bai2").value;
  var soThuc3 = document.getElementById("sothuc3-bai2").value;
  var soThuc4 = document.getElementById("sothuc4-bai2").value;
  var soThuc5 = document.getElementById("sothuc5-bai2").value;

  var giaTriTB = (
    (parseInt(soThuc1) +
      parseInt(soThuc2) +
      parseInt(soThuc3) +
      parseInt(soThuc4) +
      parseInt(soThuc5)) /
    5
  ).toFixed(1);
  document.getElementById("result-bai2").innerHTML = `
    <h4>Giá trị trung bình là: ${giaTriTB}</h4>
    `;
}
// Bài 3
function bai3() {
  var soTien = document.getElementById("sotien-bai3").value;
  var tienDoiDuoc = soTien * 23500;
  document.getElementById("result-bai3").innerHTML = `
    <h4>Tiền đổi ra được: ${VND.format(tienDoiDuoc)}</h4>
    `;
}
// Bài 4
function bai4() {
  var chieuDai = document.getElementById("chieudai-bai4").value;
  var chieuRong = document.getElementById("chieurong-bai4").value;
  var dienTich = parseInt(chieuDai) * parseInt(chieuRong);
  var chuvi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
  document.getElementById("result-bai4").innerHTML = `
    <h4>Diện tích là: ${dienTich}</h4>
    <h4>Chu vi là: ${chuvi}</h4>
    `;
}
// Bài 5
function bai5() {
  var soThuc = document.getElementById("sothuc-bai5").value;
  var hangDV = soThuc % 10;
  var hangChuc = soThuc / 10;
  var sum = parseInt(hangDV) + parseInt(hangChuc);
  document.getElementById("result-bai5").innerHTML = `
    <h4>Tổng 2 ký số là: ${sum}</h4>
    `;
}
