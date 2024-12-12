import s from './HomePages.module.css';
import { PiHeartLight } from 'react-icons/pi';

const HomePages = () => {
  return (
    <div className={s.homeDiv}>
      <h2 className={s.title}>
        Welcome contacts page
        <PiHeartLight />
      </h2>
    </div>
  );
};
export default HomePages;
