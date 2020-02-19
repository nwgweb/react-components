import { useState } from 'react';

const useModal = (initialMode: boolean) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggleModal = () => setModalOpen(!modalOpen);
  return { modalOpen, setModalOpen, toggleModal };
}

export default useModal;