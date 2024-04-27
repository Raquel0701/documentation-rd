---
sidebar: auto
---

# Components

## Button

El componente `Button` se utiliza para representar botones en la interfaz de usuario.

### Props

- **variation**: `String`

  - Tipo: `String`
  - Valores posibles: `primary`, `secondary`, `success`, `info`, `warning`, `help`, `danger`, `contrast`
  - Valor predeterminado: `primary`

- **size**: `String`
  - Tipo: `String`
  - Valores posibles: `small`, `medium`, `large`
  - Valor predeterminado: `medium`


### Ejemplo de Implementación

![Ejemplo de Implementación](../assets/button-size.png)
```vue
<template>
  <div>
    <h1>Buttons</h1>
    <ButtonRd severity="primary" @accion="handleAccionClick">Primary</ButtonRd>
    <ButtonRd severity="secondary" @accion="handleAccionClick">Secondary</ButtonRd>
    <ButtonRd severity="success" @accion="handleAccionClick">Success</ButtonRd>
    <ButtonRd severity="info" @accion="handleAccionClick">Info</ButtonRd>
    <ButtonRd severity="warning" @accion="handleAccionClick">Warning</ButtonRd>
    <ButtonRd severity="help" @accion="handleAccionClick">Help</ButtonRd>
    <ButtonRd severity="danger" @accion="handleAccionClick">Danger</ButtonRd>
    <ButtonRd severity="contrast" @accion="handleAccionClick">Contrast</ButtonRd>
    <br />
    <button class="button-rd button-primary">Botón Predeterminado</button>
    <button class="button-rd button-primary button-sm">Botón Pequeño</button>
    <button class="button-rd button-primary button-lg">Botón Grande</button>
    <button class="button-rd button-primary button-xl">
      Botón Extra Grande
    </button>
    <button class="button-rd button-primary button-xxl">
      Botón Extra Extra Grande
    </button>
  </div>
</template>

<script>
import ButtonRd from "@/components/ButtonRd.vue";

export default {
  components: {
    ButtonRd,
  },
  methods: {
    handleAccionClick() {
      console.log("Botón con acción clicado");
    },
  },
};
</script>
```

## Heading

El componente `Heading` se utiliza para mostrar encabezados de diferentes niveles en la interfaz de usuario.

### Props

- **level**: `Number`
  - Tipo: `Number`
  - Valores posibles: `1`, `2`, `3`
  - Valor predeterminado: `1`

### Ejemplo de Implementación

```vue
<template>
  <div>
    <HeadingRd level="1">Encabezado de Nivel 1</HeadingRd>
    <HeadingRd level="2">Encabezado de Nivel 2</HeadingRd>
    <HeadingRd level="3">Encabezado de Nivel 3</HeadingRd>
  </div>
</template>

<script>
import HeadingRd from "@/components/HeadingRd.vue";

export default {
  components: {
    HeadingRd,
  },
};
</script>
```

## Breadcrumb

El componente `BreadcrumbRd` se utiliza para proporcionar una navegación de migas de pan, que ayuda a los usuarios a entender y explorar la estructura de navegación de un sitio web de manera eficiente.

### Props

- **items**: `Array`
  - Tipo: `Array`
  - Descripción: Un arreglo de objetos que representa cada miga de pan.
  - Cada objeto contiene:
    - `label`: `String` - El texto que se muestra para la miga de pan.
    - `url`: `String` - El enlace al que dirige la miga de pan.

### Ejemplo de Implementación

```vue
<template>
  <div>
    <BreadcrumbRd :items="breadcrumbItems" />
  </div>
</template>

<script>
import BreadcrumbRd from '@/components/BreadcrumbRd.vue';

export default {
  components: {
    BreadcrumbRd
  },
  data() {
    return {
      breadcrumbItems: [
        { label: 'Inicio', url: '/' },
        { label: 'Sección 1', url: '/seccion1' },
        { label: 'Página Actual', url: '/seccion1/pagina-actual' }
      ]
    };
  }
};
</script>

```


## InputRd

El componente `InputRd` es un campo de entrada personalizable que se ajusta a diferentes tamaños y ofrece variaciones de tipo para adaptarse a distintas necesidades de datos en formularios.

### Props

- **id**: `String`
  - Identificador único para el elemento input y su etiqueta correspondiente.
  
- **label**: `String`
  - Etiqueta descriptiva que se muestra junto al campo de entrada.
  
- **type**: `String`
  - Define el tipo de input. Ejemplos comunes incluyen "text", "password", "email", etc.
  - Valor predeterminado: `"text"`
  
- **placeholder**: `String`
  - Texto de guía que se muestra en el campo de entrada cuando está vacío.
  
- **size**: `String`
  - Ajusta el tamaño visual del campo de entrada.
  - Valor predeterminado: `"md"`
  - El tamaño afecta las clases CSS aplicadas para el diseño del campo.

### Data

- **inputValue**: `String`
  - Modelo de datos que captura y almacena el valor ingresado por el usuario en el campo de entrada.

