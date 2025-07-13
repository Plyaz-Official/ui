import React from 'react';
import { useFormatting } from '@plyaz/translations/frontend';

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
  const { formatNumber } = useFormatting(locale);
  const formattedNumber = formatNumber(value, formatOptions);
  return <Text {...textProps}>{formattedNumber}</Text>;
};

export default FormattedNumber;
