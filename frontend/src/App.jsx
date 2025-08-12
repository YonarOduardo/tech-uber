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
			login: "Inicia sesión",
			register: "Regístrate",
			hello: "¡Hola mundo!",
			selectLang: "Selecciona idioma",
		},
		en: {
			home: "Home",
			about: "About",
			login: "Sign in",
			register: "Sign up",
			hello: "Hello world!",
			selectLang: "Select language",
		},
	};

	return (
		<>
			{/* Header principal siempre en una fila, con scroll horizontal en móviles */}
			<header className="bg-black text-white px-2 py-3 mt-0 fixed w-full top-0 left-0 z-50 flex items-center justify-between min-h-[56px]">
				<nav className="flex flex-row items-center gap-2 overflow-x-auto whitespace-nowrap w-0 flex-1">
					<a
						href="#"
						className="mr-2 hover:underline px-2 py-1 text-center"
					>
						{texts[lang].home}
					</a>
					<a
						href="#"
						className="mr-2 hover:underline px-2 py-1 text-center"
					>
						{texts[lang].about}
					</a>
				</nav>
				{/* Selector de idioma y botones de sesión */}
				<div className="flex items-center gap-2 ml-2">
					<div className="relative">
						<button
							className="flex items-center px-2 py-1 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none"
							onClick={() => setShowLangMenu((v) => !v)}
							aria-haspopup="listbox"
							aria-expanded={showLangMenu}
						>
							<GlobeIcon />
							<span className="mx-1 font-semibold">
								{lang.toUpperCase()}
							</span>
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
							<ul
								className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-50"
								role="listbox"
							>
								<li>
									<button
										className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
											lang === "es" ? "font-bold" : ""
										}`}
										onClick={() => {
											setLang("es");
											setShowLangMenu(false);
										}}
										role="option"
										aria-selected={lang === "es"}
									>
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
					<a
						href="#"
						className="hover:underline bg-white/20 text-white px-2 py-1 rounded transition-colors duration-200"
					>
						{texts[lang].login}
					</a>
					<a
						href="#"
						className="hover:underline bg-gray-200 text-black px-2 py-1 rounded transition-colors duration-200"
					>
						{texts[lang].register}
					</a>
				</div>
				{/* Botón para mostrar el menú de idioma */}
			</header>

			{/* Imagen principal responsive, sin espacio respecto al header */}
			<div
				className="w-full max-h-[200vh] sm:max-h-[800vh] overflow-hidden flex justify-center items-center"
				style={{ marginTop: "25" }}
			>
				<img
					className="w-full h-auto object-cover object-center"
					style={{ marginTop: 40 }}
					src="/electricity-workers-illustration-concept-vector.jpg"
					alt="Descripción"
				/>
			</div>
		</>
	);
}

export default App;
