function Login() {
    var done=0;
    var usuario = document.getElementsByName('user')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('pass')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="/p/admin.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }