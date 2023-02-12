function tek(){
    var btn = document.getElementById('btn');
    var inp = document.getElementById('inp');
    
    if(inp.value.length >= 13)
    {
        btn.classList.remove("disabled");
    }
}
function yoz(){
   var inp = document.getElementById('inp');
   window.localStorage.setItem('inp', inp.value)
}

function changedImg(){
    var imgOne2 = document.getElementById('imgOne2');
    var imgOne1 = document.getElementById('imgOne1');
    var imgOne = document.getElementById('imgOne');
    var imgBasic = document.getElementById('imgBasic');
    imgOne.style.border = "1px solid orange";
    imgOne2.style.border = "none";
    imgOne1.style.border = "none";
    imgOne.style.borderRadius = "3px";
    imgBasic.setAttribute('src', "https://back.tinfis.uz/public/uploads/all/2022/09/JKqh7Cjn5GHauf2Ic773RpDFw4tBLA7pZ4INdKH0.jpg")
}

function minuss(){
    var span1 = document.getElementById('span1');
    if(span1.innerText*1 >= 1)
    {
    spanInner = span1.innerText*1; 
    spanInner -= 1;
    span1.innerHTML = spanInner;
    }
    // console.log(spanInner);
}
function pluss(){
    var span1 = document.getElementById('span1');
   
    spanInner = span1.innerText*1; 
    spanInner += 1;
    span1.innerHTML = spanInner;
    
    // console.log(spanInner);
}

// Korzina 
function korzina(){ 
   var  kor = localStorage.getItem('kor')
   createElement.innerHTML

}



function changedImg1(){
    var imgOne1 = document.getElementById('imgOne1');
    var imgOne2 = document.getElementById('imgOne2');
    var imgOne = document.getElementById('imgOne');

    imgOne1.style.border = "1px solid orange";
    imgOne.style.border = "none";
    imgOne2.style.border = "none";
    imgOne1.style.borderRadius = "3px";
    imgBasic.setAttribute('src', "https://back.tinfis.uz/public/uploads/all/2022/09/9xju85EJO5pQxXpB8yXwP9j6twqFsV43cbcXjDDo.jpg")

}

function changedImg2(){
    var imgOne = document.getElementById('imgOne');
    var imgOne1 = document.getElementById('imgOne1');
    var imgOne2 = document.getElementById('imgOne2');
    var imgBasic = document.getElementById('imgBasic');
    imgOne2.style.border = "1px solid orange";
    imgOne2.style.borderRadius = "3px";
    imgOne.style.border = "none";
    imgOne1.style.border = "none";

    imgBasic.setAttribute('src', "https://back.tinfis.uz/public/uploads/all/2022/09/zLl6IYBc39gyp3ckl8QrXpyVkzzPnaixIHrdx4l9.jpg")

}


function select1(){
    var icon6 = document.getElementById('icon6');
    var icon7 = document.getElementById('icon7');
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var divSpinner = document.getElementById('divSpinner');

    divSpinner.style.display = "inline-block";
    img1.setAttribute('src', "https://tinfis.uz/img/man_yellow.png")
    icon6.style.border = "1px solid #ff8400";
    icon6.style.color = "#ff8400";
    
    if(img2.getAttribute('src') == "https://tinfis.uz/img/female_yellow.png")
    {
        img2.setAttribute('src', "https://tinfis.uz/img/female.png")
        icon7.style.color = "grey";
        icon7.style.borderColor = "grey";
    }

}

setInterval(()=>{
    var divSpinner = document.getElementById('divSpinner');
    divSpinner.style.display = "none";
}, 2000);

function select2(){
    var divSpinner = document.getElementById('divSpinner');

    divSpinner.style.display = "inline-block";
    var icon5 = document.getElementById('icon7');
    var icon6 = document.getElementById('icon6');
    var img1 = document.getElementById('img2');
    img1.setAttribute('src', "https://tinfis.uz/img/female_yellow.png")
    icon5.style.border = "1px solid #ff8400";
    icon5.style.color = "#ff8400";
    var img2 = document.getElementById('img1');
    if(img2.getAttribute('src') == "https://tinfis.uz/img/man_yellow.png")
    {
        img2.setAttribute('src', "https://tinfis.uz/img/man.png")
        icon6.style.color = "grey";
        icon6.style.borderColor = "grey";
    }

}







function yoz1(){
    var inp1 = document.getElementById('inp1');
    var inp2 = document.getElementById('inp2');
    var inp3 = document.getElementById('inp3');
    var inp4 = document.getElementById('inp4');
    var h1 = document.getElementById('h1');

    if(inp1.value == "1" && inp2.value == "1" && inp3.value == "1" && inp4.value == "1" )
    {
        window.open('userDashboard.html', "_self")
    }
    else{
       h1.innerText = "Code hato!";
       h1.style.color = "crimson";
       h1.style.fontSize = "14pt";
    }

}
// input1

function yoz11(){
    var vp1 = document.getElementById('vp1')
    var chil1 = document.getElementById('chil1')
    var div25 = document.createElement('div')
    var h1 = document.createElement('h1')
    var icon1 = document.getElementById('icon1')
    var tugma1 = document.getElementsByClassName('tugma1')


    div25.style.width ='30px'
    div25.style.height = '30px'
    div25.style.background = 'pink'
    div25.style.borderRadius ='50%'
    div25.style.display = 'inline-flex'
    div25.style.justifyContent = 'center'
    div25.style.alignItems = 'center'
    h1.style.fontSize = '12pt'

    h1.innerText = 'x'
    
    div25.appendChild(h1)
    
    

    
    console.log(icon1.classList[2])
    if (icon1.classList[2]=='fa-pencil'){
        icon1.classList.remove(icon1.classList[2])
        icon1.classList.add('fa-check')
        vp1.removeAttribute('readonly' )
        chil1.appendChild(div25)

    } 
    else if (icon1.classList[2] == 'fa-check'){
        icon1.classList.remove(icon1.classList[2])
        icon1.classList.add('fa-pencil')
        vp1.setAttribute('readonly', null)
        chil1.remove(div25)
        tugma1.setAttribute("id", "liveToastBtn")
        console.log(tugma1)
    }

    
    


}
// input 2

