/*const c = (el)=>document.querySelector(el);
const cs= (el)=>document.querySelectorAll(el);

emprestimoJSON.map((item)=>{
    let emprestimoItem = c('.models .emprestimo-item').cloneNode(true);

     emprestimoItem.querySelector('.empretimo-item--name').innerHTML = item.emprestimo;
     emprestimoItem.querySelector('.empretimo-item--juros').innerHTML = item.taxa;
    emprestimoItem.querySelector('button').addEventListner('click', (e)=>{
        e.preventDefault();

        c('.emprestimodetail').style.display = 'flex';

    });


}); */
 
function clicou() {
    alert("você clicou");
}
