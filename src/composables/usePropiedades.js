import { collection, doc, deleteDoc } from "firebase/firestore";
import { computed, ref } from "vue";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {
	const piscina = ref(false);
	const cochera = ref(false);
	const habitacionesMin = ref(0);
	const tipo = ref(""); // ejemplo: 'casa', 'departamento'
    const operacion = ref(""); // ejemplo: 'venta', 'renta'
    const expensas = ref(false); // ejemplo: 'si', 'no'
	const db = useFirestore();
	const propiedadesCollection = useCollection(collection(db, "propiedades"));

	async function deleteItem(id) {
		if (confirm("Deseas eliminar la propiedad")) {
			const docRef = doc(db, "propiedades", id);
			await deleteDoc(docRef);
		}
	}

	const filteredItem = computed(() => {
		return propiedadesCollection.value.filter((prop) => {
			return (
				(!piscina.value || prop.piscina) &&
				(!cochera.value || prop.cochera) &&
				(habitacionesMin.value === 0 ||
					prop.habitaciones >= habitacionesMin.value) &&
				(!tipo.value || prop.tipo === tipo.value)
                && (!operacion.value || prop.operacion === operacion.value)
                && (!expensas.value || prop.expensas === expensas.value)
			);
		});
	});
    const DeleteFilter = () => {
        piscina.value = false;
        cochera.value = false;
        habitacionesMin.value = 0;
        tipo.value = "";
        operacion.value = "";
        expensas.value = false
    }

	return {
		propiedadesCollection,
		deleteItem,
		filteredItem,
		piscina,
		cochera,
		habitacionesMin,
		tipo,
        operacion,
        expensas,
        DeleteFilter
	};
}
