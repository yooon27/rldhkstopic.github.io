const paperJSONPath = '../paper.json';

  // paper.json 파일 정보를 읽어오는 함수
  function loadPaperJSON(callback) {
    fetch(paperJSONPath)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error(error));
  }

  // HTML 요소에 값을 넣어주고 PDF 뷰어를 띄우는 함수
  function setPaperDetails(paperData) {
    const paper = paperData[0]; // 첫 번째 paper 정보를 사용

    // paper-container3에 date 정보 추가
    const paperContainer3 = document.querySelector('.paper-container3');
    paperContainer3.innerHTML = paper.date;

    // paper-text18에 writer 정보 추가
    const paperText18 = document.querySelector('.paper-text18');
    paperText18.innerHTML = paper.writer;

    // paper-company에 title 정보 추가
    const paperCompany = document.querySelector('.paper-company');
    paperCompany.innerHTML = paper.title;

    // paper-description에 pdf 파일 정보 추가
    const paperDescription = document.querySelector('.paper-description');
    const pdfURL = paper.url;
    paperDescription.innerHTML = `<iframe src="${pdfURL}" width="100%" height="600px"></iframe>`;
  }

