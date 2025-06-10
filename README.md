
# 🎸 AFC Store - E-Commerce Mobile App

**Proyecto final - Coderhouse React Native**  
Autor: Ismael Barbé

---

## 📱 Descripción

AFC Store es una app de e-commerce para Android desarrollada en **React Native con Expo SDK 53**, que permite a los usuarios:

- Registrarse e iniciar sesión 🔐  
- Ver productos y agregarlos al carrito 🛒  
- Comprar entradas a shows 🎫  
- Ver sus compras anteriores 🧾  
- Editar su perfil con foto desde la cámara 📸  
- Cerrar sesión 🔓  

La app incluye sincronización offline con SQLite y Firebase, brindando una experiencia fluida incluso sin conexión.

---

## 🗂️ Estructura de Carpetas

```
Afc-Store/
│
├── assets/                # Imágenes e íconos
│
├── src/
│   ├── api/               # Servicios RTK Query (auth, etc.)
│   ├── components/        # Componentes reutilizables
│   ├── firebase/          # Configuración de Firebase
│   ├── navigation/        # AppNavigator, AuthNavigator, RootNavigator
│   ├── redux/
│   │   ├── slices/        # Slices (auth, cart)
│   │   └── store.ts       # Configuración de Redux Toolkit
│   ├── screens/           # Todas las pantallas
│   │   ├── AuthScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── StoreScreen.tsx
│   │   ├── CartScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ShowsScreen.tsx
│   ├── sqlite/            # Config SQLite para historial de compras
│   └── types/             # Tipos TypeScript
│
├── App.tsx                # Punto de entrada
├── app.json               # Configuración de Expo
├── eas.json               # Configuración de build EAS
└── README.md              # Este archivo
```

---

## 🔧 Tecnologías y Dependencias

### 📦 Core

```bash
npm install
```

### 📱 React Navigation

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npx expo install @react-navigation/native @react-navigation/native-stack
```

### ⚙️ Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

### 🔥 Firebase

```bash
npm install firebase
```

### 🛒 Otros

```bash
npm install react-native-modal
npm install react-native-vector-icons
npm install @react-native-async-storage/async-storage
```

### 📸 Acceso a dispositivos

```bash
npx expo install expo-camera expo-image-picker expo-file-system expo-media-library expo-document-picker
```

### 💾 SQLite

```bash
npm install @react-native-sqlite-storage/sqlite
```

---

## 🚀 Cómo correr la app

1. Cloná el repositorio:

```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instalá las dependencias:

```bash
npm install
```

3. Iniciá Expo:

```bash
npx expo start
```

> Asegurate de tener Expo Go en tu dispositivo Android para escanear el QR y probar la app.

---

## 🛠️ Build para Android

```bash
eas build --platform android --profile production
```

---

## 🧠 Opcional: Ideas para futuras versiones

- 🧾 Visualizar historial completo de compras
- 💳 Pasarela de pago integrada
- 🌐 Modo multilenguaje (es/en)
- 🧠 Dark mode
- 📍 Mapa de ubicaciones para shows

---

## ✅ Estado

🎉 App funcional y entregada  
📦 Último commit incluye autenticación, carrito, cámara, Firebase, SQLite y diseño optimizado.

---

## 🧑‍💻 Contacto

📧 ismaelbarbe@gmail.com  
🌐 [GitHub - IsmaelBH](https://github.com/IsmaelBH)
