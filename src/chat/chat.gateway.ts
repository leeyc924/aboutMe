import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: '/chat',
})
export class ChatGateway {
  @WebSocketServer()
  server!: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { username: string; message: string }, @ConnectedSocket() client: Socket): void {
    const { message, username } = data;
    console.log(`Message from ${username}: ${message}`);

    // 메시지와 사용자 이름을 함께 모든 클라이언트에게 브로드캐스트
    this.server.emit('message', { username, message });
  }
}
