import React from 'react';
import type { Messages } from 'next-intl';
import { useTranslations } from 'next-intl';
import type { LeafPaths, TranslationOptions } from '@plyaz/types/translations';

interface TranslatedHtmlProps {
  translationKey: LeafPaths<Messages>;
  translationOptions?: TranslationOptions;
  namespace?: string;
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
}

/**
 * TranslatedHtml component renders translated content as HTML.
 *
 * This component is useful when your translation keys contain HTML markup,
 * such as:
 * - Links: "Click <a href='/help'>here</a> for more information"
 * - Formatting: "This is <strong>important</strong> text"
 * - Mixed content: "Welcome to <em>Our App</em> - <a href='/docs'>Learn more</a>"
 *
 * @example
 * // Translation key: "welcome_message" = "Welcome to <strong>Our App</strong>"
 * <TranslatedHtml translationKey="welcome_message" />
 *
 * @example
 * // With dynamic content and HTML
 * // Translation key: "click_here" = "Click <a href='{url}'>{text}</a>"
 * <TranslatedHtml
 *   translationKey="click_here"
 *   translationOptions={{ url: '/help', text: 'here' }}
 * />
 */
const TranslatedHtml: React.FC<TranslatedHtmlProps> = ({
  translationKey,
  translationOptions,
  namespace,
  className,
  tag = 'div',
}) => {
  const t = useTranslations(namespace);
  const translated = t(
    translationKey,
    translationOptions?.args as Record<string, string | number | Date>
  );
  return React.createElement(tag, { className }, translated);
};

export default TranslatedHtml;
