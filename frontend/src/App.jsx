import { useState } from "react";
// Icono simple de globo terráqueo (puedes reemplazarlo por un SVG más detallado si lo deseas)
const GlobeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-5 h-5 inline-block mr-1"
	>
		<circle
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="1.5"
			fill="none"
		/>
		<path
			stroke="currentColor"
			strokeWidth="1.5"
			d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
		/>
	</svg>
);
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [lang, setLang] = useState("es");
	const [showLangMenu, setShowLangMenu] = useState(false);

	// Textos en ambos idiomas
	const texts = {
		es: {
			home: "Inicio",
			about: "Acerca",
			contact: "Contacto",
			register: "Regístrate",
			hello: "¡Hola mundo!",
			selectLang: "Selecciona idioma",
		},
		en: {
			home: "Home",
			about: "About",
			contact: "Contact",
			register: "Sign up",
			hello: "Hello world!",
			selectLang: "Select language",
		},
	};

	return (
		<>
			{/* Header principal */}
			<header className="bg-black text-white p-4 mt-0 fixed w-full top-0 left-0 z-50 flex items-center justify-between">
				<nav>
					<a href="#" className="mr-4 hover:underline">{texts[lang].home}</a>
					<a href="#" className="mr-4 hover:underline">{texts[lang].about}</a>
					<a href="#" className="mr-4 hover:underline">{texts[lang].contact}</a>
					<a href="#" className="hover:underline bg-white text-black px-2 py-1 rounded">{texts[lang].register}</a>
				</nav>
				{/* Botón para mostrar el menú de idioma */}
				<div className="relative">
					<button className="flex items-center px-2 py-1 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none"
						onClick={() => setShowLangMenu((v) => !v)}
						aria-haspopup="listbox"
						aria-expanded={showLangMenu}>
						<GlobeIcon />
						<span className="mx-1 font-semibold">{lang.toUpperCase()}</span>
						<svg
							className="w-4 h-4 ml-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{showLangMenu && (
						<ul className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-50" role="listbox">
							<li>
								<button className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${lang === "es" ? "font-bold" : ""}`}
									onClick={() => {
										setLang("es");
										setShowLangMenu(false);
									}}
									role="option"
									aria-selected={lang === "es"}>
									Español
								</button>
							</li>
							<li>
								<button
									className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
										lang === "en" ? "font-bold" : ""
									}`}
									onClick={() => {
										setLang("en");
										setShowLangMenu(false);
									}}
									role="option"
									aria-selected={lang === "en"}
								>
									English
								</button>
							</li>
						</ul>
					)}
				</div>
			</header>
		</>
	);
}

export default App;
