 // 게임에 필요한 데이터를 모아놓을 객체를 미리 선언해 놓았습니다.
        // 해당 객체는 처음에는 건드릴 필요가 없지만, 프로그램이 진행되면서
        // 프로퍼티의 값은 변경될 가능성이 있습니다.
        // 맨 아래에 작성된 즉시 실행 함수에 의해서
        // 브라우저가 실행 되자마자 프로그램이 동작하게 됩니다.
        // 첫번째 alert()이 진행되고 나서 무한 루프가 동작합니다.
        // 무한 루프의 조건식은 inputNumber 함수의 리턴값입니다. 아마 논리값이겠죠?
        // inputNumber가 논리를 판단하는 것은 아닙니다. return문을 보시면 checkNumber가 return 하는 값을
        // 그대로 리턴하는 것을 보여주고 있습니다.
        // checkNumber에서 정답, 오답 여부 및 up/down 여부를 판단해서 논리값을 주면 되겠습니다.
        // 나머지 함수들은 타이밍 맞게 호출해 주시면 됩니다.
        // 각 함수의 이름과 해야 할 일을 작성해 놓았습니다.
        // 요구사항에 맞게 코드를 작성해 보세요.
        // 필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값
        // 최대범위를 저장할 변수
        const MAX = 100;
        // 게임에 필요한 데이터를 모아놓을 객체
        const gameData = {
            secret_num: Math.floor(Math.random() * MAX) + 1,
            count: 0,
            countdown: 6,
            min: 1,
            max: MAX
        };
        ////////////////////////함수 정의부///////////////////////////////
        //사용자의 입력을 수행하는 함수
        function inputNumber() {
            const {
                min,  //min : m 으로 변수로 변경해서 사용 가능
                max
            } = gameData;
            //객체에서 min과 max의 값을 뽑아서 메세지를 완성.
            //객체 디스트럭쳐링으로 뽑아 보세요~
            //사용자의 입력값을 객체에 추가
            //입력값 검증 함수를 호출.
            const guess = +prompt(`${min}부터 ${max} 중 숫자를 입력하세요`);

            return checkNumber(guess);
        }
        //사용자의 입력값을 검증하는 함수
        function checkNumber(n) {
            const {
                secret_num
            } = gameData;

            if (secret_num === n) {
                alert(`정답입니다`);
                checkCountDown(countdown);
                return true;
                //프로그램 종료
            } else {
                if (secret_num < n) {
                    alert(`DOWN!`);
                    gameData.max = n-1;
                } else {        //(secret_num > n) 
                    alert(`UP!`);
                    gameData.min = n+1;
                }
                return false;
                //게임 계속 진행
            }

        }
        //사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수
        // function checkCountDown(countdown) {
        //     if (gameData.count < 7) {
        //         alert(`이겼다!`);
        //     } else {
        //         alert('졌다!');
        //     }
        // }

        function checkCountDown(countdown) {
            if(countdown > 0) {
                alert(`이겼다!`);
            } else {
                alert('졌다!');
            }
        }

        //사용자의 남은 카운트다운 횟수를 알려주는 함수
        function alertCountDown(countdown) {
                 alert(`기회 ${gameData.countdown}번 남았습니다.`)           
        }
        //핵심 실행부 (main의 역할을 하는 함수)
        //즉시 실행 함수로 선언하여 따로 호출하지 않아도
        //바로 실행될 수 있도록 작성.
        (function () {
            alert('[UP & DOWN 게임 - 1 ~ 100 사이의 숫자를 맞춰보세요!]');

            //입력을 담당하는 함수를 호출할 예정.
            while (!inputNumber()) {
                gameData.count++;
                gameData.countdown--;
                alertCountDown();
                //true가 리턴되면 프로그램 종료.
                //false가 리턴되면 게임 계속 진행.
            }
        }());