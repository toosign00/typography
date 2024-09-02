// page-03.html에 적용되는 js

// 슬라이더, 슬라이더 값, 셀렉트 박스, p 요소를 변수에 할당
let rangeSlider = document.querySelector('.PB-range-slider'); // 슬라이더
let rangeSliderValue = document.querySelector('.PB-range-slidervalue'); // 슬라이더 값
let selectInput = document.querySelector('.select-input'); // 셀렉트 박스
let rCP = document.querySelector('.r-c-p'); // p 요소

rangeSlider.oninput = () => { // 슬라이더 값 변경 시
    rangeSliderValue.innerHTML = rangeSlider.value + 'px'; // 슬라이더 값 표시
    rCP.style.fontSize = rangeSlider.value + 'px'; // p 요소에 슬라이더 값 적용
};

selectInput.onchange = () => { // 셀렉트 박스 값 변경 시
    switch (selectInput.value) { // 셀렉트 박스 값에 따라
        case 'THIN': // THIN이면
            rCP.style.fontWeight = '100'; // 폰트 무게를 100으로 설정
            break; 
        case 'EXTRALIGHT': // EXTRALIGHT이면
            rCP.style.fontWeight = '200'; // 폰트 무게를 200으로 설정
            break;
        case 'LIGHT': // LIGHT이면
            rCP.style.fontWeight = '300'; // 폰트 무게를 300으로 설정
            break;
        case 'REGULAR': // REGULAR이면
            rCP.style.fontWeight = '400'; // 폰트 무게를 400으로 설정
            break;
        case 'MEDIUM': // MEDIUM이면
            rCP.style.fontWeight = '500'; // 폰트 무게를 500으로 설정
            break;
        case 'SEMIBOLD': // SEMIBOLD이면
            rCP.style.fontWeight = '600'; // 폰트 무게를 600으로 설정
            break;
        case 'BOLD': // BOLD이면
            rCP.style.fontWeight = '700'; // 폰트 무게를 700으로 설정
            break;
        case 'EXTRABOLD': // EXTRABOLD이면
            rCP.style.fontWeight = '800'; // 폰트 무게를 800으로 설정
            break;
        case 'BLACK': // BLACK이면
            rCP.style.fontWeight = '900'; // 폰트 무게를 900으로 설정
            break;
    }
};
