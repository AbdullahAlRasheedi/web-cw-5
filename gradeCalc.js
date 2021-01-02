let Quiz = document.getElementById("Quizes").value;
let mid = document.getElementById("Midterm").value;
let final = document.getElementById("FinalTest").value;
let ora = document.getElementById("Oral").value;
let total = (Quiz + mid + final + ora);
let grade = "null";

function submit(){
    if(total >=90){
        (grade = "A");
    }
    else if(total>=80 && total<90){
        (grade = "B");
    }
    else if(total>=70 && total<80){
        (grade = "C");
    }
    else if(total >= 60 && total < 70){
        (grade = "C");
    }
    else{
        (grade = "F")
    }
    

    // switch(all){
    //     case (all >=90): (grade = "A");break;
    //     case (all>=80 && all<90):(grade = "B");break;
    //     case(all>= 60 && all<70):(grade = "C");break;
    //     case(all>= 60 && all<70):(grade = "C");break;
    //     default:(grade = "f");
    // }
    console.log(total);
    document.getElementById("total").innerHTML = (grade);
}