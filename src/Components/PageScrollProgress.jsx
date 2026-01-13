import { useEffect, useState } from "react";
import "../CSS/PageScrollProgress.css";

const PageScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mobile-scroll-progress">
      <span
        className="mobile-scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default PageScrollProgress;
