<<<<<<< HEAD
window.onload = function(){
    definir_local_storage(true);
}
function definir_local_storage(onload=false){
    if(!onload){
    if(localStorage.getItem('menu') == null){
        localStorage.setItem('menu', 'aberto');
    } else if(localStorage.getItem('menu') == 'aberto'){
        document.getElementById('sidebar').classList.remove('show');
        localStorage.setItem('menu', 'fechado');
    } else {
        document.getElementById('sidebar').classList.add('show');
        localStorage.setItem('menu', 'aberto');
    }  
    }else {
        if(localStorage.getItem('menu') == 'aberto'){
            document.getElementById('sidebar').classList.add('show');
        } else {
            document.getElementById('sidebar').classList.remove('show');
        }
    }
  }
=======
window.onload = function(){
    definir_local_storage(true);
}
function definir_local_storage(onload=false){
    if(!onload){
    if(localStorage.getItem('menu') == null){
        localStorage.setItem('menu', 'aberto');
    } else if(localStorage.getItem('menu') == 'aberto'){
        document.getElementById('sidebar').classList.remove('show');
        localStorage.setItem('menu', 'fechado');
    } else {
        document.getElementById('sidebar').classList.add('show');
        localStorage.setItem('menu', 'aberto');
    }  
    }else {
        if(localStorage.getItem('menu') == 'aberto'){
            document.getElementById('sidebar').classList.add('show');
        } else {
            document.getElementById('sidebar').classList.remove('show');
        }
    }
  }
>>>>>>> b272fadbaec194cf080f9ed0a7229b4b6d312778
