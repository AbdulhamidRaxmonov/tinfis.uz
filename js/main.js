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
}
    
    // console.log(spanInner);   

// Korzina 
function korzina(){ 
    var span = document.getElementById('span1');
    var btnkar = document.getElementById('btnkar');
    
    btnkar.classList.remove('bg-warning');
    btnkar.style.backgroundColor = "red";
    btnkar.innerText ="В корзине";
    var  kor = localStorage.getItem('kor')
    btnkar
    var product = {
    name:"Cмеситель для ванны E.C.A. NOVITA",
    color:"хром- серебристый",
    price:"1 582 700",
    button:"-",
    p:"1",
    button1:"+",
    count: span.innerText,
    img:'https://back.tinfis.uz/public/uploads/all/2023/02/LHAEUvYNPaybnLj3dnC3EG0rXUFFRAt6mAv0H6oi.jpg'
    
    
   }
   var json = JSON.stringify(product)
   localStorage.setItem('product', json)
   


}
function addtocard(){
    var olish = localStorage.getItem('product')
    var divCanvas = document.getElementById('divCanvas');
    var canvasItem = document.createElement('div')
    var infoItem = document.createElement('div')
    var img = document.createElement('img')
    var h1 = document.createElement('h1')
    var span = document.createElement('span')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    var imgdiv = document.createElement('div')
    var countDiv = document.createElement('div');
    var counta = document.createElement('a');
    var countspan = document.createElement('span');
    var counta1 = document.createElement('a');
    var infoObj = JSON.parse(olish)
    var icona = document.createElement('a');
    var iconi = document.createElement('i');
    var check = document.createElement('button')
    var check1 = document.createElement('span')

    
    iconi.classList.add('fa-solid');
    iconi.classList.add('fa-trash');

    icona.appendChild(iconi);
        counta.addEventListener('click', e=>{
            if(countspan.innerText*1 > 0)
              {
                var s = countspan.innerText*1;
                s-=1;
                countspan.innerText = s;
              }
        });
    
    counta1.addEventListener('click', e=>{
        var s = countspan.innerText*1;
        s+=1;
        countspan.innerText = s;
    });

    counta.innerText  = "-";
    countspan.innerText = "1";
    counta1.innerText  = "+";
    counta.style.fontSize ="18pt";
    counta.style.fontWeight ="bold";
    counta1.style.fontSize ="18pt";
    counta1.style.fontWeight ="bold";
    countspan.style.fontSize ="18pt";
    countspan.style.fontWeight ="bold";

    countDiv.style.width = "100px";
    countDiv.style.height = "30px";
    countDiv.style.border = "1px solid black";
    countDiv.style.backgroundColor = "white";
    countDiv.style.borderRadius = "5px";
    countDiv.style.display = "inline-flex";
    countDiv.style.justifyContent = "space-around";

    
    countDiv.appendChild(counta);
    countDiv.appendChild(countspan);
    countDiv.appendChild(counta1);

    icona.style.float = "right";
    icona.style.marginTop = "5px";
    icona.style.marginRight = "5px";
    
    
    icona.addEventListener('click', e=>{
        divCanvas.removeChild(canvasItem);
    })




    divCanvas.style.backgroundColor = "grey";
    canvasItem.style.width = '100%';
    canvasItem.style.height = '25vh';
    canvasItem.style.display ='inline-flex';
    canvasItem.style.alignItems = "center"
    imgdiv.style.width = "30%";
    imgdiv.style.height = "22vh";
    // imgdiv.style.backgroundColor = "orange";
    imgdiv.style.display ='inline-flex';
    imgdiv.style.alignItems = "center"
    infoItem.style.width = "70%";
    infoItem.style.height = "22vh";
    // infoItem.style.backgroundColor = "crimson";
    divCanvas.style.display = 'flex'
    divCanvas.style.flexDirection = 'column';
    divCanvas.style.justifyContent= 'space-between'
    check.style.width = '100%';
    check.style.height = '60px'
    check.style.borderRadius = '15px'
    

    
    canvasItem.style.backgroundColor = 'white';
    canvasItem.style.borderRadius = "5px";
    // canvasItem1.style.display = 'flex'
    // canvasItem1.style.flexDirection = 'column'
    // canvasItem1.style.justifyContent = 'center'
    // canvasItem1.style.float = 'right' 
   
    h1.style.fontSize = '25px'
    h1.style.fontFamily ='bold'
    img.style.width = '100px'
    img.style.float = 'left'
    h1.innerText = infoObj.name
    span.innerHTML = "color:" + infoObj.color + "<br>"
    span1.innerHTML = "price:" +  infoObj.price + " sum" 
    span2.innerHTML = "<br>" + "count:" +  infoObj.count + "<br>"
    
    check1.innerHTML = "oформить заказ"
    // button.innerText = infoObj.button

    img.setAttribute('src', infoObj.img)
    imgdiv.appendChild(img);
    infoItem.appendChild(h1);
    infoItem.appendChild(span);
    infoItem.appendChild(span1);
    infoItem.appendChild(span2);
    infoItem.appendChild(countDiv);
    infoItem.appendChild(icona);


    canvasItem.appendChild(imgdiv);
    canvasItem.appendChild(infoItem);

    divCanvas.appendChild(canvasItem);
    divCanvas.appendChild(check);
    check.appendChild(check1);
    
    check1.addEventListener('click', e=>{
        window.open('checkout.html', '_self');
    })

    
    
   
    

 
}

