# Guía de Despliegue en GitHub Pages

## Pasos para desplegar tu portafolio:

### 1. Inicializar Git y subir a GitHub

```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Portfolio de Charles"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/TU-USUARIO/showrepository.github.io.git

# Subir los cambios
git push -u origin main
```

**Nota:** Si tu rama principal se llama `master` en lugar de `main`, usa:
```bash
git branch -M main
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/showrepository.github.io`

2. Haz clic en **Settings** (Configuración)

3. En el menú lateral, busca **Pages**

4. En **Build and deployment**:
   - Source: Selecciona **GitHub Actions**

5. Guarda los cambios

### 3. Despliegue Automático

Una vez que hagas push a la rama `main`, el workflow de GitHub Actions se ejecutará automáticamente y desplegará tu sitio.

Puedes ver el progreso en la pestaña **Actions** de tu repositorio.

### 4. Acceder a tu sitio

Tu portafolio estará disponible en:
```
https://TU-USUARIO.github.io/showrepository.github.io/
```

**Nota:** El despliegue puede tardar 2-5 minutos la primera vez.

### 5. Actualizaciones futuras

Para actualizar tu portafolio, simplemente:

```bash
# Hacer cambios en tu código
git add .
git commit -m "Descripción de los cambios"
git push
```

El sitio se actualizará automáticamente.

## Solución de problemas

### Si la página no carga correctamente:

1. Verifica que el `base` en `vite.config.js` coincida con el nombre de tu repositorio
2. Revisa los logs en la pestaña **Actions** para ver si hay errores
3. Asegúrate de que GitHub Pages esté configurado para usar **GitHub Actions**

### Si las rutas no funcionan:

Verifica que `vite.config.js` tenga:
```javascript
base: '/showrepository.github.io/',
```

### Si quieres usar un dominio personalizado:

1. Ve a Settings > Pages
2. En **Custom domain**, ingresa tu dominio
3. Sigue las instrucciones para configurar los DNS
