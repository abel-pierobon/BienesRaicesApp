import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, titulo, imagen, imagen2, precio, items, habitaciones, wc, estacionamiento, descripcion, alberca, submit } from './NuevaPropiedadView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VCard', typeof __VLS_localComponents, "VCard", "vCard", "v-card"> &
__VLS_WithComponent<'VCardTitle', typeof __VLS_localComponents, "VCardTitle", "vCardTitle", "v-card-title"> &
__VLS_WithComponent<'VCardSubtitle', typeof __VLS_localComponents, "VCardSubtitle", "vCardSubtitle", "v-card-subtitle"> &
__VLS_WithComponent<'VForm', typeof __VLS_localComponents, "VForm", "vForm", "v-form"> &
__VLS_WithComponent<'VTextField', typeof __VLS_localComponents, "VTextField", "vTextField", "v-text-field"> &
__VLS_WithComponent<'VFileInput', typeof __VLS_localComponents, "VFileInput", "vFileInput", "v-file-input"> &
__VLS_WithComponent<'VRow', typeof __VLS_localComponents, "VRow", "vRow", "v-row"> &
__VLS_WithComponent<'VCol', typeof __VLS_localComponents, "VCol", "vCol", "v-col"> &
__VLS_WithComponent<'VSelect', typeof __VLS_localComponents, "VSelect", "vSelect", "v-select"> &
__VLS_WithComponent<'VTextarea', typeof __VLS_localComponents, "VTextarea", "vTextarea", "v-textarea"> &
__VLS_WithComponent<'VCheckbox', typeof __VLS_localComponents, "VCheckbox", "vCheckbox", "v-checkbox"> &
__VLS_WithComponent<'LMap', typeof __VLS_localComponents, "LMap", "LMap", "LMap"> &
__VLS_WithComponent<'LMarker', typeof __VLS_localComponents, "LMarker", "LMarker", "LMarker"> &
__VLS_WithComponent<'LTileLayer', typeof __VLS_localComponents, "LTileLayer", "LTileLayer", "LTileLayer"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn">;
__VLS_components.VCard; __VLS_components.VCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components["v-card"]; __VLS_components["v-card"];
// @ts-ignore
[VCard, VCard,];
__VLS_components.VCardTitle; __VLS_components.VCardTitle; __VLS_components.vCardTitle; __VLS_components.vCardTitle; __VLS_components["v-card-title"]; __VLS_components["v-card-title"];
// @ts-ignore
[VCardTitle, VCardTitle,];
__VLS_components.VCardSubtitle; __VLS_components.VCardSubtitle; __VLS_components.vCardSubtitle; __VLS_components.vCardSubtitle; __VLS_components["v-card-subtitle"]; __VLS_components["v-card-subtitle"];
// @ts-ignore
[VCardSubtitle, VCardSubtitle,];
__VLS_components.VForm; __VLS_components.VForm; __VLS_components.vForm; __VLS_components.vForm; __VLS_components["v-form"]; __VLS_components["v-form"];
// @ts-ignore
[VForm, VForm,];
__VLS_components.VTextField; __VLS_components.VTextField; __VLS_components.vTextField; __VLS_components.vTextField; __VLS_components["v-text-field"]; __VLS_components["v-text-field"];
// @ts-ignore
[VTextField, VTextField,];
__VLS_components.VFileInput; __VLS_components.VFileInput; __VLS_components.vFileInput; __VLS_components.vFileInput; __VLS_components["v-file-input"]; __VLS_components["v-file-input"];
// @ts-ignore
[VFileInput, VFileInput,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.img;
__VLS_components.VRow; __VLS_components.VRow; __VLS_components.vRow; __VLS_components.vRow; __VLS_components["v-row"]; __VLS_components["v-row"];
// @ts-ignore
[VRow, VRow,];
__VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"];
// @ts-ignore
[VCol, VCol, VCol, VCol, VCol, VCol,];
__VLS_components.VSelect; __VLS_components.VSelect; __VLS_components.VSelect; __VLS_components.vSelect; __VLS_components.vSelect; __VLS_components.vSelect; __VLS_components["v-select"]; __VLS_components["v-select"]; __VLS_components["v-select"];
// @ts-ignore
[VSelect, VSelect, VSelect,];
__VLS_components.VTextarea; __VLS_components.VTextarea; __VLS_components.vTextarea; __VLS_components.vTextarea; __VLS_components["v-textarea"]; __VLS_components["v-textarea"];
// @ts-ignore
[VTextarea, VTextarea,];
__VLS_components.VCheckbox; __VLS_components.vCheckbox; __VLS_components["v-checkbox"];
// @ts-ignore
[VCheckbox,];
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_components.LMap; __VLS_components.LMap;
// @ts-ignore
[LMap, LMap,];
__VLS_components.LMarker;
// @ts-ignore
[LMarker,];
__VLS_components.LTileLayer; __VLS_components.LTileLayer;
// @ts-ignore
[LTileLayer, LTileLayer,];
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn,];
{
const __VLS_0 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, maxWidth: ("800"), flat: (true), class: ("mx-auto my-10"), }));
({} as { VCard: typeof __VLS_0; }).VCard;
({} as { VCard: typeof __VLS_0; }).VCard;
const __VLS_2 = __VLS_1({ ...{}, maxWidth: ("800"), flat: (true), class: ("mx-auto my-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, maxWidth: ("800"), flat: (true), class: ("mx-auto my-10"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'VCardTitle' extends keyof typeof __VLS_ctx ? { 'VCardTitle': typeof __VLS_ctx.VCardTitle; } : 'vCardTitle' extends keyof typeof __VLS_ctx ? { 'VCardTitle': typeof __VLS_ctx.vCardTitle; } : 'v-card-title' extends keyof typeof __VLS_ctx ? { 'VCardTitle': (typeof __VLS_ctx)["v-card-title"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardTitle;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: ("text-h4 font-weight-bold"), tag: ("h3"), }));
({} as { VCardTitle: typeof __VLS_5; }).VCardTitle;
({} as { VCardTitle: typeof __VLS_5; }).VCardTitle;
const __VLS_7 = __VLS_6({ ...{}, class: ("text-h4 font-weight-bold"), tag: ("h3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("text-h4 font-weight-bold"), tag: ("h3"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = ({} as 'VCardSubtitle' extends keyof typeof __VLS_ctx ? { 'VCardSubtitle': typeof __VLS_ctx.VCardSubtitle; } : 'vCardSubtitle' extends keyof typeof __VLS_ctx ? { 'VCardSubtitle': typeof __VLS_ctx.vCardSubtitle; } : 'v-card-subtitle' extends keyof typeof __VLS_ctx ? { 'VCardSubtitle': (typeof __VLS_ctx)["v-card-subtitle"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardSubtitle;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: ("text-h5 py-5"), }));
({} as { VCardSubtitle: typeof __VLS_10; }).VCardSubtitle;
({} as { VCardSubtitle: typeof __VLS_10; }).VCardSubtitle;
const __VLS_12 = __VLS_11({ ...{}, class: ("text-h5 py-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("text-h5 py-5"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
{
const __VLS_15 = ({} as 'VForm' extends keyof typeof __VLS_ctx ? { 'VForm': typeof __VLS_ctx.VForm; } : 'vForm' extends keyof typeof __VLS_ctx ? { 'VForm': typeof __VLS_ctx.vForm; } : 'v-form' extends keyof typeof __VLS_ctx ? { 'VForm': (typeof __VLS_ctx)["v-form"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VForm;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, class: ("mt-10"), }));
({} as { VForm: typeof __VLS_15; }).VForm;
({} as { VForm: typeof __VLS_15; }).VForm;
const __VLS_17 = __VLS_16({ ...{}, class: ("mt-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("mt-10"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'VTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.VTextField; } : 'vTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.vTextField; } : 'v-text-field' extends keyof typeof __VLS_ctx ? { 'VTextField': (typeof __VLS_ctx)["v-text-field"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VTextField;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: ("mb-5"), label: ("Titulo Propiedad"), modelValue: ((__VLS_ctx.titulo.value.value)), errorMessages: ((__VLS_ctx.titulo.errorMessage.value)), }));
({} as { VTextField: typeof __VLS_20; }).VTextField;
const __VLS_22 = __VLS_21({ ...{}, class: ("mb-5"), label: ("Titulo Propiedad"), modelValue: ((__VLS_ctx.titulo.value.value)), errorMessages: ((__VLS_ctx.titulo.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), label: ("Titulo Propiedad"), modelValue: ((__VLS_ctx.titulo.value.value)), errorMessages: ((__VLS_ctx.titulo.errorMessage.value)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
const __VLS_25 = ({} as 'VFileInput' extends keyof typeof __VLS_ctx ? { 'VFileInput': typeof __VLS_ctx.VFileInput; } : 'vFileInput' extends keyof typeof __VLS_ctx ? { 'VFileInput': typeof __VLS_ctx.vFileInput; } : 'v-file-input' extends keyof typeof __VLS_ctx ? { 'VFileInput': (typeof __VLS_ctx)["v-file-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VFileInput;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), }));
({} as { VFileInput: typeof __VLS_25; }).VFileInput;
const __VLS_27 = __VLS_26({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
let __VLS_30 = { 'change': __VLS_pickEvent(__VLS_29['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_27>).onChange) };
__VLS_30 = { change: (__VLS_ctx.uploadImage) };
}
if (__VLS_ctx.image) {
{
const __VLS_31 = __VLS_intrinsicElements["div"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("my-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("my-5"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = __VLS_intrinsicElements["p"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: (" font-weight-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: (" font-weight-bold"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_39.slots!).default;
}
{
const __VLS_41 = __VLS_intrinsicElements["img"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: (" w-50"), src: ((__VLS_ctx.image)), alt: ("imagen de propiedad"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: (" w-50"), src: ((__VLS_ctx.image)), alt: ("imagen de propiedad"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
}
(__VLS_34.slots!).default;
}
// @ts-ignore
[titulo, titulo, titulo, titulo, titulo, titulo, imagen, imagen, imagen, imagen, imagen, imagen, uploadImage, image, image, image,];
}
{
const __VLS_46 = ({} as 'VFileInput' extends keyof typeof __VLS_ctx ? { 'VFileInput': typeof __VLS_ctx.VFileInput; } : 'vFileInput' extends keyof typeof __VLS_ctx ? { 'VFileInput': typeof __VLS_ctx.vFileInput; } : 'v-file-input' extends keyof typeof __VLS_ctx ? { 'VFileInput': (typeof __VLS_ctx)["v-file-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VFileInput;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen2.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), }));
({} as { VFileInput: typeof __VLS_46; }).VFileInput;
const __VLS_48 = __VLS_47({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen2.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, accept: ("image/jpeg"), label: ("fotografía"), prependIcon: ("mdi-camera"), class: ("mb-5"), modelValue: ((__VLS_ctx.imagen2.value.value)), errorMessages: ((__VLS_ctx.imagen.errorMessage.value)), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
let __VLS_51 = { 'change': __VLS_pickEvent(__VLS_50['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_48>).onChange) };
__VLS_51 = { change: (__VLS_ctx.uploadImage) };
}
{
const __VLS_52 = ({} as 'VTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.VTextField; } : 'vTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.vTextField; } : 'v-text-field' extends keyof typeof __VLS_ctx ? { 'VTextField': (typeof __VLS_ctx)["v-text-field"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VTextField;
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, class: ("mb-5"), label: ("Precio"), modelValue: ((__VLS_ctx.precio.value.value)), errorMessages: ((__VLS_ctx.precio.errorMessage.value)), }));
({} as { VTextField: typeof __VLS_52; }).VTextField;
const __VLS_54 = __VLS_53({ ...{}, class: ("mb-5"), label: ("Precio"), modelValue: ((__VLS_ctx.precio.value.value)), errorMessages: ((__VLS_ctx.precio.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), label: ("Precio"), modelValue: ((__VLS_ctx.precio.value.value)), errorMessages: ((__VLS_ctx.precio.errorMessage.value)), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
}
{
const __VLS_57 = ({} as 'VRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.VRow; } : 'vRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.vRow; } : 'v-row' extends keyof typeof __VLS_ctx ? { 'VRow': (typeof __VLS_ctx)["v-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VRow;
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, }));
({} as { VRow: typeof __VLS_57; }).VRow;
({} as { VRow: typeof __VLS_57; }).VRow;
const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
{
const __VLS_62 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, cols: ("12"), md: ("4"), }));
({} as { VCol: typeof __VLS_62; }).VCol;
({} as { VCol: typeof __VLS_62; }).VCol;
const __VLS_64 = __VLS_63({ ...{}, cols: ("12"), md: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), md: ("4"), });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
{
const __VLS_67 = ({} as 'VSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.VSelect; } : 'vSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.vSelect; } : 'v-select' extends keyof typeof __VLS_ctx ? { 'VSelect': (typeof __VLS_ctx)["v-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSelect;
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, label: ("Habitaciones"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.habitaciones.value.value)), errorMessages: ((__VLS_ctx.habitaciones.errorMessage.value)), }));
({} as { VSelect: typeof __VLS_67; }).VSelect;
const __VLS_69 = __VLS_68({ ...{}, label: ("Habitaciones"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.habitaciones.value.value)), errorMessages: ((__VLS_ctx.habitaciones.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{}, label: ("Habitaciones"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.habitaciones.value.value)), errorMessages: ((__VLS_ctx.habitaciones.errorMessage.value)), });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
let __VLS_71!: __VLS_NormalizeEmits<typeof __VLS_70.emit>;
}
(__VLS_65.slots!).default;
}
{
const __VLS_72 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{}, cols: ("12"), md: ("4"), }));
({} as { VCol: typeof __VLS_72; }).VCol;
({} as { VCol: typeof __VLS_72; }).VCol;
const __VLS_74 = __VLS_73({ ...{}, cols: ("12"), md: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), md: ("4"), });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
{
const __VLS_77 = ({} as 'VSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.VSelect; } : 'vSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.vSelect; } : 'v-select' extends keyof typeof __VLS_ctx ? { 'VSelect': (typeof __VLS_ctx)["v-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSelect;
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, label: ("Wc"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.wc.value.value)), errorMessages: ((__VLS_ctx.wc.errorMessage.value)), }));
({} as { VSelect: typeof __VLS_77; }).VSelect;
const __VLS_79 = __VLS_78({ ...{}, label: ("Wc"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.wc.value.value)), errorMessages: ((__VLS_ctx.wc.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, label: ("Wc"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.wc.value.value)), errorMessages: ((__VLS_ctx.wc.errorMessage.value)), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
}
(__VLS_75.slots!).default;
}
{
const __VLS_82 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{}, cols: ("12"), md: ("4"), }));
({} as { VCol: typeof __VLS_82; }).VCol;
({} as { VCol: typeof __VLS_82; }).VCol;
const __VLS_84 = __VLS_83({ ...{}, cols: ("12"), md: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), md: ("4"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
{
const __VLS_87 = ({} as 'VSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.VSelect; } : 'vSelect' extends keyof typeof __VLS_ctx ? { 'VSelect': typeof __VLS_ctx.vSelect; } : 'v-select' extends keyof typeof __VLS_ctx ? { 'VSelect': (typeof __VLS_ctx)["v-select"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSelect;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, label: ("Lugares Estacionamiento"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.estacionamiento.value.value)), errorMessages: ((__VLS_ctx.estacionamiento.errorMessage.value)), }));
({} as { VSelect: typeof __VLS_87; }).VSelect;
const __VLS_89 = __VLS_88({ ...{}, label: ("Lugares Estacionamiento"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.estacionamiento.value.value)), errorMessages: ((__VLS_ctx.estacionamiento.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, label: ("Lugares Estacionamiento"), class: ("mb-5"), items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.estacionamiento.value.value)), errorMessages: ((__VLS_ctx.estacionamiento.errorMessage.value)), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
}
(__VLS_85.slots!).default;
}
(__VLS_60.slots!).default;
}
{
const __VLS_92 = ({} as 'VTextarea' extends keyof typeof __VLS_ctx ? { 'VTextarea': typeof __VLS_ctx.VTextarea; } : 'vTextarea' extends keyof typeof __VLS_ctx ? { 'VTextarea': typeof __VLS_ctx.vTextarea; } : 'v-textarea' extends keyof typeof __VLS_ctx ? { 'VTextarea': (typeof __VLS_ctx)["v-textarea"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VTextarea;
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, class: ("mb-5"), label: ("Descripción"), modelValue: ((__VLS_ctx.descripcion.value.value)), errorMessages: ((__VLS_ctx.descripcion.errorMessage.value)), }));
({} as { VTextarea: typeof __VLS_92; }).VTextarea;
({} as { VTextarea: typeof __VLS_92; }).VTextarea;
const __VLS_94 = __VLS_93({ ...{}, class: ("mb-5"), label: ("Descripción"), modelValue: ((__VLS_ctx.descripcion.value.value)), errorMessages: ((__VLS_ctx.descripcion.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), label: ("Descripción"), modelValue: ((__VLS_ctx.descripcion.value.value)), errorMessages: ((__VLS_ctx.descripcion.errorMessage.value)), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
}
{
const __VLS_97 = ({} as 'VCheckbox' extends keyof typeof __VLS_ctx ? { 'VCheckbox': typeof __VLS_ctx.VCheckbox; } : 'vCheckbox' extends keyof typeof __VLS_ctx ? { 'VCheckbox': typeof __VLS_ctx.vCheckbox; } : 'v-checkbox' extends keyof typeof __VLS_ctx ? { 'VCheckbox': (typeof __VLS_ctx)["v-checkbox"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCheckbox;
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, label: ("Alberca"), modelValue: ((__VLS_ctx.alberca.value.value)), errorMessages: ((__VLS_ctx.alberca.errorMessage.value)), }));
({} as { VCheckbox: typeof __VLS_97; }).VCheckbox;
const __VLS_99 = __VLS_98({ ...{}, label: ("Alberca"), modelValue: ((__VLS_ctx.alberca.value.value)), errorMessages: ((__VLS_ctx.alberca.errorMessage.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, label: ("Alberca"), modelValue: ((__VLS_ctx.alberca.value.value)), errorMessages: ((__VLS_ctx.alberca.errorMessage.value)), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
}
{
const __VLS_102 = __VLS_intrinsicElements["h2"];
const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
const __VLS_104 = __VLS_103({ ...{}, class: (" font-weight-bold text-center my-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, class: (" font-weight-bold text-center my-5"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
(__VLS_105.slots!).default;
}
{
const __VLS_107 = __VLS_intrinsicElements["div"];
const __VLS_108 = __VLS_elementAsFunctionalComponent(__VLS_107);
const __VLS_109 = __VLS_108({ ...{}, class: ("pb-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, class: ("pb-10"), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
let __VLS_111!: __VLS_NormalizeEmits<typeof __VLS_110.emit>;
{
const __VLS_112 = __VLS_intrinsicElements["div"];
const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
const __VLS_114 = __VLS_113({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
{
const __VLS_117 = ({} as 'LMap' extends keyof typeof __VLS_ctx ? { 'LMap': typeof __VLS_ctx.LMap; } : typeof __VLS_resolvedLocalAndGlobalComponents).LMap;
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, ref: ("map"), zoom: ((__VLS_ctx.zoom)), center: ((__VLS_ctx.center)), useGlobalLeaflet: ((false)), }));
({} as { LMap: typeof __VLS_117; }).LMap;
({} as { LMap: typeof __VLS_117; }).LMap;
const __VLS_119 = __VLS_118({ ...{}, ref: ("map"), zoom: ((__VLS_ctx.zoom)), center: ((__VLS_ctx.center)), useGlobalLeaflet: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, ref: ("map"), zoom: ((__VLS_ctx.zoom)), center: ((__VLS_ctx.center)), useGlobalLeaflet: ((false)), });
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
// @ts-ignore
(__VLS_ctx.map);
{
const __VLS_122 = ({} as 'LMarker' extends keyof typeof __VLS_ctx ? { 'LMarker': typeof __VLS_ctx.LMarker; } : typeof __VLS_resolvedLocalAndGlobalComponents).LMarker;
const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ onMoveend: {} as any, }, latLng: ((__VLS_ctx.center)), draggable: (true), }));
({} as { LMarker: typeof __VLS_122; }).LMarker;
const __VLS_124 = __VLS_123({ ...{ onMoveend: {} as any, }, latLng: ((__VLS_ctx.center)), draggable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{ onMoveend: {} as any, }, latLng: ((__VLS_ctx.center)), draggable: (true), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
let __VLS_127 = { 'moveend': __VLS_pickEvent(__VLS_126['moveend'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_124>).onMoveend) };
__VLS_127 = { moveend: (__VLS_ctx.pin) };
}
{
const __VLS_128 = ({} as 'LTileLayer' extends keyof typeof __VLS_ctx ? { 'LTileLayer': typeof __VLS_ctx.LTileLayer; } : typeof __VLS_resolvedLocalAndGlobalComponents).LTileLayer;
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{}, url: ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), }));
({} as { LTileLayer: typeof __VLS_128; }).LTileLayer;
({} as { LTileLayer: typeof __VLS_128; }).LTileLayer;
const __VLS_130 = __VLS_129({ ...{}, url: ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, url: ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), });
const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>;
}
(__VLS_120.slots!).default;
}
(__VLS_115.slots!).default;
}
(__VLS_110.slots!).default;
}
{
const __VLS_133 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{ onClick: {} as any, }, color: ("pink-accent-3"), }));
({} as { VBtn: typeof __VLS_133; }).VBtn;
({} as { VBtn: typeof __VLS_133; }).VBtn;
const __VLS_135 = __VLS_134({ ...{ onClick: {} as any, }, color: ("pink-accent-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_133, typeof __VLS_135> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, color: ("pink-accent-3"), });
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137!: __VLS_NormalizeEmits<typeof __VLS_136.emit>;
let __VLS_138 = { 'click': __VLS_pickEvent(__VLS_137['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_135>).onClick) };
__VLS_138 = { click: (__VLS_ctx.submit) };
(__VLS_136.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[imagen2, imagen, imagen2, imagen, imagen2, imagen, uploadImage, precio, precio, precio, precio, precio, precio, items, habitaciones, habitaciones, items, habitaciones, habitaciones, items, habitaciones, habitaciones, items, wc, wc, items, wc, wc, items, wc, wc, items, estacionamiento, estacionamiento, items, estacionamiento, estacionamiento, items, estacionamiento, estacionamiento, descripcion, descripcion, descripcion, descripcion, descripcion, descripcion, alberca, alberca, alberca, alberca, alberca, alberca, zoom, center, zoom, center, zoom, center, map, center, center, center, pin, submit,];
return __VLS_slots;
}
