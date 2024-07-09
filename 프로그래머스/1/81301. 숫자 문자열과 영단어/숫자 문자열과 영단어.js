function solution(s) {
    var answer = '';
    
    while(s.length!=0) {
        //첫 문자가 숫자인 경우 = answer에 문자열 추가 
        if(isNaN(s.substr(0,1))) {
            switch (s.charAt(0)) {
            case 'o' :
                answer += '1';
                s = s.slice(3);
                break;
            case 't' :
                if (s.substr(1,1)==='w') {
                    answer += '2';
                    s = s.slice(3);
                } else {
                   answer += '3';
                    s = s.slice(5);
                }
                break;
            case 'f' :
                if (s.substr(1,1)==='o') {
                    answer += '4';
                    s = s.slice(4);
                } else {
                   answer += '5';
                    s = s.slice(4);
                }
                break;
            case 's' :
                if (s.substr(1,1)==='i') {
                    answer += '6';
                    s = s.slice(3);
                } else {
                   answer += '7';
                    s = s.slice(5);
                }
                break;
            case 'e' :
                    answer += '8';
                    s = s.slice(5);
                break;
            case 'n' :
                    answer += '9';
                    s = s.slice(4);
                break;
            case 'z' :
                    answer += '0';
                    s = s.slice(4);
                break;
        }
        }
         else {
            //숫자일 경우
            answer += s.substr(0,1);
            s = s.slice(1);
        }
        }
     return Number(answer);
}