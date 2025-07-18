import React from 'react';
import { formatDate } from '@plyaz/translations';

import type { TextProps } from '@/components/Text/Text';
import Text from '@/components/Text/Text';

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
  const formattedDate = formatDate(date, locale, formatOptions);
  return <Text {...textProps}>{formattedDate}</Text>;
};

export default FormattedDate;
