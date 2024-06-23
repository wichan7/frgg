import { ThemeConfig } from 'antd'
import { palette } from './palette'

export const config: ThemeConfig = {
  components: {
    Layout: {
      headerBg: palette.white,
      headerColor: palette.black1,
      headerPadding: 0,
      footerBg: palette.white,
      footerPadding: 0,
    },
  },
}
