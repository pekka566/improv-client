export const translations = {
  fi: {
    locale: 'fi',
    messages: {
      about: 'Tietoja',
      contributors: 'Tekijät',
      home: 'Alkuun',
      improvTrainings: 'Improharjoituksia',
      musical: 'Musiikki',
      warmups: 'Lämpät'
    }
  },
  en: {
    locale: 'en-US',
    messages: {
      about: 'About',
      contributors: 'Contributors',
      home: 'Home',
      improvTrainings: 'Improv rehearsals'
    }
  }
};

export const translate = (pkey, pmessages) => {
  let messages = pmessages;
  if (!messages) {
    messages = translations.fi.messages;
  }
  const key = Object.keys(messages).find(key => key === pkey);
  return translations.fi.messages[key];
};

export default translations;
