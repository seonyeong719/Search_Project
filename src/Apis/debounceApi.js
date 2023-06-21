import { useState, useEffect } from "react";

//value는 실행하는 곳에서 보내준 인풋 값이다.보내준걸 매개변수로 보내줌.
// delay는 0.5초 설정
const useDebounce = (value, delay = 300) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay); // setDebounce의 밸류값이 바뀌면 0.5초 딜레이 시켜라
    return () => {
      clearTimeout(handler); // 0.5초가 지났을때 다시 불러와라
    };
  }, [value, delay]); // 인풋이 바뀔때 마다 이펙트 실행.
  return debounce;
};
export default useDebounce;
