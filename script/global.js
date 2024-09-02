// 모든 html 파일에 공통으로 적용되는 js

// 토글 버튼을 클릭하면 다크모드가 적용되고, 세션 스토리지에 다크모드 설정을 저장하는 이벤트
document.addEventListener('DOMContentLoaded', () => { // DOM이 로드되면 실행되는 함수
    const darkModeToggle = document.getElementById('darkModeToggle'); // 토글 버튼 요소
    const backgroundVideo = document.querySelector('.background-video'); // 배경 비디오 요소

    // 세션 스토리지에서 다크 모드 설정을 불러와 적용하는 함수
    const applyInitialTheme = () => { // 초기 테마 적용 함수
        const isDarkMode = sessionStorage.getItem('darkMode') === 'true'; 
        document.body.classList.toggle('dark-mode', isDarkMode);
        darkModeToggle.checked = isDarkMode;
        if (backgroundVideo) {
            setBackgroundVideo(isDarkMode); // 비디오 소스 설정 함수 호출
        }
    };

    // 다크 모드 상태를 토글하고 세션 스토리지에 저장하는 함수
    const toggleDarkMode = () => { // 다크 모드 토글 함수
        const isDarkMode = document.body.classList.toggle('dark-mode'); 
        sessionStorage.setItem('darkMode', isDarkMode);
        if (backgroundVideo) {
            setBackgroundVideo(isDarkMode); // 비디오 소스 설정 함수 호출
        }
    };

    const setBackgroundVideo = (isDarkMode) => {
        const videoSource = isDarkMode ? './video/wave-darkmode.mp4' : './video/wave-lightmode.mp4';
        backgroundVideo.src = videoSource;
    };

    // 초기 다크 모드 설정 적용
    applyInitialTheme();

    if (backgroundVideo) {
        // 비디오 요소 표시
        backgroundVideo.style.opacity = 1;
    }

    // 페이지 로딩 완료 후 loading 클래스 제거
    document.body.classList.remove('loading');

    // 토글 버튼에 클릭 이벤트 리스너 추가
    darkModeToggle.addEventListener('change', toggleDarkMode);
});





// 토글 버튼을 클릭하면 네비게이션 메뉴가 나타나고 사라지는 이벤트
let navLinks = document.querySelector('.nav-links'); // 네비게이션 메뉴 요소
let menuBtn = document.querySelector('.menu-btn'); // 토글 버튼 요소
let toggleNav = document.querySelector('.toggle-nav-container'); // 토글 네비게이션 요소
let techBtn = document.querySelector("#tech-btn"); // 햄버거, 닫기 버튼 요소

// 초기에 네비게이션 메뉴를 숨김
navLinks.style.display = 'none';

function handleResize() { // 화면 크기에 따라 네비게이션 메뉴를 보이거나 숨기는 함수
    let screenWidth = window.innerWidth; // 현재 화면의 너비
    let toggleSwitch = document.querySelector('.toggle-switch'); // 토글 스위치 요소

    if (screenWidth >= 851) { // 화면 너비가 851px 이상일 때
        navLinks.style.display = 'flex'; // 네비게이션 메뉴를 보이게 함
        menuBtn.style.display = 'none'; // 토글 버튼을 숨김
        techBtn.style.display = 'none'; // 햄버거, 닫기 버튼을 숨김
        toggleNav.classList.remove('active'); // 토글 네비게이션을 숨김

        // 큰 화면일 때는 toggle-switch를 header 내부로 이동
        toggleSwitch.parentNode.removeChild(toggleSwitch); // toggle-switch를 부모 요소에서 제거
        document.querySelector('header').appendChild(toggleSwitch); // header 요소에 toggle-switch를 추가
        techBtn.src = "./image/menu-icon.svg"; // 이미지 변경
        
    } else { // 화면 너비가 850px 이하일 때
        navLinks.style.display = 'none'; // 네비게이션 메뉴를 숨김
        menuBtn.style.display = 'flex'; // 토글 버튼을 보이게 함
        techBtn.style.display = 'block'; // 햄버거, 닫기 버튼을 보이게 함

        // 작은 화면일 때는 toggle-switch를 toggle-nav 안으로 이동
        toggleSwitch.parentNode.removeChild(toggleSwitch); // toggle-switch를 부모 요소에서 제거
        document.querySelector('.toggle-nav').appendChild(toggleSwitch); // toggle-nav 요소에 toggle-switch를 추가
    }
}

