let al = new XMLHttpRequest();
al.onreadystatechange = function(){
    if (this.readyState == 4 && this.status ==200) {
    let newObj= JSON.parse(this.responseText);
    document.getElementById('einstein-name').innerHTML = newObj.name;
    document.getElementById('einstein-bday').innerHTML = newObj.birthday;
    
    }
};

al.open("GET", "einstein.json", true);
al.send();

function loadBio() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState = 4 && this.status == 200) {
            let newObj = JSON.parse(this.responseText);
            document.getElementById('einstein-bio').innerHTML = newObj.bio;
        }
    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
}





