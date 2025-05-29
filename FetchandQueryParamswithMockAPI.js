let allProducts = [];
document.getElementById('searchBtn').addEventListener('click', ()=>{
  const category = document.getElementById('category').value;
  const min = Number(document.getElementById('minPrice').value);
  const max = Number(document.getElementById('maxPrice').value);
  // Copy of original data
  let filtered = [...allProducts]
  if(category){
    filtered = filtered.filter(p => p.category === category);
  }
  if(min){
    filtered = filtered.filter(p => p.price >= min);
  }
  if(max){
    filtered = filtered.filter(p => p.price <= max);
  }
  renderProducts(filtered)
});
async function fetchData(){
  const loading = document.getElementById('loading');
  const error = document.getElementById('error');
  loading.style.display = 'block'
  error.textContent = ''
  try {
    const res = await fetch('https://68321e35c3f2222a8cb18366.mockapi.io/products/products');
    if(!res.ok) throw new Error('Failed to fetch the data');
    allProducts = await res.json();
    console.log(allProducts)
    renderProducts(allProducts);
  } catch (error) {
    error.textContent = 'Something went wrong';
  }finally{
    loading.style.display = 'none';
  }
};
function renderProducts(data){
  const list = document.getElementById('productList');
  list.innerHTML = '';
  if(data.length == 0){
    list.innerHTML = `<p>No Products found</p>`
  }else{
    data.forEach(p =>{
      //Cards 
      const div = document.createElement('div');
      div.className ='products';
      div.innerHTML= `
      <img src="${p.imageUrl}" alt="${p.name}">
       <h3>${p.name}</h3>
       <p>Price : $${p.price}</p>
      `;
      list.appendChild(div)
    })
  }
}
// fetching for the first
fetchData()