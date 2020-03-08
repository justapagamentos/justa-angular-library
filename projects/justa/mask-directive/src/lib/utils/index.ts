const CPF_REGEX = new RegExp(/(?!(\d)\1{2}.\1{3}.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}\-\d{2}/gm);
const CNPJ_REGEX = new RegExp(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/g);

// CPF Utils (length dot indexes and hyphen index)
const CPF_LENGTH = 11;
const CPF_DOT_INDEXES = [2, 5];
const CPF_HYPHEN_INDEX = [8];

// CNPJ Utils
const CNPJ_LENGTH = 14;
const CNPJ_DOT_INDEXES = [1, 4];
const CNPJ_SLASH_INDEXES = [7];
const CNPJ_HYPHEN_INDEX = [11];

/**
 * @description Returns a Brazilian CPF formated
 */
export const formatCpf = (cpf: string): string => {
  const cpfFormated = removeAllSpecialChar(cpf);
  return cpfFormated
  .slice(0, CPF_LENGTH)
  .split('')
  .reduce((acc, cpf, index) => {
    const result = `${acc}${cpf}`;
    if (!isLastChar(index, cpfFormated)) {
      if (CPF_DOT_INDEXES.indexOf(index) >= 0) return `${result}.`;
      if (CPF_HYPHEN_INDEX.indexOf(index) >= 0) return `${result}-`;
    }
    return result;
  }, '')
}

/**
 * @description Returns a Brazilian CNPJ formated
 */
export const formatCnpj = (cnpj: string): string => {
  const digits = removeAllSpecialChar(cnpj);

  return digits
    .slice(0, CNPJ_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (CNPJ_DOT_INDEXES.includes(index)) return `${result}.`;
        if (CNPJ_SLASH_INDEXES.includes(index)) return `${result}/`;
        if (CNPJ_HYPHEN_INDEX.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}

const removeAllSpecialChar = (input: string | number): string => {
  return String(input).replace(/[^\d]/g, '');
}

const isLastChar = (index: number, input: string): boolean => {
  return index === input.length - 1;
}
