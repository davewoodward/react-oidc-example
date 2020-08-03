import { SalteAuth } from '@salte-auth/salte-auth';
import { Cognito } from '@salte-auth/cognito';
import { Redirect } from '@salte-auth/redirect';

export default class Auth {
  constructor(history) {
    this.history = history;
    this.auth = new SalteAuth({
      providers: [
        new Cognito({
          responseType: 'token',
          url: process.env.REACT_APP_COGNITO_URL,
          clientID: process.env.REACT_APP_COGNITO_CLIENT_ID,
          scope: 'openid profile email',
          level: 'trace',
          storage: 'session'
        })
      ],
      handlers: [
        new Redirect({
          default: true,
          storage: 'session'
        })
      ],
      storage: 'session'
    });
  }

  login = () => {
    this.auth.login('cognito');
  }
}

