export class User {
    uid?: string;
    email?: string;
    userName?:string;
    password?:string;
    isOnline?: true;
    lastActive? : Date = new Date();
    status?: {
        isIdle: boolean,
        doNotDisturb: boolean;
        isActive: boolean;

    }
  
}