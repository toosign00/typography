// page-01.html에 적용되는 js

// 어사이드와 아티클 전환 이벤트
const articleBtns = document.querySelectorAll('.aside-li'); // 어사이드 li 요소
        const articles = document.querySelectorAll('article'); // 아티클 요소

        function toggleArticles(articleIndex) { // 아티클 전환 함수
            articles.forEach((article, index) => { // 모든 아티클 요소 반복
                article.style.display = index === articleIndex ? 'block' : 'none'; // 선택된 아티클만 표시
            });
        }

        articleBtns.forEach((btn, index) => { // 어사이드 li에 이벤트 추가
            btn.addEventListener('click', () => {  // 클릭 이벤트
                toggleArticles(index); // 아티클 전환 함수 호출
            }); 
        });

        articleBtns[0].click(); // 초기에 첫 번째 아티클을 보이도록 설정