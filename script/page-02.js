// page-02.html에 적용되는 js

// 자간 행간 조작 이벤트
// 자간 행간 버튼과 select 요소, p 요소를 변수에 할당 
let narrow = document.querySelector('#narrow'); // 자간 좁게
let appropriately = document.querySelector('#appropriately'); // 자간 적절
let wide = document.querySelector('#wide'); // 자간 넓게
let letterSpacing = document.querySelector('#letter-spacing'); // 자간
let leading = document.querySelector('#Leading'); // 행간

let p = document.querySelector('.r-c-p'); // p 요소

narrow.addEventListener('click', () => { // 좁게 버튼 클릭 시
    if (letterSpacing.selected) { // 자간이 선택되어 있으면
        p.style.letterSpacing = '-0.1em'; // 자간을 좁게 설정
    } else { // 행간이 선택되어 있으면
        p.style.lineHeight = '1'; // 행간을 좁게 설정
    }
});

appropriately.addEventListener('click', () => { // 적절 버튼 클릭 시
    if (letterSpacing.selected) { // 자간이 선택되어 있으면
        p.style.letterSpacing = '0em'; // 자간을 적절하게 설정
    } else { // 행간이 선택되어 있으면
        p.style.lineHeight = '1.6'; // 행간을 적절하게 설정
    }
});


wide.addEventListener('click', () => { // 넓게 버튼 클릭 시
    if (letterSpacing.selected) { // 자간이 선택되어 있으면
        p.style.letterSpacing = '0.1em'; // 자간을 넓게 설정
    } else { // 행간이 선택되어 있으면
        p.style.lineHeight = '3'; // 행간을 넓게 설정
    }
});

let selectInput = document.querySelector('.select-input'); // select 요소

selectInput.addEventListener('change', () => { // select 요소 값 변경 시
    p.style.letterSpacing = '0em'; // 자간 초기화
    p.style.lineHeight = '1.6'; // 행간 초기화

// / select 요소 값 변경 시 기본 값으로 설정
let appropriately = document.querySelector('#appropriately'); // 적절 버튼
appropriately.checked = true; // 적절 버튼 체크
});