function mapclick(){
    var InputEmail1 = document.getElementById('InputEmail1');
    var InputPassword1 = document.getElementById('InputPassword1');
    var InputPassword2 = document.getElementById('InputPassword2');
    

    var objMap = {
        inp1: InputEmail1.value,
        inp2: InputPassword1.value,
        inp3: InputPassword2.value,
    }

    var objJson = JSON.stringify(objMap);
    localStorage.setItem('mapObj', objJson);

    window.open('checkout.html', '_self');
    


}
function cardNumber(){
    var cardInp = document.getElementById('cardInp')
    var cardInp1 = document.getElementById('cardInp1')

    var cardMap1 = {
        inp1: cardInp.value,
        inp2: cardInp1.value,
        
    }

    var objJson = JSON.stringify(cardMap1);
    localStorage.setItem('cardObj', objJson);

    window.open('checkout.html', '_self');
}
function locList(){
    var span1 = document.getElementById('spann1')
    var spann12 = document.getElementById('spann12')
    var spann13 = document.getElementById('spann13')
    var btncard = document.getElementById('btncard');
    var mapObj = localStorage.getItem('mapObj');
    var parseJson = JSON.parse(mapObj);
    var imgpro = document.getElementById('imgpro')
    var proh5 = document.getElementById('proh5')
    var prosp = document.getElementById('prosp')
    var prosp1 = document.getElementById('prosp1')
  
  

    var cardObj = localStorage.getItem('cardObj');
    var cardJson = JSON.parse(cardObj);
    btncard.innerText = cardJson.inp1; 

    span1.innerText = parseJson.inp1; 
    spann12.innerText = parseJson.inp2; 
    spann13.innerText = parseJson.inp3; 

    var product = localStorage.getItem('product');
    var proo = JSON.parse(product);
    imgpro.setAttribute('src', proo.img);
    proh5.innerText = proo.name;
    prosp.innerText = proo.color;
    prosp1.innerText = proo.count;
    console.log(proo)




}
// DASHBORD.HTML
function finesh(){
    var productName = document.getElementById('productName')
    var adress = document.getElementById('adress')
    var phone = document.getElementById('phone')
    var cardName = document.getElementById('cardName')
    var color1 = document.getElementById('color1')
    var ism = document. getElementById('ism')
    
    var cardObj = localStorage.getItem('cardObj');
    var parseJson = JSON.parse(cardObj);
    cardName.innerText = parseJson.inp1;

    var product = localStorage.getItem('product');
    var perseJson1 = JSON.parse(product);
    productName.innerText = perseJson1.name;
    color1.innerText = perseJson1.color

    var mapObj = localStorage.getItem('mapObj');
    var per = JSON.parse(mapObj)
    phone.innerText = per.inp3;
    adress.innerText = per.inp1;
    ism.innerText = per.inp2;


}




function orderProduct(){
   window.open('dashboard.html', '_self'); 
}
function kaa1(){
    var uzgar = document.getElementById('uzgar');
    var uzgar1 = document.getElementById('uzgar1');
    uzgar1.style.border = 'none';
    uzgar.style.border = '2px solid orange';
}

function kaa2(){
    var uzgar1 = document.getElementById('uzgar1');
    var uzgar = document.getElementById('uzgar');
    uzgar1.style.border = '2px solid orange';
    uzgar.style.border = 'none';
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

