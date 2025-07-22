import { ref, computed } from "vue";

const CLOUDINARY_DELETE_ENDPOINT = "http://localhost:4000/api/delete-image";

export default function useImages() {
    const images = ref([]); // [{ url, public_id }]

    async function uploadImages(e) {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const uploaded = [];
        for (const file of files) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "unsigned_preset");

            try {
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/dtkgoxqeo/image/upload",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await response.json();

                if (data.secure_url && data.public_id) {
                    uploaded.push({ url: data.secure_url, public_id: data.public_id });
                } else {
                    console.error("Respuesta inesperada de Cloudinary:", data);
                }
            } catch (error) {
                console.error("Error al subir la imagen:", error);
            }
        }
        images.value = [...images.value, ...uploaded];
    }

    async function removeImage(index) {
        const img = images.value[index];
        if (img && img.public_id) {
            try {
                await fetch(CLOUDINARY_DELETE_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ public_id: img.public_id })
                });
            } catch (e) {
                console.error('Error eliminando imagen de Cloudinary:', e);
            }
        }
        images.value.splice(index, 1);
    }

    return {
        images,
        uploadImages,
        removeImage,
    };
}