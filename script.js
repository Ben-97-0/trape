document.getElementById("calc-butt").addEventListener("click", clickedbtn);

function clickedbtn() {
  inputA = Number(document.getElementById("A").value);
  inputB = Number(document.getElementById("B").value);
  inputH = Number(document.getElementById("H").value);
  let input1 = document.getElementById("measurment");
  let choice = input1.value;

  inputAll = ((inputA + inputB) / 2) * inputH;
  inputAll = inputAll.toFixed(2);
  inputAll = inputAll + choice;

  document.getElementById("output1").style.border = "2px solid green";
  document.getElementById("output1").innerHTML = inputAll;
  document.getElementById("A").value = "";
  document.getElementById("B").value = "";
  document.getElementById("H").value = "";
  document.getElementById("checkMark").src = "IMG/check.png";
}
