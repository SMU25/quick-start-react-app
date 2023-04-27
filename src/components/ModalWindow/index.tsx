import React, { FC, useRef } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "src/hooks/useClickOutside";
import { hideModal } from "src/app/modal/actions";
import { selectModalState } from "src/app/modal/selectors";
import { Button } from "src/components/Button";
import { ReactComponent as Close } from "src/assets/icons/xmark.svg";

export const ModalWindow: FC = () => {
  const dispatch = useDispatch();

  const { isOpen, title, text, children } = useSelector(selectModalState);

  const modalRef = useRef();

  const onClose = () => {
    if (isOpen) dispatch(hideModal());
  };

  useClickOutside(modalRef, onClose);

  return (
    <div className={cn({ "": isOpen })}>
      <div ref={modalRef} className={cn("", { "": isOpen })}>
        <Button onClick={onClose}>
          <Close />
        </Button>
        {title && <h3 className="truncate">{title}</h3>}
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
};
