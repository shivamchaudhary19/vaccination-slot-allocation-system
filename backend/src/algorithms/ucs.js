export function ucs(c){const a=[...c].sort((x,y)=>x.distance_km-y.distance_km||x.id.localeCompare(y.id));return{selected:a[0]??null,trace:a.map(x=>({slotId:x.id,cost:x.distance_km}))};}
