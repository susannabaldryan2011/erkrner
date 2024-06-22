function start() {
    with(document){
        let a1 = String(getElementById("left_1").value)
        let a2 = String(getElementById("left_2").value)
        let a3 = String(getElementById("left_3").value)
        let a4 = String(getElementById("left_4").value)
        let a5 = String(getElementById("left_5").value)
        let a6 = String(getElementById("left_6").value)
        let b1 = String(getElementById("right_1").value)
        let b2 = String(getElementById("right_2").value)
        let b3 = String(getElementById("right_3").value)
        let b4 = String(getElementById("right_4").value)
        let result=0;
        let quality;

        if(a1=="Yerevan"){
            result+=2
            getElementById('left_1').style.backgroundColor="green"
            
        }else getElementById('left_1').style.backgroundColor="red"

        if(a2=="Rome"){
            result+=2
            getElementById('left_2').style.backgroundColor="green"
            
        }else getElementById('left_2').style.backgroundColor="red"
    
        if(a3=="Vashington"){
            result+=2
            getElementById('left_3').style.backgroundColor="green"
            
        }else getElementById('left_3').style.backgroundColor="red"
    
        if(a4=="Paris"){
            result+=2
            getElementById('left_4').style.backgroundColor="green"
            
        }else getElementById('left_4').style.backgroundColor="red"
    
        if(a5=="Berlin"){
            result+=2
            getElementById('left_5').style.backgroundColor="green"
            
        }else getElementById('left_5').style.backgroundColor="red"
    
        if(a6=="Madrid"){
            result+=2
            getElementById('left_6').style.backgroundColor="green"
            
        }else getElementById('left_6').style.backgroundColor="red"
    
        if(b1=="Mexico City"){
            result+=2
            getElementById('right_1').style.backgroundColor="green"
            
        }else getElementById('right_1').style.backgroundColor="red"
    
        if(b2=="Ottawa"){
            result+=2
            getElementById('right_2').style.backgroundColor="green"
            
        }else getElementById('right_2').style.backgroundColor="red"
    
        if(b3=="Beijing"){
            result+=2
            getElementById('right_3').style.backgroundColor="green"
            
        }else getElementById('right_3').style.backgroundColor="red"
    
        if(b4=="Seoul"){
            result+=2
            getElementById('right_4').style.backgroundColor="green"
            
        }else getElementById('right_4').style.backgroundColor="red"

        if (result < 6) {
            quality="anbavarar"
            getElementById("hashiv").style.backgroundColor="red"
            getElementById("patasxan").style.backgroundColor="red"
        }


        if (result > 6 && result<13) {
            quality="bavarar"
            getElementById("hashiv").style.backgroundColor="pink"
            getElementById("patasxan").style.backgroundColor="pink"
        }

        if (result >13 && result<=17) {
            quality="lav"
            getElementById("hashiv").style.backgroundColor="gold"
            getElementById("patasxan").style.backgroundColor="gold"
        }

        if (result >17) {
            quality="gerazanc"
            getElementById("hashiv").style.backgroundColor="green"
            getElementById("patasxan").style.backgroundColor="green"
        } 
        getElementById("hashiv").innerHTML=result;
        getElementById("patasxan").innerHTML=quality;
    }   
}

