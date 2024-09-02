// index.html에 적용되는 js

// 문자열 타이핑 효과 이벤트
const phrases = [" 느껴져야 ", " 경험되어야 ", " 들려야 "]; // 변경할 문자열
let currentIndex = 0; // 현재 문자열 인덱스
let charIndex = 0; // 현재 문자열의 글자 인덱스
let isTyping = true; // 타이핑 중인지 여부
const typingSpeed = 150; // 타이핑 속도 (ms)
const deletingSpeed = 150; // 삭제 속도 (ms)

function changeText() { // 문자열 변경 함수
    const changeTextElement = document.getElementById("change-text"); // 문자열을 변경할 요소
    const currentPhrase = phrases[currentIndex]; // 현재 문자열

    if (isTyping) { // 타이핑 중이라면
        // 타이핑 효과
        if (charIndex < currentPhrase.length) { // 현재 문자열의 길이만큼 반복
            changeTextElement.textContent = currentPhrase.slice(0, charIndex + 1); // 한 글자씩 추가
            charIndex++; // 다음 글자로 이동
            setTimeout(changeText, typingSpeed); // 호출
        } else { // 타이핑 완료
            isTyping = false; // 타이핑 중이 아님
            setTimeout(changeText, 3000); // 3초 후에 삭제 시작
        }
    } else { // 타이핑 중이 아니라면
        // 삭제 효과 
        if (charIndex > 0) { // 0번째 글자까지 반복
            changeTextElement.textContent = currentPhrase.slice(0, charIndex - 1); // 한 글자씩 삭제
            charIndex--; // 이전 글자로 이동
            setTimeout(changeText, deletingSpeed); // 호출
        } else { // 삭제 완료
            isTyping = true; // 타이핑 중
            currentIndex = (currentIndex + 1) % phrases.length; // 다음 문자열로 이동
            charIndex = 0; // 글자 인덱스 초기화
            changeText(); // 다음 문자열 타이핑 시작
        }
    }
}

changeText(); // 함수 호출