import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      let numbers;

      if (input.startsWith("//") && input.includes("\\n")) {
        //custom delimiter 사용

        // "\n"으로 split하면 왼쪽이 구분자, 오른쪽이 숫자 리스트가 된다
        const [customDelimiter, numbersWithCustomDelimiter] = input
          .slice(2)
          .split("\\n");

        numbers = numbersWithCustomDelimiter.split(customDelimiter);
      } else {
        //default delimiter 사용
        numbers = input.split(/[, :]/);
      }

      //numbers 안의 모든 element가 실제로 number인지 확인
      numbers.forEach((i) => {
        if (isNaN(Number(i))) {
          throw new Error("[ERROR] input error");
        }
      });
      Console.print(numbers);
    } catch (e) {
      Console.print(e.message);
      return;
    }
  }
}

export default App;
