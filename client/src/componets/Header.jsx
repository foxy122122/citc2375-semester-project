export default function Header() {
  return (
    <header><hr />
      <h1>Cool Game Collection</h1>
    
    <nav aria-label="Main navigation" style={{
        display: 'flex',
         gap: 0,
         width: '100%',
        }}>
      <p class="nav-link"><a href="">index</a></p>
      <p class="nav-link"><a href="./about.html">about</a></p>
      <p class="nav-link"><a href="./add.html">add game</a></p>
    </nav></header>
  );
}