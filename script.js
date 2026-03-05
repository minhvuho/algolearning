function searchPage(){

let text=document.getElementById("searchInput").value.toLowerCase()

let pages={
complexity:"complexity.html",
sorting:"sorting.html",
binary:"binarysearch.html",
recursion:"recursion.html",
dp:"dp.html",
graph:"graph.html",
bfs:"dfsandbfs.html",
dfs:"dfsandbfs.html",
euler:"euler.html",
sieve:"sieve.html",
power:"binarypower.html",
hash:"hash.html"
}

for(let k in pages){
if(text.includes(k)){
window.location=pages[k]
return
}
}

alert("Không tìm thấy thuật toán")

}

function topFunction(){
window.scrollTo({top:0,behavior:"smooth"})
}