// 페이지 로드 시 handleResize 함수를 즉시 호출
handleResize();

menuBtn.addEventListener('click', () => { // 토글 버튼을 클릭하면
    toggleNav.classList.toggle('active'); // 토글 네비게이션을 보이거나 숨김
    toggleTechBtn(); // 클릭할 때마다 이미지 변경 함수 호출
});

window.addEventListener('resize', handleResize);

function toggleTechBtn() { // 이미지 변경 함수
    if (techBtn.src.match(/menu-icon/)) { // 이미지의 경로가 menu-icon이라면
        techBtn.src = "./image/menu-close.svg"; // 다른 이미지의 경로로 변경
    } else {
        techBtn.src = "./image/menu-icon.svg"; // 원래 이미지로 변경
    }
}

/* 처음 코드를 작성할 때는 sessionStorage 대신 localStorage를 사용했었는데,
localStorage는 페이지를 닫아도 localStorage 데이터가 유지가 되어 페이지를 닫거나 브라우저를 닫았다가 다시 열었을 때 다크모드가 유지가 되어 있었다. 
나는 페이지를 닫거나 브라우저를 닫았을 때 다크모드가 해제되도록 하고 싶었기 때문에 방법들을 찾아봤다.
처음에는 if문을 통해 document의 타이틀을 확인하고 해당 타이틀과 같은 경우에만 localStorage를 유지하고, 다른 경우에는 localStorage를 삭제하도록 해보았는데도 localStorage는 남아있었다. 
다른 방법은 없나 검색을 해보았는데 sessionStorage를 사용하면 해당 페이지를 닫았을 때 sessionStorage 데이터가 삭제된다는 것을 알게 되었다. 
그래서 localStorage 대신 sessionStorage를 사용하였다. sessionStorage를 사용하니 페이지를 새로고침 하거나 다른 페이지로 이동을 할 때는 다크모드가 유지되고, 
페이지를 나가거나 브라우저를 닫고 다시 페이지를 열었을 때는 다크모드가 해제되는 것을 확인할 수 있었다. */

/* 문제가 발생했다. 다크모드인 상태로 페이지를 새로고침 하거나 네비게이션을 통해 다른페이지로 이동을 하면 
페이지가 라이트 모드로 로드 되고, 이후에 다크모드로 변경되어 화면이 깜빡거리는 현상이 발생했다. body을 먼저 읽고
스크립트를 실행하기 때문에 body 클래스가 dark-mode로 설정되기 전에 페이지가 먼저 로드되어 라이트 모드로 보이는 것 같다. flicker 현상 이라고 하는듯 하다. */

/* 완벽하지는 않지만 해결방법을 찾았다. 세션 스토리지 값을 불러와서 초기 테마를 적용하는 함수를 만들었다.
그 함수를 바디 바로 아래에 배치하여 로드 초기에 적용되도록 하였다. 
이렇게 코드를 수정하니 완벽하지는 않지만 새로고침과 페이지 이동시마다 발생하던 깜빡임 증상이 획기적으로 줄었다.(거의 없다.) React처럼 원페이지가 아니라 완벽하게 해결하지는 못하였지만
깜빡임 증상이 획기적으로 줄었으므로 만족한다. 이문제를 해결하면서 여러 지식들을 알게되었고, 코드에 대한 이해도가 높아진 것 같다. */