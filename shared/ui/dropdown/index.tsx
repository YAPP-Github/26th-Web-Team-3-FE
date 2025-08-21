"use client";

import { cn } from "@/shared/utils/cn";
import {
  type ComponentProps,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useOutsideClickEffect } from "react-simplikit";
import * as styles from "./dropdown.css";

interface DropdownContextProps {
  open: boolean;
  isClosing: boolean;
  handleToggleOpen: () => void;
  handleToggleClose: () => void;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

// useDropdownContext: 드롭다운 컴포넌트 외부에서 서브 컴포넌트들이 사용됐을 때 에러 처리
const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown 컴포넌트는 Dropdown 내에서 사용되어야 합니다.");
  }
  return context;
};

interface DropdownRootProps {
  children: ReactNode;
  className?: string;
}

const DropdownRoot = ({ className, children }: DropdownRootProps) => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [wrapperEl, setWrapperEl] = useState<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleOpen = () => {
    // 애니메이션 중일 때는 무시
    if (isAnimating) return;
    
    if (open) {
      setIsAnimating(true);
      setIsClosing(true);
    } else {
      setIsAnimating(true);
      setOpen(true);
      setIsClosing(false);
    }
  };

  const handleClose = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsClosing(true);
  };

  // 애니메이션 완료 후 실제로 닫기
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
        setIsAnimating(false);
      }, 150);

      return () => clearTimeout(timer);
    } else if (open) {
      // 열기 애니메이션 완료 후
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isClosing, open]);

  // 드롭다운이 열려있을 때만 외부 클릭 감지
  useOutsideClickEffect(open ? wrapperEl : null, handleClose);

  const contextValue: DropdownContextProps = {
    open,
    isClosing,
    handleToggleOpen,
    handleToggleClose: handleClose,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={setWrapperEl} className={cn(styles.dropdownWrapper, className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// Dropdown의 메뉴를 trigger 하는 컴포넌트
interface DropdownTriggerProps {
  children: ReactNode | (({ open }: { open: boolean }) => ReactNode);
  className?: string;
  onClick?: () => void;
}

const DropdownTrigger = ({
  children,
  className,
  onClick,
}: DropdownTriggerProps) => {
  const { handleToggleOpen, open } = useDropdownContext();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleToggleOpen();
        onClick?.();
      }}
      className={cn(styles.triggerBtnStyle, className)}
    >
      {typeof children === "function" ? children({ open }) : children}
    </button>
  );
};

// Dropdown의 메뉴 리스트를 렌더링하는 컴포넌트
interface DropdownContentProps {
  children: ReactNode;
  className?: string;
}

const DropdownContent = ({ children, className }: DropdownContentProps) => {
  const { open, isClosing } = useDropdownContext();

  if (!open && !isClosing) return null;

  return (
    <ul 
      className={cn(
        styles.dropdownContent,
        isClosing? styles.dropdownContentClosing: '',
        className
      )}
    >
      {children}
    </ul>
  );
};

// Dropdown의 메뉴 리스트 아이템 컴포넌트
interface DropdownItemProps extends ComponentProps<"button"> {
  label: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownItem = ({
  label,
  children,
  className,
  onClick,
  ...props
}: DropdownItemProps) => {
  const { handleToggleClose } = useDropdownContext();

  return (
    <li>
      <button
        {...props}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleClose();
          onClick?.();
        }}
        className={cn(styles.dropdownItem, className)}
        role="menuitem"
        aria-label={label}
      >
        {children}
        <p>{label}</p>
      </button>
    </li>
  );
};

type DropdownComponent = typeof DropdownRoot & {
  Trigger: typeof DropdownTrigger;
  Content: typeof DropdownContent;
  Item: typeof DropdownItem;
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
}) as DropdownComponent;

export default Dropdown;
