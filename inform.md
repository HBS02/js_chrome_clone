web storage => localStorage, sessionStorage
localStorage는 웹페이지 세션이 끝나더라도 데이터 삭제 X
sessionStorage는 웹페이지 세션 끝나면 데이터 삭제 O

다시 말해, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.

// 키에 데이터 쓰기
localStorage.setItem("key", value);

// 키로 부터 데이터 읽기
localStorage.getItem("key");

// 키의 데이터 삭제
localStorage.removeItem("key");

// 모든 키의 데이터 삭제
localStorage.clear();

// 저장된 키/값 쌍의 개수
localStorage.length;

웹 스토리지를 사용할 때 주의해야 할 부분은오직 문자형(string) 데이터 타입만 지원한다는 것.
해결 -> JSON 형태로 데이터를 읽고 쓰는 것.
localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

위와 같이 로컬 스토리지에 쓸 데이터를 JSON 형태로 직렬화(serialization)하고, 읽은 데이터를 JSON 형태로 역직렬화(deserialization)해주면 원본의 데이터를 그대로 얻을 수 있습니다.

const loadedCoords = localStorage.getItem(COORDS);
JSON.parse(loadedCoords); 자바스크립트 string을 object로 바꿔 줌.

데이터 청소
localStorage.length
5
localStorage.key(0)
"email"
localStorage.removeItem('obj')
undefined
localStorage.length
4
localStorage.clear()
undefined
localStorage.length
0

변수
const = 변수 재선언, 재할당 불가능
let = 변수 재할당 가능
