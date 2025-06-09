# AFC Store App

Aplicación móvil desarrollada con **React Native**, **Expo** y **Firebase**, que permite visualizar shows y productos, gestionar un carrito de compras, autenticarse y modificar el perfil con cámara integrada.

---

## 🔧 Tecnologías utilizadas

- React Native (con Expo SDK 53)
- TypeScript
- Redux Toolkit
- React Navigation
- Firebase Auth + Firestore
- AsyncStorage
- Expo Camera & Image Picker
- React Native Modal
- Expo Vector Icons

---

## 📁 Estructura del proyecto

```
/Afc-Store
├── App.tsx
├── assets/
│   ├── logo.png
│   └── icons/
├── src/
│   ├── api/
│   ├── components/
│   ├── firebase/
│   ├── navigation/
│   ├── redux/
│   ├── screens/
│   └── types/
└── README.md
```

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instalar dependencias:

```bash
npm install
```

3. Instalar librerías necesarias con Expo:

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install @react-native-async-storage/async-storage
npx expo install expo-camera expo-image-picker expo-file-system
npx expo install @expo/vector-icons
npm install @reduxjs/toolkit react-redux
npm install firebase
npm install react-native-modal
```

---

## 🚀 Ejecución del proyecto

```bash
npx expo start
```

Abrí el proyecto en tu dispositivo con **Expo Go** o en el emulador Android/iOS.

---

## 🧠 Funcionalidades

### 🎫 Shows
- Lectura desde Firestore
- Imagen, título, fecha, descripción y botón a Google Maps
- Link a tickets externos

### 🛒 Tienda
- Lectura de productos desde Firestore
- Modal con imagen, descripción y botón "Agregar al carrito"
- Verificación de stock

### 🧺 Carrito
- Sumar y restar cantidades de productos
- Eliminar producto individual
- Confirmar compra con alerta
- Cálculo total dinámico

### 👤 Perfil
- Foto de perfil predeterminada (logo)
- Acceso a la cámara para cambiar la imagen
- Imagen persistente (guardada en local)
- Visualización del email autenticado
- Link "Cerrar sesión" que redirige al login

---

## 🔐 Firebase

El proyecto utiliza Firebase para:

- Autenticación con email/contraseña (vía REST API)
- Firestore para productos y shows
- Almacenamiento de imágenes en local

Editá `src/firebase/firebase.ts` si querés usar tus propias credenciales:

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

---

## 📸 Permisos necesarios

La app solicita:

- Acceso a la cámara para cambiar la imagen de perfil
- Acceso al almacenamiento para guardar la imagen localmente

---

## 🧪 Próximas mejoras

- Guardar imágenes de perfil en Firebase Storage
- Historial de compras por usuario autenticado
- Filtros por categoría en tienda
- Animaciones sutiles con `react-native-reanimated`

---

## 👨‍💻 Autor

Desarrollado por Ismael Barbé.  
GitHub: [IsmaelBH](https://github.com/IsmaelBH)