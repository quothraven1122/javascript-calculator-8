import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let numbers;

    if (input.startsWith("//")) {
      //custom delimiter 사용
      // "//" 다음 char이 구분자
      const customDelimiter = input[2];
      // "\n"으로 split하면 왼쪽이 "//{delimiter}", 오른쪽이 숫자 리스트가 된다
      const numbersWithCustomDelimiter = input.split("\\n")[1];

      numbers = numbersWithCustomDelimiter.split(customDelimiter);
    } else {
      //default delimiter 사용
      numbers = input.split(/[,|:]/);
    }

    Console.print(numbers);
  }
}

export default App;
