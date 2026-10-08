export const dfs=c=>c.length?{selected:c[0],trace:[...c].reverse().map(x=>x.id)}:{selected:null,trace:[]};
