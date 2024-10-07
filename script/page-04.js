// page-04.html에 적용되는 js

// 한영 섹션 전환 이벤트
let kr = document.querySelector('.kr'); // 한국어 요소
let en = document.querySelector('.en'); // 영어 요소
let krBtns = document.querySelectorAll('.kr-btn'); // 한국어 버튼
let enBtns = document.querySelectorAll('.en-btn'); // 영어 버튼

krBtns.forEach(btn => { // 한국어 버튼에 이벤트 추가
    btn.addEventListener('click', () => { // 클릭 이벤트
        en.classList.remove('active'); // 영어 요소의 active 클래스 제거
        setTimeout(() => { // 0.5초 후에 실행
            en.style.display = 'none'; // 영어 요소 숨김
            kr.style.display = 'flex'; // 한국어 요소 표시
            setTimeout(() => { // 0.01초 후에 실행
                kr.classList.add('active'); // 한국어 요소에 active 클래스 추가
                cards.forEach(card => { // 카드 요소 반복
                    card.classList.remove('flipped'); // flipped 클래스 제거
                });
            }, 10);
        }, 500);
    });
});

enBtns.forEach(btn => { // 영어 버튼에 이벤트 추가
    btn.addEventListener('click', () => { // 클릭 이벤트
        kr.classList.remove('active'); // 한국어 요소의 active 클래스 제거
        setTimeout(() => { // 0.5초 후에 실행
            kr.style.display = 'none'; // 한국어 요소 숨김
            en.style.display = 'flex'; // 영어 요소 표시
            setTimeout(() => { // 0.01초 후에 실행
                en.classList.add('active'); // 영어 요소에 active 클래스 추가
                cards.forEach(card => { // 카드 요소 반복
                    card.classList.remove('flipped'); // flipped 클래스 제거
                });
            }, 10);
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => { // DOM이 로드되면
    kr.classList.add('active'); // 한국어 요소에 active 클래스 추가
    en.style.display = 'none'; // 영어 요소 숨김
});


// 타이핑 이벤트
let typingAreaKr = document.querySelector('.typing-area-kr'); // 한국어 타이핑 영역
let outputElementsKr = document.querySelectorAll('.output-kr'); // 한국어 출력 요소
let typingAreaEn = document.querySelector('.typing-area-en'); // 영어 타이핑 영역
let outputElementsEn = document.querySelectorAll('.output-en'); // 영어 출력 요소
let alertShown = false; // 경고창이 이미 표시되었는지 여부를 추적

typingAreaKr.addEventListener('input', (e) => {
    let value = e.target.value; // 입력된 값
    outputElementsKr.forEach(output => {
        output.textContent = value; // 출력 요소에 입력된 값 설정
    });

    // 입력된 값이 영어라면 경고창 출력
    if (value.match(/[a-zA-Z]/)) {
        if (!alertShown) { // 경고창이 이미 표시되지 않은 경우에만
            alert('한국어를 입력해주세요.');
            alertShown = true; // 경고창이 표시되었음을 기록
        }

        // 입력된 값에서 영어 문자만 제거
        e.target.value = value.replace(/[a-zA-Z]/g, '');
        outputElementsKr.forEach(output => {
            output.textContent = e.target.value; // 영어가 제거된 값을 출력 요소에 설정
        });
    } else {
        alertShown = false; // 입력된 값이 한국어일 경우 경고창 초기화
    }
});

typingAreaEn.addEventListener('input', (e) => { // 영어 타이핑 영역에 입력 이벤트 추가
    let value = e.target.value; // 입력된 값
    outputElementsEn.forEach(output => { // 영어 출력 요소 반복
        output.textContent = value; // 출력 요소에 입력된 값 설정
    });

    // 입력된 값이 한국어라면 경고창 출력
    if (value.match(/[ㄱ-ㅎ가-힣]/)) {
        if (!alertShown) { // 경고창이 이미 표시되지 않은 경우에만
            alert('영어를 입력해주세요.');
            alertShown = true; // 경고창이 표시되었음을 기록
        }

        // 입력된 값에서 한국어 문자만 제거
        e.target.value = value.replace(/[ㄱ-ㅎ가-힣]/g, '');
        outputElementsEn.forEach(output => {
            output.textContent = e.target.value; // 한국어가 제거된 값을 출력 요소에 설정
        });
    } else {
        alertShown = false; // 입력된 값이 영어일 경우 경고창 초기화
    }
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});