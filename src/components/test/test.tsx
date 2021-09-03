import i18next from "i18next";
import { postTranslate } from "../../i18N/ApiTranslator";
import { LOCALES } from "../../i18N/test/TranslationsFooter";

const translate = (key: string) => {
  return i18next.t(key);
};

const testTranslate = (name: string) => {
  postTranslate(LOCALES);
  return (
    <div>
      {name}
      {translate("message")}
    </div>
  );
};
const Test = (props: { name: string }) => {
  return testTranslate(props.name);
};

export default Test;
