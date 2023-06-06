import Career from '@components/Career';
import Profile from '@components/Profile';
import Skill from '@components/Skill';
import Swiper from '@templates/Swiper';

export default function Home() {
  return (
    <main>
      <div>
        <Career></Career>
        <Profile></Profile>
        <Skill></Skill>
        <Swiper></Swiper>
      </div>
    </main>
  );
}
