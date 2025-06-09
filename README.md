
# AFC Store App 🎸🛒

Aplicación mobile desarrollada con **React Native + Expo**, como entrega final para el curso de desarrollo mobile en Coderhouse.

## 📱 Funcionalidades principales

- Registro e inicio de sesión usando **Firebase Auth** (REST API + RTK Query)
- Pantalla de inicio con navegación a:
  - **Shows** (con detalles, ubicación y link a tickets)
  - **Tienda** con productos desde Firestore y lógica de carrito
  - **Perfil** editable, con cambio de foto usando cámara
  - **Carrito** persistente y funcional
- Carrito de compras con:
  - Agregado de productos desde modal
  - Suma y resta de unidades con validación por stock
  - Eliminación individual por ítem
  - Confirmación de compra con `Alert`
- Cámara integrada para cambiar la imagen de perfil
- Persistencia de la imagen con `AsyncStorage` y `expo-file-system`

## 🧰 Tecnologías y librerías utilizadas

- **Expo SDK 53**
- **React Native**
- **TypeScript**
- **React Navigation**
- **Redux Toolkit + RTK Query**
- **Firebase (Auth, Firestore, Storage)**
- **expo-image-picker**
- **expo-file-system**
- **@react-native-async-storage/async-storage**
- **@expo/vector-icons**
- **@react-navigation/native-stack**

## 🗂️ Estructura del proyecto

```
Afc-Store/
├── src/
│   ├── api/                  # RTK Query para Firebase Auth REST
│   ├── components/           # Reutilizables
│   ├── constants/            # Constantes (e.g., storage keys)
│   ├── firebase/             # Configuración Firebase
│   ├── navigation/           # AppNavigator, AuthNavigator, RootNavigator
│   ├── redux/                # store.ts y slices
│   ├── screens/              # Home, Store, Shows, Cart, Profile, Auth
│   └── types/                # Tipado de datos
├── assets/                   # Imágenes (logo, íconos)
├── App.tsx
└── README.md
```

## 🚀 Cómo correr el proyecto

1. Clonar el repo:
```bash
git clone https://github.com/IsmaelBH/Afc-Store.git
cd Afc-Store
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar Expo:
```bash
npx expo start
```

4. Escanear el QR con Expo Go o correr en emulador.

---

## 📷 Permisos requeridos

- Cámara (`expo-image-picker`)  
- Acceso al almacenamiento para guardar imagen localmente

---

## 🔐 Configuración de Firebase

Ya se encuentra incluida en `src/firebase/firebase.ts` con los servicios:

- `auth` → autenticación
- `db` → Firestore
- `storage` → para futuras expansiones
