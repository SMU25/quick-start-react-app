import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";

const T_PREFIX = "modal-confirmation";
const DEFAULT_CONFIRM_BUTTON_NAME = "yes";
const DEFAULT_CANCEL_BUTTON_NAME = "no";

interface Props {
  children?: ReactNode;
  confirmButtonName?: string;
  cancelButtonName?: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export const Confirmation: FC<Props> = ({
  children,
  confirmButtonName,
  cancelButtonName,
  onConfirm,
  onClose,
}) => {
  const { t } = useTranslation();

  const confirm =
    confirmButtonName || t(`${T_PREFIX} - ${DEFAULT_CONFIRM_BUTTON_NAME}`);

  const cancel =
    cancelButtonName || t(`${T_PREFIX} - ${DEFAULT_CANCEL_BUTTON_NAME}`);

  return (
    <div>
      {children}
      <div>
        <Button className="" onClick={onConfirm}>
          {confirm}
        </Button>
        <Button className="" onClick={onClose}>
          {cancel}
        </Button>
      </div>
    </div>
  );
};