function yoz12(){
    var vp11 = document.getElementById('vp11')
    var child2 = document.getElementById('child2')
    var div26 = document.createElement('div26')
    var h1 = document.createElement('h1')
    var icon2 = document.getElementById('icon2')
    var tugma2 = document.getElementsByClassName('tugma2')
    
    div26.style.width = '20px'
    div26.style.height ='20px'
    div26.style.background = 'pink'
    div26.style.borderRadius ='50%'
    div26.style.display ='inline-flex'
    div26.style.justifyContent = 'center'
    div26.style.alignItems ='center'
    h1.style.fontSize = '12pt'

    h1.innerText = 'x'
    div26.appendChild(h1)
    
    
    if(icon2.classList[2]=='fa-pencil'){
        icon2.classList.remove(icon2.classList[2])
        icon2.classList.add('fa-check')
        vp11.removeAttribute('readonly')
        child2.appendChild(div26)
        
    }
    else if(icon2.classList[2] == 'fa-check'){
        icon2.classList.remove(icon2.classList[2])
        icon2.classList.add('fa-pencil')
        vp11.setAttribute('readonly', null)
        child2.remove(div26)
        tugma2.setAttribute('id', 'liveToastBtn1')
    }


}
// input 3

function yoz13(){
    var vp12 = document.getElementById('vp12')
    var child3 = document.getElementById('child3')
    var div27 = document.createElement('div27')
    var h1 = document.createElement('h1')
    var icon3 = document.getElementById('icon3')
    var tugma3 = document.getElementsByClassName('tugma3')
    
    div27.style.width = '20px'
    div27.style.height ='20px'
    div27.style.background = 'pink'
    div27.style.borderRadius ='50%'
    div27.style.display ='inline-flex'
    div27.style.justifyContent = 'center'
    div27.style.alignItems ='center'
    h1.style.fontSize = '12pt'

    h1.innerText = 'x'
    div27.appendChild(h1)
    
    
    if(icon3.classList[2]=='fa-pencil'){
        icon3.classList.remove(icon3.classList[2])
        icon3.classList.add('fa-check')
        vp12.removeAttribute('readonly')
        child3.appendChild(div27)
        
    }
    else if(icon3.classList[2] == 'fa-check'){
        icon3.classList.remove(icon3.classList[2])
        icon3.classList.add('fa-pencil')
        vp12.setAttribute('readonly', null)
        child3.remove(div27)
        tugma3.setAttribute('id', 'liveToastBtn1')
    }


}


// input 4 
function yoz14(){
    var vp2 = document.getElementById('vp2')
    var child4 = document.getElementById('child4')
    var div28 = document.createElement('div28')
    var h1 = document.createElement('h1')
    var icon4 = document.getElementById('icon4')
    var tugma4 = document.getElementsByClassName('tugma4')
    
    div28.style.width = '20px'
    div28.style.height ='20px'
    div28.style.background = 'pink'
    div28.style.borderRadius ='50%'
    div28.style.display ='inline-flex'
    div28.style.justifyContent = 'center'
    div28.style.alignItems ='center'
    h1.style.fontSize = '12pt'

    h1.innerText = 'x'
    div28.appendChild(h1)
    
    
    if(icon4.classList[2]=='fa-pencil'){
        icon4.classList.remove(icon4.classList[2])
        icon4.classList.add('fa-check')
        vp2.removeAttribute('readonly')
        child4.appendChild(div28)
        
    }
    else if(icon4.classList[2] == 'fa-check'){
        icon4.classList.remove(icon4.classList[2])
        icon4.classList.add('fa-pencil')
        vp2.setAttribute('readonly', null)
        child4.remove(div28)
        tugma4.setAttribute('id', 'liveToastBtn2')
    }


}


// input 5
function yoz15(){
    var vp21 = document.getElementById('vp21')
    var child5 = document.getElementById('child5')
    var div29 = document.createElement('div29')
    var h1 = document.createElement('h1')
    var icon5 = document.getElementById('icon5')
    var tugma5 = document.getElementsByClassName('tugma5')
    
    div29.style.width = '20px'
    div29.style.height ='20px'
    div29.style.background = 'pink'
    div29.style.borderRadius ='50%'
    div29.style.display ='inline-flex'
    div29.style.justifyContent = 'center'
    div29.style.alignItems ='center'
    h1.style.fontSize = '12pt'

    h1.innerText = 'x'
    div29.appendChild(h1)
    
    
    if(icon5.classList[2]=='fa-pencil'){
        icon5.classList.remove(icon5.classList[2])
        icon5.classList.add('fa-check')
        vp21.removeAttribute('readonly')
        child5.appendChild(div29)
        
    }
    else if(icon5.classList[2] == 'fa-check'){
        icon5.classList.remove(icon5.classList[2])
        icon5.classList.add('fa-pencil')
        vp21.setAttribute('readonly', null)
        child5.remove(div29)
        tugma5.setAttribute('id', 'liveToastBtn2')
    }


}

