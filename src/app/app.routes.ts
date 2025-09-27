import { Routes } from '@angular/router';
import { SignUp } from '../components/sign-up/sign-up/sign-up';
import { Signin } from '../components/signin/signin';
import { Dashboard } from '../components/dashboard/dashboard';
import { Match } from '../components/match/match';
import { List } from '../components/list/list';
import { Message } from '../components/message/message';
import { authGaurdGuard } from '../core/services/guards/auth-gaurd-guard';
import { MemberProfile } from '../components/member-profile/member-profile';


export const routes: Routes = [
    {path:'signup',component:SignUp},
    {path:'signin',component:Signin},
    {path:'',runGuardsAndResolvers:'always',canActivate:[authGaurdGuard],
        children:[
                {path:'dashboard',component:Dashboard},
                {path:'match',component:Match},
                {path:'list',component:List},
                {path:'message',component:Message},
                {path:'member/:id',component:MemberProfile}
            ]
        }
    ];
 