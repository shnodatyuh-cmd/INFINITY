function getuserdetails() {
    let name = document.getElementById("uname").value;
    let pass = document.getElementById("upass").value;

    if (pass == "1122") {
        localStorage.setItem("play", name);
        window.location = "wb.html";
    } else {
        alert("error");
    }
}