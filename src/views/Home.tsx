import Banner from '../components/Banner';
import MainLayout from '../components/MainLayout';

function Home() {
  return (
    <div className="space-y-4 flex flex-col flex-grow">
      <Banner />
      <MainLayout />
    </div>
  );
}

export default Home;
