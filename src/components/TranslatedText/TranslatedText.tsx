import React from 'react';
import type { Messages } from 'next-intl';
import { useTranslations } from 'next-intl';
import type { LeafPaths, TranslationOptions } from '@plyaz/types/translations';

import type { TextProps } from '../../components/Text/Text';
import { Text } from '../../components/Text/Text';

interface TranslatedTextProps extends Omit<TextProps, 'children'> {
  translationKey: LeafPaths<Messages>;
  translationOptions?: TranslationOptions;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({
  translationKey,
  translationOptions,
  ...textProps
}) => {
  const t = useTranslations();
  const translated = t(
    translationKey,
    translationOptions?.args as Record<string, string | number | Date>
  );
  return <Text {...textProps}>{translated}</Text>;
};

export default TranslatedText;
