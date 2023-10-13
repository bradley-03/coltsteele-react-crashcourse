## Installing Material UI
Default installation:
```
npm install @mui/material @emotion/react @emotion/styled
```
Extra dependencies / addons:

Roboto Font
Material UI uses the Roboto font by default.
```
npm install @fontsource/roboto
```

Icons
```
npm install @mui/icons-material
```

## Custom Styles
The 'sx' prop is used to pass custom styles through to a component.
```
return (
    <Box
        sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
        }}
    />
)
```
