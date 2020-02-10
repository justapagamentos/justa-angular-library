/**
 * @description Check if a value is empty
 */
export function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}

/**
 * @description remove all non digits caracters
 */
export function removeNonDigits(data: string): string {
  return String(data).replace(/\D/g, "");
}
