# Design Tokens

Los Design Tokens son los valores fundamentales que constituyen la base de nuestro sistema de diseño. Utilizamos estos tokens para mantener la consistencia visual y estilística a través de todas nuestras interfaces de usuario.

## Colores

Definimos nuestros colores utilizando las siguientes variables SCSS, asegurando coherencia y facilidad en la personalización.

### Colores Primarios
- **$color-primary**: `#042b7f` - Utilizado para elementos interactivos y destacados.
- **$color-secondary**: `#95aedf` - Utilizado para acentos secundarios y elementos de fondo.

### Colores de Alerta
- **$color-success**: `#005005` - Indica éxito o una acción correcta.
- **$color-info**: `#0277bd` - Usado para información general y notificaciones.
- **$color-warning**: `#ff8f00` - Alerta a los usuarios sobre algo que necesita atención.
- **$color-danger**: `#b71c1c` - Denota errores o acciones peligrosas.
- **$color-help**: `#d50000` - Utilizado para enlaces de ayuda o emergencia.

### Hover States
- **$color-primary-hover**: `darken($color-primary, 10%)`
- **$color-secondary-hover**: `darken($color-secondary, 10%)`

## Espaciado

Utilizamos las siguientes variables SCSS para definir el espaciado sistemático:

- **$text-small**: `14px`
- **$text-medium**: `16px`
- **$text-large**: `18px`
- **$text-extra-large**: `20px`
- **$text-extra-extra-large**: `30px`

## Tipografía

Definimos nuestra tipografía con variables SCSS para facilitar el uso y la coherencia:

- **$font-roboto-thin**: 'Roboto Thin', sans-serif;
- **$font-roboto-light**: 'Roboto Light', sans-serif;
- **$font-roboto-regular**: 'Roboto', sans-serif; // Peso regular (normal)
- **$font-roboto-medium**: 'Roboto Medium', sans-serif;
- **$font-roboto-bold**: 'Roboto Bold', sans-serif;
- **$font-roboto-black**: 'Roboto Black', sans-serif;

### Tamaños de Fuente
Estas variables controlan los tamaños de fuente estándar a través de la interfaz:
- **$size-1**: `8px`
- **$size-2**: `16px`
- **$size-3**: `24px`
- **$size-4**: `32px`

## Bordes

Utilizamos variables para definir los estilos de bordes y asegurar la uniformidad:

- **$border-base**: `1px solid #E0E0E0`
- **$border-radius**: `4px`

Estos design tokens deben ser utilizados como referencia en la implementación de todos los componentes y layouts del sistema de diseño, garantizando que cada elemento se adhiera al lenguaje visual establecido de nuestra marca.
