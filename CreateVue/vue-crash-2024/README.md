# Study Notes

### How to implement the router.
> Note that in the creation of the vue app, there is an option to scaffold the router. So in future projects, this does not have to be manually created.

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


---

### Handling loading elements
Be careful about handling loading items.

Assume that the result of a fetch is assigned to ```job```.
Elements that uses the resulting object properties should not load before the API request is completed.

This may result in a ```property undefined error```.

---

### Deployment

#### npm run build
This create a ```dist``` folder which will contain all the static assets of the project.

The content in ```dist``` is what you would upload to a shared server.

#### npm run preview
Used when previewing production deployment.

#### Deploying to Netlify
1. Create a Github Repo. Push to Github.
2. Go to Netlify.