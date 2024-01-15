import { Server, Socket } from 'socket.io';
import { CORS_REGEX, APP_NAME} from '../config/keys';
import http from 'http';

const socketService = (httpServer: http.Server): void => {
  console.log(APP_NAME + ' ' + CORS_REGEX);
  const IO_OPTIONS = {
    cors: {
      origin: new RegExp(CORS_REGEX),
      methods: ['GET', 'POST', 'DELETE', 'PATCH', 'UPDATE'],
      credentials: true,
    },
  };

  const io = new Server(httpServer, IO_OPTIONS);
};

export default socketService;
