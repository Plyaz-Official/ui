import React from 'react';
import { useTranslations } from 'next-intl';
import type { AppTranslationKeys } from '@plyaz/translations';
import type { TranslationOptions } from '@plyaz/types/translations';

import type { TextProps } from '@/components/Text/Text';
import Text from '@/components/Text/Text';

interface TranslatedTextProps extends Omit<TextProps, 'children'> {
  translationKey: AppTranslationKeys;
  translationOptions?: TranslationOptions;
  namespace?: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({
  translationKey,
  translationOptions,
  namespace,
  ...textProps
}) => {
  const t = useTranslations(namespace);
  const translated = t(
    translationKey,
    translationOptions?.args as Record<string, string | number | Date>
  );
  return <Text {...textProps}>{translated}</Text>;
};

export default TranslatedText;
