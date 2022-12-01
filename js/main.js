// function filtros(a){
//     var autos= document.getElementsByClassName("autos");
//     for(let i=0;i<autos.length;i++){
//         autos[i].style.display="none";
//     }

//     switch (a){
//         case 'ford':
//             ford=document.getElementsByClassName('ford');
//         for(i=0;i<ford.length;i++){
//             ford[i].style.display="block";
//         }
//         break;
//         default:
//             for(let i=0;i<autos.length;i++){
//                 autos[i].style.display="none";
//             }
//         break;
//     }
//     console.log(autos);
//     console.log(a);
// }

function filtros(a) {
    var b = document.getElementsByClassName('autos')
    for (i = 0; i < b.length; i++) {
      b[i].style.display = "none"
    }
    console.log(a, b);
  
    switch (a) {
      case 'AUDI':
        var audi = document.getElementsByClassName('AUDI')
        for (i = 0; i < audi.length; i++) {
          audi[i].style.display = "block"
        }
        break;
  
      case 'BMW':
        var BMW = document.getElementsByClassName('BMW')
        for (i = 0; i < BMW.length; i++) {
          BMW[i].style.display = "block"
        }
        break;
  
      case 'CHEVROLET':
        var CHEVROLET = document.getElementsByClassName('CHEVROLET')
        for (i = 0; i < CHEVROLET.length; i++) {
          CHEVROLET[i].style.display = "block"
        }
        break;
  
      case 'FERRARI':
        var FERRARI = document.getElementsByClassName('FERRARI')
        for (i = 0; i < FERRARI.length; i++) {
          FERRARI[i].style.display = "block"
        }
        break;
  
      case 'LAMBORGHINI':
        var LAMBORGHINI = document.getElementsByClassName('LAMBORGHINI')
        for (i = 0; i < LAMBORGHINI.length; i++) {
          LAMBORGHINI[i].style.display = "block"
        }
        break;
  
      case 'FORD':
        var FORD = document.getElementsByClassName('FORD')
        for (i = 0; i < FORD.length; i++) {
          FORD[i].style.display = "block"
        }
        break;
  
      default:
        for (i = 0; i < b.length; i++) {
          b[i].style.display = "block"
        }
        break;
    }
  
  }
