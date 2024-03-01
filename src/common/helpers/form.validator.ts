import validator from 'validator';
import { removeHtmlTags } from '../funtions';

export type ValidatioFunction = (...args: (string | any)[]) => string | undefined;

type FormValidationType = Record<string, ValidatioFunction>;

const commonValidationString = {
  isRequired: (fieldName = 'This field') => `${fieldName} is required`,
  isStrong: (fieldName: string) => `Password is ${fieldName}`,
  isInvalid: (fieldName: string) => `${fieldName} is invalid`,
  isValidNumber: (fieldName: string) => `${fieldName} must be a valid number`
};

export const commonValidation = {
  isRequired: (value: string, fieldName = 'This field') => {
    if (validator.isEmpty(value)) {
      return commonValidationString.isRequired(fieldName);
    }
  },
  isNumber: (value: string, fieldName = 'This field') => {
    if (!validator.isNumeric(value)) {
      return commonValidationString.isValidNumber(fieldName);
    }
  },
  isNumberBetween: function (value: string, fieldName = 'This field', start: number, end: number) {
    if (!validator.isNumeric(value)) {
      return commonValidationString.isValidNumber(fieldName);
    }

    const numberValue = Number(value);
    if (numberValue <= start || numberValue >= end) {
      return `${fieldName} must be between ${start} and ${end}`;
    }
  },
  isRequiredEmail: (email: string) => {
    if (validator.isEmpty(email)) {
      return commonValidationString.isRequired('E-mail');
    }

    if (!validator.isEmail(email)) {
      return commonValidationString.isInvalid('E-mail');
    }
  },
  isRequiredVerificationCode: (verificationCode: string) =>
    commonValidation.isRequired(validator.trim(verificationCode), 'Verification Code')
};

export const loginValidation: FormValidationType = {
  email: commonValidation.isRequiredEmail,
  password: (password: string) => {
    if (validator.isEmpty(password)) {
      return commonValidationString.isRequired('Password');
    }
  }
};

export const registerValidation: FormValidationType = {
  email: commonValidation.isRequiredEmail,
  password: (password: string) => {
    if (validator.isEmpty(password)) {
      return commonValidationString.isRequired('Password');
    }

    if (!validator.isStrongPassword(password)) {
      return commonValidationString.isStrong('weak');
    }
  },
  verificationCode: commonValidation.isRequiredVerificationCode,
  verifyPassword: (verifyPassword: string, { password }: Record<string, string>) => {
    if (validator.isEmpty(verifyPassword)) {
      return commonValidationString.isRequired('Password');
    }

    if (verifyPassword !== password) {
      return 'Password mismatch';
    }
  }
};

export const createProject: FormValidationType = {
  title: commonValidation.isRequired,
  tags: (tags: { name: string; id: number }[]) => {
    if (tags.length === 0) {
      return commonValidationString.isRequired('Tags');
    }
  },
  editor: (value: string) => {
    const stringWithoutHtmlTags = removeHtmlTags(value);

    if (stringWithoutHtmlTags.length === 0) {
      return commonValidationString.isRequired('Description');
    }
  }
};