### Ejemplo de Implementación

```vue
<template>
  <div>
      <InputRd
      id="input-small"
      label="Small Input"
      type="text"
      placeholder="Small size"
      size="sm"
    />
     Solo Style
    <input class="input-rd input-md">
  </div>
</template>

<script>
import InputRd from '@/components/InputRd.vue';

export default {
    components: {
        InputRd
  }
};
</script>
```

## TextareaRd

El componente `TextareaRd` proporciona un área de texto expansible para entradas de texto largo, como descripciones o comentarios. Este componente permite configurar diferentes tamaños para adaptarse a diferentes necesidades de la interfaz de usuario.

### Props

- **id**: `String`
  - Identificador único para el elemento textarea y su etiqueta correspondiente.
  
- **label**: `String`
  - Etiqueta descriptiva que se muestra junto al área de texto.
  
- **placeholder**: `String`
  - Texto de guía que se muestra en el área de texto cuando está vacío.

- **size**: `Number`
  - Ajusta el tamaño visual del área de texto.
  - Valores posibles: `1`, `2`, `3`, `4`
  - Estos valores generalmente corresponden a diferentes alturas o configuraciones de estilo para el área de texto.

### Ejemplo de Implementación

```vue
<template>
  <div>
      <TextareaRd
      id="myTextarea1"
      label="Descripción Pequeña"
      placeholder="Ingresa tu descripción aquí"
      size="1"
    />
    <TextareaRd
      id="myTextarea2"
      label="Descripción Mediana"
      placeholder="Ingresa tu descripción aquí"
      size="2"
    />
    <TextareaRd
      id="myTextarea3"
      label="Descripción Grande"
      placeholder="Ingresa tu descripción aquí"
      size="3"
    />
    <TextareaRd
      id="myTextarea4"
      label="Descripción Extra Grande"
      placeholder="Ingresa tu descripción aquí"
      size="4"
    />
  </div>
</template>

<script>
import TextareaRd from '@/components/TextareaRd.vue';

export default {
    components: {
        TextareaRd
  }
};
</script>

```


## ModalRd

El componente `ModalRd` se utiliza para mostrar una ventana modal sobre el contenido principal de la página. Este modal es flexible y permite personalizaciones en tamaño.

### Props

- **show**: `Boolean`
  - **Tipo**: `Boolean`
  - **Descripción**: Controla la visibilidad del modal.
  - **Valor predeterminado**: `false`

- **size**: `String`
  - **Tipo**: `String`
  - **Descripción**: Define el tamaño del modal.
  - **Valores posibles**: `sm` (pequeño), `md` (mediano), `lg` (grande), `xl` (extra grande)
  - **Valor predeterminado**: `md`

### Eventos

- **close**
  - **Descripción**: Se emite cuando el modal se cierra, ya sea por acción del usuario o de manera programática.

### Slots

- **default**
  - **Descripción**: Aquí se puede incluir cualquier contenido HTML o componentes Vue que se deseen mostrar dentro del modal.

### Ejemplos de Implementación


```vue
<template>
  <div>
        <!-- Modal normal -->

    <ButtonRd severity="primary" @accion="showModal = true"> Abrir Modal </ButtonRd>
    <ModalRd :show="showModal" @close="showModal = false">
      <h2>¡Este es un modal!</h2>
      <p>Aquí puedes agregar cualquier contenido que desees mostrar dentro del modal.</p>
    </ModalRd>

    <!-- Modal pequeño -->

    <ButtonRd severity="primary" @accion="showSmallModal = true"> Mostrar Modal Pequeño </ButtonRd>
    <ModalRd :show="showSmallModal" :size="sizeSm" @close="showSmallModal = false">
      <h2>¡Este es un modal!</h2>
      Contenido del Modal Pequeño
    </ModalRd>
    
    <!-- Modal grande -->
    
    <ButtonRd severity="primary" @accion="showLargeModal = true"> Mostrar Modal Grande </ButtonRd>
    <ModalRd :show="showLargeModal" :size="sizeLg" @close="showLargeModal = false">
      <h2>¡Este es un modal!</h2>
      Contenido del Modal Grande
    </ModalRd>
    
    <!-- Modal extra grande -->
    <ButtonRd severity="primary" @accion="showExtraLargeModal = true"> Mostrar Modal Extra Grande </ButtonRd>
    <ModalRd :show="showExtraLargeModal" :size="sizeXl" @close="showExtraLargeModal = false">
      <h2>¡Este es un modal!</h2>
      Contenido del Modal Extra Grande
    </ModalRd>
</template>

<script>
import ModalRd from '@/components/ModalRd.vue';
import ButtonRd from '@/components/ButtonRd.vue';

export default {
    components: {
        ModalRd,
        ButtonRd,
  },
  data() {
    return {
      showModal: false,
      showSmallModal: false,
      showLargeModal: false,
      showExtraLargeModal: false,
    };
  },
};
</script>

```