import { defaultTheme } from 'react-admin';
// taken from https://github.com/marmelab/react-admin/blob/master/examples/demo/src/themes/softTheme.ts
export const softLightTheme = {
	palette: {
		primary: {
			main: '#4f3cc9',
		},
		secondary: {
			light: '#5f5fc4',
			main: '#283593',
			dark: '#001064',
			contrastText: '#fff',
		},
		background: {
			default: '#fcfcfe',
		},
		mode: 'light' as 'light',
	},
	shape: {
		borderRadius: 10,
	},
	sidebar: {
		width: 200,
	},
	components: {
		...defaultTheme.components,
		RaMenuItemLink: {
			styleOverrides: {
				root: {
					borderLeft: '3px solid #fff',
					'&.RaMenuItemLink-active': {
						borderLeft: '3px solid #4f3cc9',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				elevation1: {
					boxShadow: 'none',
				},
				root: {
					border: '1px solid #e0e0e3',
					backgroundClip: 'padding-box',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				colorSecondary: {
					color: '#808080',
					backgroundColor: '#fff',
				},
			},
			defaultProps: {
				elevation: 1,
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: '#f5f5f5',
				},
				barColorPrimary: {
					backgroundColor: '#d7d7d7',
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:last-child td': { border: 0 },
				},
			},
		},
	},
};