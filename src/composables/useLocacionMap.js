import { ref } from 'vue';

export default function useLocationMap(){

    const zoom=ref(15)
    const center=ref([-31.41699327628374, -64.18347285120855])

    function pin(e){
        const marker= e.target.getLatLng()
        center.value=[marker.lat,marker.lng]
    }


    return{
        pin,
        zoom,
        center
    }
}