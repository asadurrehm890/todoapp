import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';

export default function App({Component, pageProps}){
	return(
	  <>
	  <header className="bg-dark py-3">
	     <h1 className="text-white text-center">Todo App</h1>
	  </header>
	  <main className="py-5">
	    <div className="container">
	  <Component {...pageProps}/>
	    </div>
	  </main>
	  <footer className="bg-dark py-2">
	     <p className="mb-0 text-white text-center">Open Source Code available <a href="" className="text-white">here</a></p>
	  </footer>
	  </>
	)
}

