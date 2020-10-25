import { environment } from './../../../environments/environment';
/* Variaveis constantes e enuns */

export class Constant {
  /* APP GLOBAL */
  public static readonly APP_INITIAL = 'STOREAPP';
  public static readonly APPNAME = 'Sistema de Gerenciamento Comercial';
  public static readonly APP_VERSION = 'Versão: 1.0.0';

  /* LOGIN */
  public static readonly LOGIN_TITLE = 'Acesso ao sistema';
  public static readonly LOGIN_ENVIROMENT = 'Ambiente: ';
  public static readonly LOGIN_AUTHENTICATION = 'Login';
  public static readonly LOGIN_PASSWORD = 'Senha';
  public static readonly LOGIN_REMEMBER = 'Lembrar acesso';
  public static readonly LOGIN_RECOVERY = 'Recuperar';
  public static readonly LOGIN_ACCESS = 'Entrar';

  /* RECOVERY */
  public static readonly RECOVERY_TITLE = 'Recuperar acesso';
  public static readonly RECOVERY_LOGIN = 'Login';
  public static readonly RECOVERY_MAIL = 'E-mail';
  public static readonly RECOVERY_REQUEST = 'Solicitar';
  public static readonly RECOVERY_CANCEL = 'Cancelar';

  /* ABOUT */
  public static readonly ABOUT_TITLE = 'Sobre';
 
 /* CONTACT */
 public static readonly CONTACT_TITLE = 'Contato';
 
  
}

export enum PersonType {
  PHYSICAL = 'Fisica',
  JURIDICAL = 'Jurídica'
}

export enum PersonGender {
  FEMALE = 'Feminino',
  MALE = 'Masculino'
}

export enum PersonStateCivil {
  MARRIED = 'Casado(a)',
  SINGLE = 'Soleiro(a)',
  DATING = 'Namorando',
  SEPARETE = 'Separado(a)',
  WINDOWER = 'Viúvo(a)'
}
