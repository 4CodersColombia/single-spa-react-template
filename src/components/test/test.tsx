import { LOCALES } from '../../i18N/test/TranslationsFooter'
import { postTranslate } from '../../i18N/ApiTranslator'
import React from 'react'
import i18next from 'i18next'

const translate = (key: string) => {
    return i18next.t(key)
}

const testTranslate = (name: string) => {
    postTranslate(LOCALES)
    return (
        <div>
            {name}
            {translate('message')}
        </div>
    )
}
const Test = (props: { name: string }) => {
    return testTranslate(props.name)
}

export default Test
