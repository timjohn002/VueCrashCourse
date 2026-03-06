# Study Notes

### How to implement the router.
1. Created a   ```router``` folder. Inside, created ```index.js```.
2. Created a view - ```HomeView```.
3. Added the routes in ```index.js``` and used ```HomeView``` component.
4. In the ```main.js``` imported and used the router via ```app.use(router)```.
5. In the main component, ```App.vue```, imported the ```vue-router``` to display the routed view. Leaving the main ```App.vue``` template looking like:
```
<template>
  <Navbar />
  <RouterView />
</template>
```
This makes the main component clean, and I can reuse the ```App.vue``` template. ```<Navbar />``` will be used for all items that are routed.