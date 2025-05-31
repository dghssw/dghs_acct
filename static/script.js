// 예시 데이터: 실제 서비스에서는 DB나 서버에서 불러와야 함
const studentAccounts = [
  { number: '202301', name: '홍길동', id: 'hong123@school.kr', pw: 'pass1234' },
  { number: '202302', name: '김민지', id: 'kimmj@school.kr', pw: 'minji5678' },
  { number: '202303', name: '이준호', id: 'leejh@school.kr', pw: 'junho9876' }
];

document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출 막기

  const studentNumber = document.getElementById('studentNumber').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  const resultBox = document.getElementById('result');

  // 입력값이 비어있으면 안내
  if (!studentNumber || !studentName) {
    resultBox.innerHTML = '학번과 이름을 모두 입력해주세요.';
    return;
  }

  // 데이터 검색
  const student = studentAccounts.find(
    s => s.number === studentNumber && s.name === studentName
  );

  // 결과 출력
  if (student) {
    resultBox.innerHTML = `
      <p><strong>계정 ID:</strong> ${student.id}</p>
      <p><strong>초기 비밀번호:</strong> ${student.pw}</p>
    `;
  } else {
    resultBox.innerHTML = '일치하는 계정을 찾을 수 없습니다.';
  }
});
