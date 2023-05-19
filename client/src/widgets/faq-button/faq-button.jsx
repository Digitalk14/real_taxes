import React, { useCallback, useState } from "react";
import { ButtonStyled, Modal } from "./faq-button.style";

export const FAQButton = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);
  return (
    <div>
      <ButtonStyled onClick={handleClick}>?</ButtonStyled>
      <Modal isActive={isActive}>
        <p>Зачем нужен этот сайт?</p>
        <p>
          В-первую очередь, чтобы у вас было понимание сколько именно вы
          заплатили своих средств P.S это не 13% Во-вторых это поможет повысить
          финансовую грамотность населения
        </p>
        <p>Почему мы говорим именно “инвестировать”?</p>
        <p>
          Потому что налоги или прочие отчисления это и есть прямые инвестиции в
          государство! Как если бы вы приобрели акции компании, в своих целях,
          будь это получение выгоды или сохранение средствТакже и с инвестициями
          в государство. Вы инвестируете в свою безопасность, в свою окружающую
          среду, в школы
        </p>
      </Modal>
    </div>
  );
};
