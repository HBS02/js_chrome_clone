const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  // 이벤트 발생시 정보 호출
  const li = btn.parentNode;
  // 버튼에 대한 부모요소 확인
  toDoList.removeChild(li);
  // 자식 li 태그 제거
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  // filter는 해당 함수가 toDos의 모든 items들에게 실행하도록 하여 treu인 item으로 다시 배열 구성
  // ex. 클릭하여 제거된 버튼의 부모 요소인 li의 id 값이 3일 경우, 나머지 id 들은 다시 배열 정렬
  toDos = cleanToDos;
  // 실행된 배열과 저장소의 배열의 차이가 있으므로 필터된 배열로 다시 할당
  saveToDos();
  // 로컬 스토리지 저장
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 목록 삭제 시 id 값이 겹치는 경우가 발생하므로
let newId = 0;
// 첫 번째 목록에는 항상 0을 부여하여 순서대로 출력, 갱신 시 데이터 값을 재정렬

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  span.innerText = text;
  // span과 button에 텍스트 추가
  delBtn.addEventListener("click", deleteToDo);
  // 버튼 눌렀을 경우 이벤트 감지, 함수 호출
  li.appendChild(delBtn);
  li.appendChild(span);
  // span과 button 태그를 부모 li의 자식요소로 추가
  toDoList.appendChild(li);
  // li 태그를 부모 ul의 자식요소로 추가
  li.id = newId;
  // 생성된 li에 id 값 부여
  const toDoObj = { text: text, id: newId };
  toDos.push(toDoObj);
  // toDos 배열에 오브젝트 값 추가
  saveToDos();
  // 저장
  newId++;
  // id값에 1을 추가하여 새로운 생성 시 기존 배열속 id 값에 겹침이 없도록 하게 함
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  } else if (loadedTodos === null) {
    toDoForm.addEventListener("submit", handleSubmit);
  }
}

function init() {
  loadToDos();
}

init();
