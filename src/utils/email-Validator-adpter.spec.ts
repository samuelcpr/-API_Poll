import { EmailValidatorAdapter } from "./email-validator";

describe("EmailValiadtor Adapter", () => {
	test("shold return false if validator retuns false", () => {
		const sut = new EmailValidatorAdapter();
		const isValid = sut.isValid("invalid_email@mail.com");
		expect(isValid).toBe(false);
	});
});
