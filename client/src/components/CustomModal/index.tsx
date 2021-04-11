import CustomSvgIcons from 'components/CustomSvgIcons';
import React, { ReactNode, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
interface IProps {
  openModal: boolean;
  className?: any;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  toggleModal: any;
}
const CustomModal: React.FC<IProps> = ({
  openModal,
  toggleModal,
  className,
  header,
  children,
  footer,
}) => {
  return (
    <Modal isOpen={openModal} toggle={toggleModal} className={className}>
      <a
        href='# '
        className='close icon-close'
        data-dismiss='modal'
        onClick={toggleModal}
        aria-label='Close'>
        <CustomSvgIcons id='olymp-close-icon' className='olymp-close-icon' />
      </a>

      {header && <ModalHeader>{header}</ModalHeader>}
      <ModalBody>{children}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  );
};
export function useToggleModal(
  initState: boolean = false,
): [boolean, () => void] {
  const [openModal, setOpenModal] = useState(initState);

  const toggleModal = () => setOpenModal(!openModal);

  return [openModal, toggleModal];
}
CustomModal.defaultProps = {
  // className: 'modal fade',
};
export default CustomModal;
