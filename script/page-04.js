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
            setTimeout(() => {  // 0.01초 후에 실행
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

typingAreaKr.addEventListener('input', (e) => { // 한국어 타이핑 영역에 입력 이벤트 추가
    let value = e.target.value; // 입력된 값
    outputElementsKr.forEach(output => { // 한국어 출력 요소 반복
        output.textContent = value; // 출력 요소에 입력된 값 설정
    });
});

typingAreaEn.addEventListener('input', (e) => { // 영어 타이핑 영역에 입력 이벤트 추가
    let value = e.target.value; // 입력된 값
    outputElementsEn.forEach(output => { // 영어 출력 요소 반복
        output.textContent = value; // 출력 요소에 입력된 값 설정
    });
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});