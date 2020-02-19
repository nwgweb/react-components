import React from "react";

const useComponentVisible = (initialIsVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = React.useState(
    initialIsVisible
  );
  const ref = React.useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
