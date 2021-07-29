const valorAmodificar = document.querySelector('.ContenedorInput');
const contenidoSelect = document.querySelector('.contenido-select');

const checkboxInputAll = document.querySelectorAll('.checkboxInput');

const inputValor = document.querySelector('#valorAmodificar');
let seleccionadosInput = 0;


//abrirse
valorAmodificar.addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()
   const opciones =  document.querySelector('#opciones');
    opciones.style.display="block";
})
//evitar que se propage el evento de hacer click en cualquier lado excepto en las opc
document.querySelector('#opciones').addEventListener('click',(e)=>{
    e.stopPropagation();
})

checkboxInputAll.forEach( inp => inp.addEventListener('click',(e)=>{
    
  
    let todos = false;

    if(e.target.checked===true){
        seleccionadosInput++;
    }
    else if(e.target.checked===false){
        seleccionadosInput--;
    }
    

    if(e.target.id==="Todos"){
        if(e.target.checked===true){
            checkboxInputAll.forEach(inputs=> inputs.checked=true)
            inputValor.placeholder="Todos";
            inputValor.classList.add('seleccionadoInputColor');
            todos=true;
            seleccionadosInput=checkboxInputAll.length-1;
           
        }else  if(e.target.checked===false){
            checkboxInputAll.forEach(inputs=> inputs.checked=false)
            inputValor.placeholder="Seleccioná el estado";
            inputValor.classList.remove('seleccionadoInputColor');
            todos=false;
            seleccionadosInput=0;
            
        }
    }

   

    if(seleccionadosInput=== (checkboxInputAll.length-1 ) || todos ===true ) {
        inputValor.placeholder="Todos";
        inputValor.classList.add('seleccionadoInputColor');
        checkboxInputAll[0].checked=true;
        inputValor.value=""
    }
    else if(seleccionadosInput!== (checkboxInputAll.length-1 ) && seleccionadosInput!== 0 && seleccionadosInput <= 3 )  {
        inputValor.placeholder=""
        checkboxInputAll.forEach(inp => inp.checked===true  ?  inputValor.placeholder+=inp.value+"," : "" )
        inputValor.classList.add('seleccionadoInputColor');
        checkboxInputAll[0].checked=false;
    }
    else if(seleccionadosInput!== (checkboxInputAll.length-1 ) && seleccionadosInput!== 0 && seleccionadosInput > 3)  {
        inputValor.placeholder=""
        inputValor.placeholder=seleccionadosInput+" Seleccionados";
        inputValor.classList.add('seleccionadoInputColor');
        checkboxInputAll[0].checked=false;
    }
    else if(seleccionadosInput=== 0 )  {
        inputValor.placeholder="Seleccioná el estado";
        inputValor.classList.remove('seleccionadoInputColor');
        checkboxInputAll[0].checked=false;
    }
   


}))


//cerrar input y escribir las opciones
window.addEventListener('click',(e)=>{
    const opciones =  document.querySelector('#opciones');
    opciones.style.display="none";
    let seleccionados = 0;
    checkboxInputAll.forEach(inp => inp.checked === true ?  seleccionados++ : null)

    if(seleccionados===0){
        inputValor.placeholder="Seleccioná el estado";
        inputValor.classList.remove('seleccionadoInputColor');
    }


})
