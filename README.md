
# AFC Store App

Aplicación móvil desarrollada con **React Native**, **Expo** y **Firebase**, que permite visualizar shows y productos, gestionar un carrito de compras, y acceder a un perfil personalizado.

## 🔧 Tecnologías utilizadas

- React Native (con Expo)
- TypeScript
- React Navigation
- Redux Toolkit
- Firebase (Auth, Firestore, Storage)
- Expo Camera
- SQLite
- RTK Query
- React Native Modal
- React Native Vector Icons

## 📁 Estructura del proyecto

```
/Afc-Store
├── App.tsx
├── assets/
│   └── logo.png
│   └── icons/
├── components/
├── firebase/
│   └── firebase.ts
├── navigation/
│   └── RootNavigation.tsx
├── redux/
│   ├── slices/
│   └── store.ts
├── screens/
│   ├── Auth/
│   ├── HomeScreen.tsx
│   ├── StoreScreen.tsx
│   ├── ShowsScreen.tsx
│   ├── CartScreen.tsx
│   └── ProfileScreen.tsx
├── types/
└── README.md
```

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instalar Expo CLI si no lo tenés:

```bash
npm install -g expo-cli
```

3. Instalar dependencias del proyecto:

```bash
npm install
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npx expo install @react-navigation/native @react-navigation/native-stack
npm install @reduxjs/toolkit react-redux
npm install firebase
npm install react-native-modal
npm install react-native-vector-icons
npm install @react-native-async-storage/async-storage
npx expo install expo-camera expo-image-picker expo-file-system expo-media-library expo-document-picker
npm install @react-native-sqlite-storage/sqlite
```

## 🧠 Funcionalidades

### 🪩 Shows
- Cards con título, imagen, fecha, lugar
- Modal con descripción y botón a Google Maps
- Botón “Entradas” redirige al sitio externo

### 🛍️ Tienda
- Lectura de productos desde Firebase
- Modal con descripción y botón “Agregar al carrito”
- Validación de stock

### 🛒 Carrito
- Agrupación por producto
- Aumentar/disminuir cantidad (validando stock)
- Eliminar individualmente
- Confirmar compra (simulada)

### 👤 Perfil
- Muestra email del usuario
- Foto de perfil (editable con cámara)
- Botón cerrar sesión

### 🔐 Autenticación
- Registro e inicio de sesión con Firebase Auth REST API
- Persistencia de sesión con Redux

## 🔐 Firebase

Reemplazar los valores en `src/firebase/firebase.ts` con tus propias credenciales:

```ts
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
```

## 🚀 Ejecutar localmente

```bash
npx expo start
```

Abrí la app con Expo Go o un emulador.

---

## ✅ Próximos pasos

- Subida y vista de historial de compras
- Noticias del centro en HomeScreen
- Modo offline completo y sincronización
