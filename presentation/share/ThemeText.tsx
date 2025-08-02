import { Text, TextProps } from 'react-native';

type textType = 'normal' | 'h1' | 'h2' | 'semibold' | 'link'

interface Props extends TextProps{
    className?: string,
    type?: textType
}

const getTextClass = (type?: textType): string => {
  switch (type) {
    case 'h1':
      return 'text-2xl font-bold';
    case 'h2':
      return 'text-xl font-semibold';
    case 'semibold':
      return 'font-semibold';
    case 'link':
      return 'text-blue-500 underline';
    case 'normal':
    default:
      return 'text-base';
  }
};

export default function ThemeText({className, type, ...rest} : Props) {
    return (
        <Text className={[`text-light-text dark:text-dark-text ${getTextClass(type)}`, 
            className
        ].join(" ")}
        {...rest}>
        </Text>
    )
}
