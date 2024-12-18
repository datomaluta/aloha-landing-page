import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end }: { end: number }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="inline-block" ref={inViewRef}>
      {inView && <CountUp end={end} duration={5} />}
    </div>
  );
};

export default Counter;
