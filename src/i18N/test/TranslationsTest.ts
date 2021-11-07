import Translator from '../Translator'
export const translations = {
    en: {
        TEST: {
            loadbundle: 'Load Bundle {{lang}}',
            message: 'Hello!! - ENssssssss',
            term: 'I accept {{1}} {{0}}.',
            tos: 'Term of Service',
        },
    },
}
type Translations = keyof typeof translations[keyof typeof translations]
type TranslationsKeys =
    keyof typeof translations[keyof typeof translations][Translations]

const language = navigator.language.slice(0, 2)
export default class TestTranslations {
    private constructor() {
        Translator.getInstance(translations, 'TEST')
    }
    public translate(nameSpace: Translations, key: TranslationsKeys): string {
        return Translator.translate(nameSpace, key)
    }
    public getTranslations(): typeof translations[keyof typeof translations] {
        return translations[language]
    }
    public static getInstance(): TestTranslations {
        return new TestTranslations()
    }
}
