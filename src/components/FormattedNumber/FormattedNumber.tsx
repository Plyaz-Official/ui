import React from 'react';
import { formatNumber } from '@plyaz/translations';

import type { TextProps } from '../Text/Text';
import Text from '../Text/Text';

interface FormattedNumberProps extends Omit<TextProps, 'children'> {
  value: number;
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
}

const FormattedNumber: React.FC<FormattedNumberProps> = ({
  value,
  formatOptions,
  locale,
  ...textProps
}) => {
  const formattedNumber = formatNumber(value, locale, formatOptions);
  return <Text {...textProps}>{formattedNumber}</Text>;
};

export default FormattedNumber;
