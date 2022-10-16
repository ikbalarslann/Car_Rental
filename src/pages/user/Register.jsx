import { useState } from "react";
import UserModal from "../../components/UserModal";
import Button from "../../components/chunks/Button";

const Register = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button
        type="submit"
        onclick={() => setModal(true)}
        content="Open Modal"
      />
      {modal && <UserModal setModal={setModal} />}
    </div>
  );
};

export default Register;
