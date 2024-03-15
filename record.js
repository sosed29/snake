export function getRecord() {
  const storedRecord = localStorage.getItem("RecordGameSnake");
  return storedRecord ? parseInt(storedRecord) : 0;
}

export function setRecord(newRecord) {
  localStorage.setItem("RecordGameSnake", newRecord);
}
