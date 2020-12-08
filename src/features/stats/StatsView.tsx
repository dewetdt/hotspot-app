import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import Box from '../../components/Box'
import Card from '../../components/Card'
import Text from '../../components/Text'
import { StatsState } from '../../store/stats/statsSlice'
import { useColors } from '../../theme/themeHooks'

type Props = { statsState: StatsState }

const StatsView = ({ statsState }: Props) => {
  const { primaryMain } = useColors()
  const { t } = useTranslation()

  if (statsState.loading !== 'succeeded') {
    return (
      <ActivityIndicator color={primaryMain} accessibilityLabel="Loading" />
    )
  }
  return (
    <Box>
      <Text variant="header">{t('stats.title')}</Text>
      <Card backgroundColor="white" variant="elevated">
        <ScrollView>
          <Text variant="body2Light" color="black">
            {JSON.stringify(statsState.data, null, 2)}
          </Text>
        </ScrollView>
      </Card>
    </Box>
  )
}

export default StatsView