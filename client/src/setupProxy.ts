import { createProxyMiddleware } from 'http-proxy-middleware';
import { SERVER_URL } from './config.keys';

const Proxy = (app: any) => {
  app.use(
    '/',
    createProxyMiddleware({
      target: "https://vita-qy1k.onrender.com",
      changeOrigin: true,
    }),
  );
};

export default Proxy;
