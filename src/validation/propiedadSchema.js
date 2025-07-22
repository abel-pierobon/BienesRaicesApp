export const validationSchema = {
	titulo(value) {
		if (value?.length >= 6) return true;
		return "El título de la propiedad es obligatorio o muy corto";
	},
	precio(value) {
		if (/^[0-9]+$/.test(value)) return true;
		return "El precio solo debe contener números";
	},
	habitaciones(value) {
		if (value) return true;
		return "Selecciona una cantidad de habitaciones";
	},
	wc(value) {
		if (value) return true;
		return "Selecciona una cantidad de baños";
	},
	estacionamiento(value) {
		if (value) return true;
		return "Selecciona una cantidad de lugares para estacionamiento";
	},
	descripcion(value) {
		if (value) return true;
		return "Agrega una descripción";
	},
	operacion(value) {
		if (value === "venta" || value === "alquiler") return true;
		return "Selecciona una operación válida";
	},
	tipo(value) {
		const tiposValidos = ["casa", "departamento", "terreno"];
		if (tiposValidos.includes(value)) return true;
		return "Selecciona un tipo de propiedad válido";
	},
	barrio(value) {
		if (value) return true;
		return "Selecciona un barrio";
	},
	cochera(value) {
		// cochera es checkbox, valor booleano o null
		if (typeof value === "boolean") return true;
		return "Debes especificar si tiene cochera o no";
	},
	piscina(value) {
		// checkbox booleano, puede ser null o false/true
		if (typeof value === "boolean") return true;
		return "Debes especificar si tiene piscina o no";
	},
	expensas(value) {
		if (typeof value === "boolean") return true;
		return "Debes especificar si tiene expensas o no";
	},
	calle(value) {
		if (value?.length >= 3) return true;
		return "La calle es obligatoria y debe tener al menos 3 caracteres";
	},
};

export const imageSchema = {
	imagen(value) {
		if (value) return true;
		return "La imagen es obligatoria";
	},
};
