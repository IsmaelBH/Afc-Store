# AFC Store App

Aplicación móvil de e-commerce desarrollada con React Native y Expo, destinada a una tienda de instrumentos musicales y merchandising de AFC.

## Funcionalidades

- 🔐 Registro e inicio de sesión con Firebase Auth.
- 🛍️ Visualización de productos y shows desde Firebase Firestore.
- 🛒 Carrito de compras con Redux Toolkit.
- 📸 Subida de foto de perfil con cámara y Firebase Storage.
- 🗂️ Historial de compras por usuario autenticado.
- 📶 Sincronización offline y persistencia de datos con SQLite.
- 🌐 Navegación con React Navigation.
- 💅 Diseño personalizado con íconos e imágenes propias.
- 🧾 Documentación completa.

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el proyecto con Expo:
```bash
npx expo start
```

## Dependencias necesarias

```bash
# Expo y React Native
npx create-expo-app@latest
npm install expo react-native

# Navegación
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# Redux Toolkit
npm install @reduxjs/toolkit react-redux

# RTK Query para Firebase REST
npm install @reduxjs/toolkit-query react

# Firebase
npm install firebase

# SQLite para persistencia
npx expo install expo-sqlite

# Expo Camera y FileSystem
npx expo install expo-camera expo-file-system

# Firebase Storage con imágenes
npx expo install expo-media-library

# Íconos
npx expo install @expo/vector-icons

# TypeScript (si aún no lo tenés)
npm install --save-dev typescript
```

## Configuración de Firebase

Crea un proyecto en [Firebase](https://console.firebase.google.com/) y configura:

- Authentication (modo Email/Password).
- Firestore Database.
- Storage (para imágenes de perfil).
- Realtime Database (opcional si usás para historial).

Copia tu configuración en `src/firebase/firebase.ts`.

---

## Estructura del proyecto

```
src/
│
├── api/                  # RTK Query services
├── assets/               # Imágenes, íconos y logo
├── components/           # Componentes reutilizables
├── firebase/             # Configuración Firebase
├── navigation/           # Archivos de navegación
├── redux/                # Store, slices, hooks
├── screens/              # Pantallas (Home, Store, Shows, etc)
├── types/                # Tipos globales
└── App.tsx               # Entry point
```

---

## Autor

- Desarrollado por **Ismael Barbé**
- Proyecto final para **Coderhouse React Native** 🧑‍💻