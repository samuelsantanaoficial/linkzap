let tel;
let text;

function gerarLink() {
   tel = document.getElementById("tel").value
   text = document.getElementById("text").value
    
    
   let link = `https://wa.me/${tel}?text=${encodeURIComponent(text)}`;
    
   document.getElementById("link").value = link;
   console.log(link);
    
   document.getElementById("a").innerHTML += `<a href="${link}">${link}</a>`;
}