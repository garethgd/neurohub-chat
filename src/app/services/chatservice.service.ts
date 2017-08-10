
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  user: any;
  userName: Observable<string>

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    // this.afAuth.authState.subscribe(auth => {
    //   if (auth !== undefined && auth !== null) {
    //     this.user = auth;
    //   }
    // })
  }
  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
     const email = "test@test.com";
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSend: timestamp,
      userName: "test",
      email: email
    });
    console.log("sendMessage")
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    })
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();

    const time = now.getUTCHours() + '/' +
      (now.getUTCMinutes() + 1) + '/' +
      now.getUTCSeconds();

    return (date + '' + time)
  }
}
