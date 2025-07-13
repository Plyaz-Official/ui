import React from 'react';
import { useFormatting } from '@plyaz/translations/frontend';

import type { TextProps } from '../Text/Text';
import Text from '../Text/Text';

interface FormattedDateProps extends Omit<TextProps, 'children'> {
  date: Date | string | number;
  formatOptions?: Intl.DateTimeFormatOptions;
  locale?: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  formatOptions,
  locale,
  ...textProps
}) => {
  const { formatDate } = useFormatting(locale);
  const formattedDate = formatDate(date, formatOptions);
  return <Text {...textProps}>{formattedDate}</Text>;
};

export default FormattedDate;
