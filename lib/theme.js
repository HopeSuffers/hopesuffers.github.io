import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },

  styles: {
    global: {
      body: {
        bg: '#24273a', // Base
        color: '#cad3f5' // Text
      }
    }
  },

  colors: {
    brand: {
      base: '#24273a',
      mantle: '#1e2030',
      crust: '#181926',

      surface0: '#363a4f',
      surface1: '#494d64',
      surface2: '#5b6078',

      text: '#cad3f5',
      subtext: '#a5adcb',

      teal: '#8bd5ca',
      blue: '#8aadf4',
      mauve: '#c6a0f6',
      pink: '#f5bde6'
    }
  },

  components: {
    Link: {
      baseStyle: {
        color: '#8aadf4',
        _hover: {
          textDecoration: 'none',
          color: '#c6a0f6'
        }
      }
    }
  }
})

export default theme
