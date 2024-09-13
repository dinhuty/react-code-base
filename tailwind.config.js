/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      // Font-size 8px
      8: '8px',
      '8-400-12': [
        '8px',
        {
          fontWeight: '400',
          lineHeight: '12px',
        },
      ],
      '8-500-12': [
        '8px',
        {
          fontWeight: '500',
          lineHeight: '12px',
        },
      ],
      // Font-size 9px
      9: '9px',
      // Font-size 10px
      10: '10px',
      '10-400-15': [
        '10px',
        {
          fontWeight: '400',
          lineHeight: '15px',
        },
      ],
      '10-400-normal': [
        '10px',
        {
          fontWeight: '400',
          lineHeight: 'normal',
        },
      ],
      '10-500-15': [
        '10px',
        {
          fontWeight: '500',
          lineHeight: '15px',
        },
      ],
      // Font-size 11px
      11: '11px',
      '11-600-16': [
        '11px',
        {
          fontWeight: '600',
          lineHeight: '16px',
        },
      ],
      // Font-size 12px
      12: '12px',
      '12-400-normal': [
        '12px',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      '12-400-18': [
        '12px',
        {
          fontWeight: '400',
          lineHeight: '18px',
        },
      ],
      '12-500-normal': [
        '12px',
        {
          fontWeight: '500',
          lineHeight: 'normal',
        },
      ],
      '12-500-18': [
        '12px',
        {
          fontWeight: '500',
          lineHeight: '18px',
        },
      ],
      '12-600': [
        '12px',
        {
          fontWeight: '600',
        },
      ],
      '12-600-18': [
        '12px',
        {
          fontWeight: '600',
          lineHeight: '18px',
        },
      ],
      // Font-size 13px
      13: '13px',
      '13-600-normal': [
        '13px',
        {
          fontWeight: '600',
          lineHeight: 'normal',
        },
      ],
      // Font-size 14px
      14: '14px',
      '14-400-normal': [
        '14px',
        {
          fontWeight: '400',
          lineHeight: 'normal',
        },
      ],
      '14-400-21': [
        '14px',
        {
          fontWeight: '400',
          lineHeight: '21px',
        },
      ],
      '14-400-22': [
        '14px',
        {
          fontWeight: '400',
          lineHeight: '22px',
        },
      ],
      '14-400-30': [
        '14px',
        {
          fontWeight: '400',
          lineHeight: '30px',
        },
      ],
      '14-500-normal': [
        '14px',
        {
          fontWeight: '500',
          lineHeight: 'normal',
        },
      ],
      '14-500-21': [
        '14px',
        {
          fontWeight: '500',
          lineHeight: '21px',
        },
      ],
      '14-600-normal': [
        '14px',
        {
          fontWeight: '600',
          lineHeight: 'normal',
        },
      ],
      '14-700-21': [
        '14px',
        {
          fontWeight: '700',
          lineHeight: '21px',
        },
      ],
      // Font-size 16px
      16: '16px',
      '16-600-24': [
        '16px',
        {
          fontWeight: '600',
          lineHeight: '24px',
        },
      ],
      // Font-size 17px
      17: '17px',
      '17-500-normal': [
        '17px',
        {
          fontWeight: '500',
          lineHeight: 'normal',
        },
      ],
      '17-600-normal': [
        '17px',
        {
          lineHeight: 'normal',
          fontWeight: '600',
        },
      ],
      // Font-size 20px
      20: '20px',
      '20-600-30': [
        '20px',
        {
          fontWeight: '600',
          lineHeight: '30px',
        },
      ],
      '20-700-normal': [
        '20px',
        {
          fontWeight: '700',
          lineHeight: 'normal',
        },
      ],
      '20-700-30': [
        '20px',
        {
          fontWeight: '700',
          lineHeight: '30px',
        },
      ],
      // Font-size 24px
      24: '24px',
      '24-700-36': [
        '24px',
        {
          fontWeight: '700',
          lineHeight: '36px',
        },
      ],
      // Font-size 25px
      25: '25px',
      '25-700-normal': [
        '25px',
        {
          fontWeight: '700',
          lineHeight: 'normal',
        },
      ],
      // Font-size 30px
      30: '30px',
      '30-700-45': [
        '30px',
        {
          fontWeight: '700',
          lineHeight: '45px',
        },
      ],
      // Font-size 32px
      32: '32px',
      '32-700-48': [
        '30px',
        {
          fontWeight: '700',
          lineHeight: '48px',
        },
      ],
      // Font-size 40px
      40: '40px',
      '40-700-normal': [
        '40px',
        {
          fontWeight: '700',
          lineHeight: 'normal',
        },
      ],
      '40-700-60': [
        '40px',
        {
          fontWeight: '700',
          lineHeight: '60px',
        },
      ],
      // Font-size 96px
      96: '96px',
    },
    extend: {
      colors: {
        'primary-gray': {
          50: '#F7F8F9',
          100: '#E0DAE2',
          200: '#E6E8EC',
          300: '#D4DFE3',
          400: '#AEAEB2',
          500: '#828282',
          600: '#6B7280',
          700: '#363638',
          800: '#1F2937',
          900: '#1A191B',
        },
        'primary-green': {
          400: '#7CE7AC',
          600: '#27A745',
          700: '#34C759',
          800: '#02771E',
        },
        'primary-cyan': {
          300: '#59E6F6',
          500: '#00A5CE',
        },
        'primary-red': {
          400: '#F6866A',
          500: '#DC2626',
        },
        'primary-orange': {
          300: '#FABE7A',
          400: '#F2994A',
        },
        'primary-blue': {
          400: '#1C9AE2',
          500: '#1C9AE2',
        },
        'primary-purple': {
          500: '#9B51E0',
        },
        'primary-rose': {
          500: '#EB5757',
        },
        'primary-teal': {
          500: '#07AE9A',
        },
        'primary-slate': {
          100: '#F1F5F9',
          200: '#E8ECF4',
          400: '#8591b3',
          500: '#708099',
        },
        'primary-neutral': {
          400: '#93979F',
          500: '#757575',
          700: '#363638',
          900: '#151515',
        },
        'primary-indigo': {
          500: '#7661E2',
        },
        'primary-zinc': {
          500: '#888888',
        },
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'plusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'SfProDisplay': ['SF Pro Display', 'sans-serif'],
    },
  },
  plugins: [],
};
