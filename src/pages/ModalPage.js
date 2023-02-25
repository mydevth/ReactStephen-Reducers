import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>สวัสดี นี้เป็นข้อความสำคัญที่คุณต้องปฏิบัติตาม</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas
        viverra porta. Donec vehicula, risus quis suscipit placerat, felis diam
        suscipit ante, posuere sagittis urna sem eu nisl. Pellentesque eget
        posuere tortor, scelerisque tempor orci. Donec volutpat orci augue, ut
        ultrices neque suscipit vel. Donec sit amet arcu tincidunt, luctus dolor
        eget, condimentum libero. Quisque scelerisque egestas accumsan. Donec
        posuere dictum posuere. Duis placerat turpis diam, eget malesuada arcu
        maximus eu. Aliquam imperdiet turpis mi, quis ornare enim scelerisque
        sed. Morbi sed ante vel erat vehicula blandit. Donec consectetur gravida
        metus consequat placerat.
      </p>
    </div>
  );
}

export default ModalPage;
