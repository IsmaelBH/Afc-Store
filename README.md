# AFC Store App

Aplicación móvil desarrollada con **React Native**, **Expo** y **Firebase**, que permite visualizar shows y productos, gestionar un carrito de compras, y acceder a un perfil personalizado.

## 🔧 Tecnologías utilizadas

- React Native (con Expo)
- TypeScript
- React Navigation
- Redux Toolkit
- Firebase Realtime Database
- React Native Modal
- React Native Vector Icons

## 📁 Estructura del proyecto

```
/Afc-Store
├── App.tsx
├── assets/
│   └── logo.png
├── components/
│   ├── ProductCard.tsx
│   └── ShowCard.tsx
├── firebase/
│   └── firebaseConfig.ts
├── navigation/
│   └── MainNavigator.tsx
├── redux/
│   ├── cartSlice.ts
│   └── store.ts
├── screens/
│   ├── CartScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── ShowsScreen.tsx
│   └── StoreScreen.tsx
├── types/
│   └── index.ts
└── README.md
```

## 📦 Instalación

1. Clonar el repositorio o copiar todos los archivos al proyecto local:

```bash
git clone https://github.com/tu-usuario/Afc-Store.git
cd Afc-Store
```

2. Instalar dependencias necesarias para React Native + Expo + Firebase:

```bash
npx create-expo-app@latest .
```

3. Instalar todas las dependencias del proyecto:

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npx expo install @react-navigation/native @react-navigation/native-stack
npm install @reduxjs/toolkit react-redux
npm install firebase
npm install react-native-modal
npm install react-native-vector-icons
```

> Asegurate de reiniciar el servidor si actualizás dependencias críticas.

## 🧠 Funcionalidades

### Shows
- Lectura de datos desde Firebase (imageUrl, title, date, ticketUrl, location)
- Cards con botón "Entradas" que redirige a `ticketUrl`
- Modal con descripción + botón a ubicación en Google Maps

### Tienda
- Lectura de productos desde Firebase (title, description, cost, imageUrl, stock)
- Agregar productos al carrito
- Modal con descripción + botón “Agregar al carrito”

### Carrito
- Visualización de productos agregados
- Aumentar/disminuir cantidad o eliminar
- Mostrar total
- Lógica de stock

### Perfil
- Autenticación Firebase
- Datos básicos y futura integración con cámara para foto de perfil

## 🔐 Firebase

El proyecto está configurado con Firebase. Podés editar `firebase/firebaseConfig.ts` con tus propias credenciales si lo necesitás.

```ts
export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  databaseURL: "https://your-app-default-rtdb.firebaseio.com"
};
```

## 🚀 Ejecución del proyecto

Para correr el proyecto en local:

```bash
npx expo start
```

Abrí el proyecto en el simulador o dispositivo móvil con Expo Go.

---

## 🧪 Próximas funcionalidades

- Subida y edición de foto de perfil
- Registro y autenticación de usuario
- Persistencia del carrito con Firebase
- Sección de noticias del centro