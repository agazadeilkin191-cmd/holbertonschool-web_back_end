export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Burada let istifadə etdikdə, bu dəyişənlər
    // yalnız if-in daxilindəki "block scope"-da yaşayır.
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
