import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllPropiedadesView from '../views/AllPropiedadesView.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllPropiedadesView
    },
    {
      path:'/destacadas',
      name: 'destacadas',
      component: HomeView
    },
    {
      path:'/propiedades',
      name: 'propiedades',
      component: () => import('../views/AllPropiedadesView.vue')
    },
    {
      path: '/propiedades/:id',
      name: 'propiedad',
      component:() => import('../views/PropiedadView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/LoginView.vue')
    },
    {
      path:'/nosotros',
      name:'nosotros',
      component:() => import('../views/Nosotros.vue')
    },
    {
      path:'/contacto',
      name:'contacto',
      component:() => import('../views/Contacto.vue')
    },
    {
      path:'/admin',
      name:'admin',
      component:() => import ('../views/admin/AdminLayout.vue'),
      meta:{ requiresAuth: true},
      children: [
// al ser un hijo se puede eliminar /admin/ es lo mismo /admin/propiedades o propiedades
        {
          path:'propiedades',
          name:'admin-propiedades',
          component:() => import('../views/admin/AdminView.vue'),
          // no hace falta porque es hijo
        // meta:{ requiresAuth: true},

        },
        {
          path:'/admin/nueva',
          name:'nueva-propiedad',
          component:() => import('../views/admin/NuevaPropiedadView.vue'),
        meta:{ requiresAuth: true},

        },
        {
          path:'/admin/editar/:id',
          name:'editar-propiedad',
          component:() => import('../views/admin/EditarPropiedadView.vue'),
        meta:{ requiresAuth: true},

        }
        
      ]
    }
  ]
})
// gard de navegacion
router.beforeEach(async(to, from,next) =>{
  const requiresAuth= to.matched.some( url => url.meta.requiresAuth)
  // Comprobar que el usuario esté autenticado
  if (requiresAuth){
    try {
      await authenticateUser()
      next()
    } catch (error) {
      console.log(error)
      next({name: 'login'})
    }
  }else{
    //No está protegido
    next()
  }
})
function authenticateUser(){
  const auth=useFirebaseAuth()
  return new Promise((resolve, reject) => {
    const unsubscribe= onAuthStateChanged(auth, (user)=>{
      unsubscribe()
      if (user){
        resolve()
      }else{
        reject()
      } 
    })
  })
}

export default router
