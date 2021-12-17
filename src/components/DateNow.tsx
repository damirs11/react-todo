import i18n from 'i18next';
function DateNow() {
  const lang = i18n.language;
  const today  = new Date();

  return (
    <div className="time">
      {today.toLocaleDateString(lang, {weekday: 'long'})}
      <br/>
      {today.toLocaleDateString(lang, {year: 'numeric', month: 'long', day: 'numeric'})}
    </div>
  );
}

export default DateNow;