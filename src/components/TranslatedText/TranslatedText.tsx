import React from "react";
import { useTranslation } from "@plyaz/translations";
import type {  TranslationOptions } from "@plyaz/types/translations";
import type { AppTranslationKeys } from "@plyaz/translations/locales";

import type { TextProps } from "../Text/Text";
import Text from "../Text/Text";

interface TranslatedTextProps extends Omit<TextProps, "children"> {
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
  const { t } = useTranslation(namespace);
  const translated = t(translationKey, translationOptions);
  return <Text {...textProps}>{translated}</Text>;
};

export default TranslatedText; 

