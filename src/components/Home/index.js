import Carousal from './Carousal';
import HomeProducts from './HomeProducts';
import Nav from './Nav';

function HomeComponent() {
  return (
    <div>
      <Nav />
      <main>
        <Carousal />
        <HomeProducts/>
      </main>
    </div>
  );
}

export default HomeComponent;
