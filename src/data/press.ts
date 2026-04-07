export interface PressArticle {
  source: string;
  logoText: string;
  headline: string;
  url: string;
  date: string;
}

export const press: Record<string, PressArticle[]> = {
  super: [],

  chiliz: [
    {
      source: 'CoinDesk',
      logoText: 'CD',
      headline: 'Fan Token Project Chiliz Rolls Out Layer 1 Blockchain; Token Surges 20%',
      url: 'https://www.coindesk.com/business/2023/02/08/fan-token-project-chiliz-rolls-out-layer-1-blockchain-token-surges-20',
      date: 'Feb 2023',
    },
    {
      source: 'Socios.com',
      logoText: 'SC',
      headline: 'The Chiliz Group celebrates dual MiCA milestone: European licence for Socios Europe Services and MiCA-compliant CHZ white paper',
      url: 'https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/',
      date: 'Sep 2025',
    },
  ],

  bridder: [],

  waveApplication: [
    {
      source: 'Amazon Web Services',
      logoText: 'AWS',
      headline: 'Be smart about your safety. Discover Sister',
      url: 'https://www.aboutamazon.eu/news/amazon-web-services/be-smart-about-your-safety-discover-sister',
      date: 'Apr 2020',
    },
    {
      source: 'Innovadores',
      logoText: 'INV',
      headline: 'Sister App localiza a la mujer en peligro con dos metros de precisión',
      url: 'https://innovadores.inndux.com/es/sister-app-localiza-a-la-mujer-en-peligro-con-dos-metros-de-precision',
      date: 'Nov 2019',
    },
  ],

  solera: [],

  streye: [
    {
      source: 'El Español',
      logoText: 'ES',
      headline: 'Streye, tecnológica española, venderá en exclusiva las nuevas Google Glass en todo el mundo',
      url: 'https://www.elespanol.com/invertia/empresas/20180313/streye-tecnologica-espanola-desarrollo-nueva-google-glass/291721577_0.html',
      date: 'Mar 2018',
    },
    {
      source: 'Digital Trends',
      logoText: 'DT',
      headline: 'Wearable Specialist Streye is Selling Google Glass to Businesses',
      url: 'https://www.digitaltrends.com/computing/google-glass-enterprise-streye/',
      date: 'Aug 2017',
    },
  ],

  everis: [],

  navionTruck: [],

  coordaNetworks: [],
};
