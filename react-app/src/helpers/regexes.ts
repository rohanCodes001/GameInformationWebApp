export const letterRegExp = /[a-zA-Z]/;
export const numbersRegExp = /[0-9]/;
export const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const dateRegExp = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
export const containsLetterRegExp = /[a-zA-Z]/;

export const containsNumbersRegExp = /[0-9]/;

export const isSixCharactersOrMore = /^.{6,}$/;

// Modified from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
export const isNameRegExp = /^[a-z ,.'-]+$/i;

// Modified from https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
export const isPhoneNumberRegExp =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// Checks if a username is alphanumeric. Modified from https://stackoverflow.com/questions/336210/regular-expression-for-alphanumeric-and-underscores
export const isUsernameRegExp = /^[a-zA-Z0-9]*$/;

export const isValidYear = /^\d{4}$/;
