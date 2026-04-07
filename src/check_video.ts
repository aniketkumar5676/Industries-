import https from 'https';

const urls = [
  'https://assets.mixkit.co/videos/preview/mixkit-shipping-containers-in-a-port-4245-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-4244-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-a-highway-4254-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-logistics-and-shipping-port-4246-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-commercial-port-with-cranes-and-containers-4246-large.mp4',
  'https://cdn.pixabay.com/video/2020/05/24/40087-424823439_large.mp4'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', (err) => {
    console.log(`Error on ${url}: ${err.message}`);
  });
});
