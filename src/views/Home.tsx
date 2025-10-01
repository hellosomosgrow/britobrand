import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import MainLayout from '../components/MainLayout';

function Home() {
  return (
    <div className="space-y-4 flex flex-col flex-grow">
      <Helmet>
        <title>Branding & Dirección de Arte | BritoBrand</title>
        <meta
          name="description"
          content="Estudio creativo liderado por Félix Brito. Branding, identidad visual y dirección de arte para marcas y proyectos globales."
        />
        <meta
          name="keywords"
          content="branding, identidad visual, dirección de arte, Félix Brito, diseño gráfico, marca"
        />
      </Helmet>

      {/* H1 oculto para SEO */}
      <h1 className="sr-only">Branding e Identidad Visual para Marcas</h1>

      <Banner />
      <MainLayout />
    </div>
  );
}

export default Home;
