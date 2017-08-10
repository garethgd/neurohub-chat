import { Routes } from "@angular/router"
import { LoginFormComponent } from "./login-form/login-form.component"
import { SignupFormComponent } from "./signup-form/signup-form.component"
import { ChatroomComponent } from "./chatroom/chatroom.component"

export const appRoutes:Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "chat", component: ChatroomComponent },
  { path: "", redirectTo: "/login", pathMatch: 'full' },
]