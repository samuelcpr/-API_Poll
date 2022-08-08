import { EmailValidator } from "../presentation/protocools/emailValidator";

export class EmailValidatorAdapter implements EmailValidator {
	isValid(email: string): boolean {
		return false;
	}
}
