function solution(s) {
    var answer = 0;
    
    while(s.length!=0) {
        //첫 문자가 숫자인 경우 = answer에 문자열 추가 
        var firstS  = s.substr(0,1);
        if(isNaN(s.substr(0,1))) {
            switch (s.charAt(0)) {
            case 'o' :
                answer += '1';
                s.slice(3);
                break;
            case 't' :
                if (s.substr(1,1)==='w') {
                    answer += '2';
                    s.slice(3);
                } else {
                   answer += '3';
                    s.slice(5);
                }
                break;
            case 'f' :
                if (s.substr(1,1)==='o') {
                    answer += '4';
                    s.slice(4);
                } else {
                   answer += '5';
                    s.slice(4);
                }
                break;
            case 's' :
                if (s.substr(1,1)==='i') {
                    answer += '6';
                    s.slice(3);
                } else {
                   answer += '7';
                    s.slice(5);
                }
                break;
            case 'e' :
                    answer += '8';
                    s.slice(5);
                break;
            case 'n' :
                    answer += '9';
                    s.slice(4);
                break;
            case 'z' :
                    answer += '0';
                    s.slice(4);
                break;
        }
        }
         else {
            //숫자일 경우
            answer += firstS;
            s.slice(1);
        }
        }
     return answer;
}