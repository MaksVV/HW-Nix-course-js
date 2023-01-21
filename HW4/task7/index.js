button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// обидва обробники запустяться

function f() {
    alert(1);
}
  
button.addEventListener("click", f);
button.removeEventListener("click", f);