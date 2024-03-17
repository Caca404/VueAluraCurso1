export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]){
    return lista1.every((itemList1) => lista2.includes(itemList1));
}