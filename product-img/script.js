const productImg = document.getElementById('productImg');
const btn = document.getElementsByClassName('btn');

btn[0].onclick = function(){
    productImg.src = 'img/img1.png';

    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[1].onclick = function(){
    productImg.src = 'img/img1a.png';

    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[2].onclick = function(){
    productImg.src = 'img/img2.png';

    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[3].onclick = function(){
    productImg.src = 'img/img3.png';

    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}