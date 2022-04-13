import './styles.css';

function App() {
  return (
<body>
    <div>           
        <div> 
            <nav>
                <div>
                    <h1>
                        <a href="/">Meteor</a>
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div> 

        <main>
            <div>
                <a href="#">Login</a>
                <a href="#">Signup</a>
            </div>

            <header>
                <h2>Meteo</h2>
                <h3>pour les feignants</h3>
            </header>
        </main>
    </div>
</body>
  );
}

export default App;
