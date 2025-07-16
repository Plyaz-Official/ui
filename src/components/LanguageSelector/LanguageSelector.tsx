import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@plyaz/ui';

type LanguageSelectorProps = {
  locale: string;
  locales: string[];
  onChange: (locale: string) => void;
  getLabel: (locale: string) => string;
  disabled?: boolean;
};

export default function LanguageSelector({
  locale,
  locales,
  onChange,
  getLabel,
  disabled,
}: LanguageSelectorProps) {
  return (
    <Select value={locale} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder={getLabel(locale)} />
      </SelectTrigger>
      <SelectContent>
        {locales.map(cur => (
          <SelectItem key={cur} value={cur}>
            {getLabel(cur)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
