import {
  InitValueItemSizeError,
  InitValueItemTypeError,
  InitValueItemValueError,
  InitValueSizeError,
  InitValueTypeError,
} from './exceptions';

export const FIELD_SIZE = 9;

export function validate(value: number[][]) {
  if (!Array.isArray(value)) {
    throw new InitValueTypeError('Initialize value is not an array');
  }

  if (value.length !== FIELD_SIZE) {
    throw new InitValueSizeError('Initialize value length is not correct');
  }

  if (!value.every((e) => Array.isArray(e))) {
    throw new InitValueItemTypeError(
      'Initialize value contain incorrect type item'
    );
  }

  if (!value.every((e) => e.length === FIELD_SIZE)) {
    throw new InitValueItemSizeError(
      'Initialize value item has incorrect length'
    );
  }

  if (
    !value.every((e) =>
      e.every((e) => {
        return Number.isSafeInteger(e) && e >= 0 && e < 10;
      })
    )
  ) {
    throw new InitValueItemValueError(
      'Initialize value item contain incorrect value'
    );
  }
}
