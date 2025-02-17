# 📌 Stack Tecnológico para TAppXI  
📅 **Última actualización:** Febrero 2025 | ✅ Compatibilidad probada con **React 18** y **TypeScript 5.3+**  

## **1️⃣ Core & Framework**  
| Tecnología              | Versión  | Notas de Compatibilidad |
|-------------------------|---------|-------------------------|
| **React**              | 18.2.0  | Versión estable LTS (Soporte hasta 2025). |
| **Vite**               | 5.2.12  | Bundler rápido con soporte nativo para TypeScript y PWA. |
| **TypeScript**         | 5.3.3   | Última versión estable con mejoras en inferencia de tipos. |
| **Redux Toolkit**      | 2.2.1   | Incluye RTK Query (1.2.7 integrado). Compatible con React 18. |
| **React Router DOM**   | 6.22.3  | Última versión minor estable (evitar 6.21.x por bug de memorización). |

## **2️⃣ UI/UX & Componentes**  
| Tecnología               | Versión  | Notas de Compatibilidad |
|--------------------------|---------|-------------------------|
| **MUI (Material-UI)**   | 5.14.19 | Requiere Emotion 11.11.2 (no usar Emotion 12+ aún). |
| **Emotion**            | 11.11.2 | Versión estable para MUI. |
| **react-map-gl**       | 7.1.3   | Compatible con Mapbox GL JS 3.1.2 (no actualizar a Mapbox v4 sin migrar estilos). |
| **Framer Motion**      | 10.18.0 | Soporta React 18 y Strict Mode. |

## **3️⃣ Funcionalidades Móviles (PWA)**  
| Tecnología              | Versión  | Notas de Compatibilidad |
|-------------------------|---------|-------------------------|
| **Vite Plugin PWA**    | 0.17.4  | Configura Workbox 7.0.0 (evitar 0.18.x por cambios breaking en configuración). |
| **Workbox**            | 7.0.0   | Estrategias de caching preconfiguradas (no usar v6 por EOL). |
| **Web Push API**       | N/A     | API del navegador. Requiere HTTPS en producción. |
| **IndexedDB**         | 3.0.15  | Usar librería idb para mejor manejo de transacciones. |

## **4️⃣ Rendimiento & Optimización Móvil**  
| Tecnología             | Versión  | Notas de Compatibilidad |
|------------------------|---------|-------------------------|
| **React.lazy + Suspense** | N/A   | Parte de React 18. |
| **react-virtualized**  | 9.22.3  | Alternativa ligera a react-window (soporta árboles grandes). |
| **Vite Imagemin**      | 3.7.0   | Optimiza imágenes a WebP/AVIF (no usar v4+ por incompatibilidad con Vite 5). |

## **5️⃣ Integraciones Clave**  
| Tecnología             | Versión  | Notas de Compatibilidad |
|------------------------|---------|-------------------------|
| **Mercado Pago JS SDK** | 2.0.28 | Última versión ESM (evitar 1.x por deprecated). |
| **Firebase SDK (Web)** | 10.11.1 | Modular (compatible con árbol shaking). |
| **Socket.io Client**   | 4.7.5   | Evitar 4.8.0+ por bug en reconexión. |

## **6️⃣ Testing & Calidad**  
| Tecnología                 | Versión  | Notas de Compatibilidad |
|----------------------------|---------|-------------------------|
| **Jest**                  | 29.7.0  | Configurar `testEnvironment: "jsdom"`. |
| **React Testing Library** | 14.2.1  | Compatible con React 18 y TypeScript 5.3. |
| **Cypress**               | 13.6.6  | Última versión estable con Component Testing. |
| **Lighthouse CI**         | 0.9.2   | Integración con GitHub Actions. |

## **7️⃣ Despliegue & DevOps**  
| Tecnología             | Versión  | Notas de Compatibilidad |
|------------------------|---------|-------------------------|
| **Vercel**            | N/A     | Usar CLI 32.6.8 (compatible con Node 20). |
| **GitHub Actions Runner** | 2.317.0 | Versión estable para CI/CD. |
| **Sentry (React)**     | 7.108.0 | SDK moderno con source maps integradas. |
| **LogRocket**         | 3.0.0   | Soporta React 18 y error boundaries. |
| **GIT**               | 2.43.0  | Última versión estable, integración con GitHub. |
| **GitHub**            | N/A     | Manejo de repositorios, CI/CD con GitHub Actions. |

## **8️⃣ Backend (Opcional)**  
| Tecnología           | Versión  | Notas de Compatibilidad |
|----------------------|---------|-------------------------|
| **Node.js**         | 20.11.1 | LTS hasta abril 2026. |
| **Express**         | 4.18.2  | Última versión estable (evitar 5.x alpha). |
| **Supabase JS**     | 3.2.6   | SDK para PostgreSQL y Auth. |
| **Firebase Firestore** | 10.11.1 | Modular (no usar compat mode). |
