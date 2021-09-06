window.onerror = function (message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // 에러가 발생한 장소
}

readData();

function func() {
  throw new Error('error');
  try {
    return 1;
  } catch (e) {
    /* ... */
  } finally {
    alert('finally');
  }
}

alert(func());
