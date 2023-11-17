export function meta() {
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    )
}

export default function App() {
    return (
        <Document>
            <h1>Hola Mundo</h1>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang='es'>
            <head>
                
            </head>
            <body>
                { children }
            </body>
        </html>
    )
}