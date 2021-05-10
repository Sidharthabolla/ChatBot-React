import Chat from "./Chat";
import { useSelector } from "react-redux";
import { IntlProvider } from 'react-intl-hooks';
import locale_es from '../i18n/messages/es-SP.json';
import locale_en from '../i18n/messages/en-US.json';

const Responser = (locale) => { 
  const language = useSelector(state => state.lang)
  const data = {
    es: locale_es,
    en: locale_en,
  };
  return (
        <div>
          <IntlProvider
            locale={language}
            messages={data[language]}
            defaultLocale="es"
          > 
            <Chat/>
          </IntlProvider>
        </div>
  );
}

export default Responser;