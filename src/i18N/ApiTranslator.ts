import i18next from 'i18next'

const getResourcesLanguages = (resources: {
    [key: string]: Record<string, string>
}) => {
    const keysLanguages = Object.keys(resources)
    const languages = keysLanguages.map((item) => {
        return { [item]: { translation: resources[item] } }
    })
    return languages.reduce((acum, current) => {
        return {
            ...acum,
            ...current,
        }
    }, {})
}
export const postTranslate = async (resources: {
    [key: string]: Record<string, string>
}) => {
    console.log(getResourcesLanguages(resources))
    await i18next.init({
        debug: true,
        lng: navigator.language,
        resources: getResourcesLanguages(resources),
    })
}
