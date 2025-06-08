# AFC Store App

Aplicación móvil desarrollada con **React Native**, **Expo SDK 53** y **Firebase**, que permite visualizar shows y productos, gestionar un carrito de compras, y acceder a un perfil personalizado.

## 🔧 Tecnologías utilizadas

* Expo SDK 53
* React Native (con TypeScript)
* React Navigation
* Redux Toolkit
* Firebase (Auth, Firestore, Storage)
* SQLite
* React Native Modal
* React Native Vector Icons

## 📁 Estructura del proyecto

```
/Afc-Store
├── App.tsx
├── assets/
│   └── logo.png
├── src/
│   ├── api/
│   │   └── authApi.ts
│   ├── components/
│   ├── firebase/
│   │   └── firebase.ts
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── RootNavigation.tsx
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   └── cartSlice.ts
│   │   └── store.ts
│   ├── screens/
│   │   ├── CartScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ShowsScreen.tsx
│   │   └── StoreScreen.tsx
│   └── types/
│       └── index.ts
├── app.json
├── package.json
└── README.md
```

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instalar dependencias necesarias:

```bash
npm install
```

> Asegurate de tener Expo SDK 53 instalado. Si usás Expo Go, debe ser compatible con SDK 53.

### Dependencias claves

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npx expo install @react-navigation/native @react-navigation/native-stack
npm install @reduxjs/toolkit react-redux
npm install firebase
npm install react-native-modal react-native-vector-icons
npm install @react-native-async-storage/async-storage
npm install expo-camera expo-image-picker expo-file-system
npm install expo-sqlite
npm install tslib
```

## 🫠 Funcionalidades

### 🎤 Shows

* Lectura desde Firestore
* Cards con imagen, fecha y botón a `ticketUrl`
* Modal con descripción y botón a ubicación Google Maps

### 🏢 Tienda

* Productos desde Firestore
* Agregar al carrito si hay stock
* Modal con detalle y botón de agregar

### 🛒 Carrito

* Ver productos seleccionados
* Incrementar/disminuir cantidad o eliminar
* Calcular total

### 👤 Perfil

* Login y registro con Firebase Auth (REST API + RTK Query)
* Foto de perfil con cámara
* Historial de compras por usuario autenticado
* Persistencia con SQLite y sincronización offline

## 🔐 Firebase

Se utiliza Firebase para:

* Autenticación con email y contraseña
* Firestore para productos, shows y pedidos
* Storage para foto de perfil

### Configuración `firebase.ts`

```ts
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  databaseURL: "..."
};
```

## 🚀 Ejecución

```bash
npx expo start
```

* Usar Expo Go para escanear el QR en un dispositivo físico.

## 🔧 Próximas funcionalidades

* Notificaciones push
* Panel de administrador
* Edición de perfil
* Soporte multilenguaje
