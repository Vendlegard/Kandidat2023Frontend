import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const handlePress = () => {
        const newLang = i18n.language === 'en' ? 'sv' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <Text>{t('switchLanguage')}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LanguageSwitcher;
