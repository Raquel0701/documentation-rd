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