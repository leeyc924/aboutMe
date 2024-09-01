import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: '*',
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor() {}

  @WebSocketServer()
  server!: Server;

  afterInit() {
    Logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.server.sockets;

    Logger.log(`Client id: ${client.id} connected`);
    Logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    Logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('ping')
  handleMessage(client: any, data: any) {
    Logger.log(`Message received from client id: ${client.id}`);
    Logger.debug(`Payload: ${JSON.stringify(data)}`);
    return data;
  }
}
